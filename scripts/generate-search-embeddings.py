"""
Generate embeddings for search-index.json records.
Stores results in public/search-index.embeddings.json.

Usage:
    OPENROUTER_API_KEY=sk-... python scripts/generate-search-embeddings.py

Environment variables:
    OPENROUTER_API_KEY          - Required
    OPENROUTER_EMBEDDING_MODEL  - Optional, defaults to openai/text-embedding-3-small
"""

import json
import os
import sys
import time
from pathlib import Path

import httpx

BASE_DIR = Path(__file__).parent.parent
INDEX_PATH = BASE_DIR / "public" / "search-index.json"
OUTPUT_PATH = BASE_DIR / "public" / "search-index.embeddings.json"

API_KEY = os.environ.get("OPENROUTER_API_KEY")
MODEL = os.environ.get("OPENROUTER_EMBEDDING_MODEL", "openai/text-embedding-3-small")

if not API_KEY:
    print("Error: OPENROUTER_API_KEY environment variable is required.")
    sys.exit(1)


def combine_text(record: dict) -> str:
    parts = [
        record.get("title", ""),
        record.get("section", ""),
        " ".join(record.get("tags", [])),
        record.get("content", ""),
    ]
    return " ".join(p for p in parts if p)


def get_embedding(text: str) -> list[float] | None:
    try:
        resp = httpx.post(
            "https://openrouter.ai/api/v1/embeddings",
            headers={
                "Authorization": f"Bearer {API_KEY}",
                "HTTP-Referer": "https://burakdemirel.dev",
                "X-Title": "Burak Demirel Personal Website Ask AI",
                "Content-Type": "application/json",
            },
            json={"model": MODEL, "input": text},
            timeout=30.0,
        )
        if resp.status_code != 200:
            print(f"  Error: HTTP {resp.status_code} - {resp.text[:200]}")
            return None
        data = resp.json()
        return data["data"][0]["embedding"]
    except Exception as e:
        print(f"  Error: {e}")
        return None


def main():
    with open(INDEX_PATH, "r") as f:
        records = json.load(f)

    print(f"Loaded {len(records)} records from {INDEX_PATH}")
    print(f"Using model: {MODEL}")
    print()

    embeddings = []
    for i, record in enumerate(records):
        record_id = record["id"]
        text = combine_text(record)
        print(f"  [{i+1}/{len(records)}] Embedding: {record_id}...")

        embedding = get_embedding(text)
        if embedding is None:
            print(f"    Failed to generate embedding for {record_id}. Skipping.")
            continue

        embeddings.append({"id": record_id, "embedding": embedding})
        time.sleep(0.2)  # rate limiting

    with open(OUTPUT_PATH, "w") as f:
        json.dump(embeddings, f)

    print()
    print(f"Done. Saved {len(embeddings)} embeddings to {OUTPUT_PATH}")


if __name__ == "__main__":
    main()
