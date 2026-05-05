"""
Ask AI endpoint for Burak Demirel's personal website.
Uses Pydantic AI Agent with OpenRouter to answer questions from website content.
"""

import json
import math
import os
import re
from pathlib import Path
from typing import Optional

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from pydantic_ai import Agent
from pydantic_ai.models.openrouter import OpenRouterModel
from pydantic_ai.providers.openrouter import OpenRouterProvider

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["POST"],
    allow_headers=["*"],
)


# --- Pydantic models ---


class AskRequest(BaseModel):
    question: str = Field(..., min_length=1, max_length=500)


class Source(BaseModel):
    title: str
    section: str
    url: str


class AskResponse(BaseModel):
    answer: str
    sources: list[Source]


class SearchRecord(BaseModel):
    id: str
    title: str
    section: str
    url: str
    tags: list[str] = []
    content: str


# --- Data loading ---

BASE_URL = "https://burakdemirel.dev"


def load_records() -> list[SearchRecord]:
    index_path = Path(__file__).parent.parent / "public" / "search-index.json"
    with open(index_path, "r") as f:
        data = json.load(f)
    records = []
    for item in data:
        if item.get("url", "").startswith("/"):
            item["url"] = BASE_URL + item["url"]
        records.append(SearchRecord(**item))
    return records


def load_embeddings() -> Optional[dict[str, list[float]]]:
    emb_path = (
        Path(__file__).parent.parent / "public" / "search-index.embeddings.json"
    )
    if not emb_path.exists():
        return None
    with open(emb_path, "r") as f:
        data = json.load(f)
    return {item["id"]: item["embedding"] for item in data}


RECORDS = load_records()
EMBEDDINGS = load_embeddings()


# --- Search functions ---


def cosine_similarity(a: list[float], b: list[float]) -> float:
    dot = sum(x * y for x, y in zip(a, b))
    norm_a = math.sqrt(sum(x * x for x in a))
    norm_b = math.sqrt(sum(x * x for x in b))
    if norm_a == 0 or norm_b == 0:
        return 0.0
    return dot / (norm_a * norm_b)


def lexical_search(
    question: str, records: list[SearchRecord], top_k: int = 5
) -> list[SearchRecord]:
    question_lower = question.lower()
    tokens = set(re.findall(r"\w+", question_lower))

    scored = []
    for record in records:
        text = f"{record.title} {record.section} {' '.join(record.tags)} {record.content}".lower()
        score = sum(1 for token in tokens if token in text)
        title_boost = sum(2 for token in tokens if token in record.title.lower())
        tag_boost = sum(
            1.5
            for token in tokens
            if any(token in tag.lower() for tag in record.tags)
        )
        scored.append((record, score + title_boost + tag_boost))

    scored.sort(key=lambda x: x[1], reverse=True)
    return [r for r, _ in scored[:top_k]]


async def embed_text(text: str) -> Optional[list[float]]:
    """Embed text using OpenRouter-compatible embeddings endpoint."""
    import httpx

    api_key = os.environ.get("OPENROUTER_API_KEY")
    model = os.environ.get(
        "OPENROUTER_EMBEDDING_MODEL", "openai/text-embedding-3-small"
    )

    if not api_key:
        return None

    try:
        async with httpx.AsyncClient(timeout=15.0) as client:
            resp = await client.post(
                "https://openrouter.ai/api/v1/embeddings",
                headers={
                    "Authorization": f"Bearer {api_key}",
                    "HTTP-Referer": "https://burakdemirel.dev",
                    "X-Title": "Burak Demirel Personal Website Ask AI",
                },
                json={"model": model, "input": text},
            )
            if resp.status_code != 200:
                return None
            data = resp.json()
            return data["data"][0]["embedding"]
    except Exception:
        return None


async def semantic_search(
    question: str, records: list[SearchRecord], top_k: int = 5
) -> Optional[list[SearchRecord]]:
    if EMBEDDINGS is None:
        return None

    question_embedding = await embed_text(question)
    if question_embedding is None:
        return None

    scored = []
    for record in records:
        if record.id in EMBEDDINGS:
            sim = cosine_similarity(question_embedding, EMBEDDINGS[record.id])
            scored.append((record, sim))

    scored.sort(key=lambda x: x[1], reverse=True)
    return [r for r, _ in scored[:top_k]]


# --- Context building ---


def build_context(records: list[SearchRecord], max_chars: int = 6000) -> str:
    parts = []
    total = 0
    for record in records:
        entry = (
            f"[{record.section}] {record.title}\n{record.content}\nURL: {record.url}\n"
        )
        if total + len(entry) > max_chars:
            break
        parts.append(entry)
        total += len(entry)
    return "\n---\n".join(parts)


# --- Pydantic AI Agent ---

SYSTEM_PROMPT = (
    "You are the Ask AI assistant for Burak Demirel's personal website. "
    "Answer the user's question using only the provided website context. "
    "Do not invent information. "
    'If the answer is not present in the context, say: "I could not find this information on the website." '
    "Keep the answer concise and professional. "
    "At the end of your answer, list relevant source URLs from the context."
)


def create_agent() -> Agent:
    """Create a Pydantic AI Agent configured with OpenRouter and OpenAI gpt-4o-mini."""
    api_key = os.environ.get("OPENROUTER_API_KEY")
    if not api_key:
        raise RuntimeError("OPENROUTER_API_KEY environment variable is required")

    model_name = os.environ.get("OPENROUTER_MODEL", "openai/gpt-4o-mini")

    model = OpenRouterModel(
        model_name,
        provider=OpenRouterProvider(
            api_key=api_key,
            app_url="https://burakdemirel.dev",
            app_title="Burak Demirel Personal Website Ask AI",
        ),
    )

    return Agent(
        model,
        system_prompt=SYSTEM_PROMPT,
    )


async def ask_agent(question: str, context: str) -> str:
    """Run the Pydantic AI agent to answer the question given retrieved context."""
    agent = create_agent()
    user_message = f"Website context:\n{context}\n\nQuestion: {question}"
    result = await agent.run(user_message)
    return result.output


# --- Endpoint ---


@app.post("/api/ask")
async def ask(request: AskRequest) -> AskResponse:
    question = request.question.strip()
    if not question:
        raise HTTPException(status_code=400, detail="Question cannot be empty")

    # Try semantic search first, fall back to lexical
    results = await semantic_search(question, RECORDS, top_k=5)
    if results is None:
        results = lexical_search(question, RECORDS, top_k=5)

    context = build_context(results)

    try:
        answer = await ask_agent(question, context)
    except RuntimeError as e:
        raise HTTPException(status_code=500, detail=str(e))
    except Exception:
        raise HTTPException(status_code=502, detail="AI service unavailable")

    sources = [Source(title=r.title, section=r.section, url=r.url) for r in results[:3]]

    return AskResponse(answer=answer, sources=sources)
