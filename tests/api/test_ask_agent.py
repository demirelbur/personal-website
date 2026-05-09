"""Tests for the search/agent layer of api/ask.py."""

import asyncio
import sys
from pathlib import Path
from unittest.mock import AsyncMock, patch

import httpx
import pytest

sys.path.insert(0, str(Path(__file__).parent.parent.parent))

from api.ask import (
    app,
    lexical_search,
    build_context,
    SearchRecord,
    RECORDS,
)


SAMPLE_RECORDS = [
    SearchRecord(
        id="1",
        title="Reinforcement Learning Project",
        section="Projects",
        url="/projects/rl",
        tags=["RL", "PyTorch"],
        content="Built a distributed RL training system with 100 actors.",
    ),
    SearchRecord(
        id="2",
        title="About Burak",
        section="About",
        url="/about",
        tags=[],
        content="Burak is a researcher focused on AI systems.",
    ),
    SearchRecord(
        id="3",
        title="Blog Post on Networks",
        section="Blog",
        url="/blog/networks",
        tags=["networking", "5G"],
        content="AI-native network optimization for 5G link adaptation.",
    ),
]


class TestLexicalSearch:
    def test_ranks_title_matches_higher(self):
        results = lexical_search("reinforcement learning", SAMPLE_RECORDS, top_k=3)
        assert results[0].id == "1"

    def test_ranks_tag_matches(self):
        results = lexical_search("PyTorch", SAMPLE_RECORDS, top_k=3)
        assert results[0].id == "1"

    def test_returns_up_to_top_k(self):
        results = lexical_search("AI", SAMPLE_RECORDS, top_k=2)
        assert len(results) <= 2

    def test_empty_query_returns_results(self):
        results = lexical_search("", SAMPLE_RECORDS, top_k=3)
        assert len(results) == 3


class TestBuildContext:
    def test_respects_max_chars_limit(self):
        context = build_context(SAMPLE_RECORDS, max_chars=100)
        assert len(context) <= 150  # slight overhead from separators is fine

    def test_includes_record_content(self):
        context = build_context(SAMPLE_RECORDS[:1], max_chars=10000)
        assert "distributed RL training" in context

    def test_includes_url(self):
        context = build_context(SAMPLE_RECORDS[:1], max_chars=10000)
        assert "/projects/rl" in context


@pytest.fixture
def client():
    return httpx.AsyncClient(transport=httpx.ASGITransport(app=app), base_url="http://test")


@pytest.mark.asyncio
async def test_timeout_returns_504(client):
    async def slow_agent(*args, **kwargs):
        await asyncio.sleep(100)

    with patch("api.ask.ask_agent", new_callable=AsyncMock, side_effect=asyncio.TimeoutError):
        resp = await client.post(
            "/api/ask",
            json={"question": "test timeout"},
            headers={"x-forwarded-for": "5.5.5.5"},
        )
        assert resp.status_code == 504
        assert "too long" in resp.json()["detail"].lower()


@pytest.mark.asyncio
async def test_cors_rejects_unauthorized_origin(client):
    resp = await client.options(
        "/api/ask",
        headers={
            "Origin": "https://evil.com",
            "Access-Control-Request-Method": "POST",
        },
    )
    # CORS middleware should not include the evil origin in allow-origin
    allow_origin = resp.headers.get("access-control-allow-origin", "")
    assert "evil.com" not in allow_origin
