"""Tests for the Ask AI FastAPI endpoint validation and rate limiting."""

import asyncio
import sys
import time
from pathlib import Path
from unittest.mock import AsyncMock, patch

import httpx
import pytest

sys.path.insert(0, str(Path(__file__).parent.parent.parent))

from api.ask import app, _check_rate_limit_memory, _memory_store, _RATE_LIMIT


@pytest.fixture
def client():
    return httpx.AsyncClient(transport=httpx.ASGITransport(app=app), base_url="http://test")


@pytest.fixture(autouse=True)
def clear_rate_limit():
    _memory_store.clear()
    yield
    _memory_store.clear()


@pytest.mark.asyncio
async def test_empty_question_returns_422(client):
    # Pydantic's min_length=1 rejects empty strings before the handler runs
    resp = await client.post("/api/ask", json={"question": ""})
    assert resp.status_code == 422


@pytest.mark.asyncio
async def test_question_too_long_returns_422(client):
    resp = await client.post("/api/ask", json={"question": "x" * 501})
    assert resp.status_code == 422


@pytest.mark.asyncio
async def test_rate_limit_blocks_11th_request(client):
    with patch("api.ask.ask_agent", new_callable=AsyncMock, return_value="answer"):
        for i in range(_RATE_LIMIT):
            resp = await client.post(
                "/api/ask",
                json={"question": f"question {i}"},
                headers={"x-forwarded-for": "1.2.3.4"},
            )
            assert resp.status_code == 200, f"Request {i+1} failed unexpectedly"

        # 11th request should be blocked
        resp = await client.post(
            "/api/ask",
            json={"question": "one more"},
            headers={"x-forwarded-for": "1.2.3.4"},
        )
        assert resp.status_code == 429


@pytest.mark.asyncio
async def test_different_ips_have_separate_limits(client):
    with patch("api.ask.ask_agent", new_callable=AsyncMock, return_value="answer"):
        for i in range(_RATE_LIMIT):
            await client.post(
                "/api/ask",
                json={"question": f"q{i}"},
                headers={"x-forwarded-for": "1.1.1.1"},
            )

        # Different IP should still work
        resp = await client.post(
            "/api/ask",
            json={"question": "hello"},
            headers={"x-forwarded-for": "2.2.2.2"},
        )
        assert resp.status_code == 200


@pytest.mark.asyncio
async def test_error_responses_do_not_leak_internals(client):
    with patch("api.ask.ask_agent", new_callable=AsyncMock, side_effect=RuntimeError("secret db error")):
        resp = await client.post(
            "/api/ask",
            json={"question": "test"},
            headers={"x-forwarded-for": "9.9.9.9"},
        )
        assert resp.status_code == 500
        body = resp.json()
        assert "secret" not in body.get("detail", "")
        assert "Something went wrong" in body.get("detail", "")
