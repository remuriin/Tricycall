# Tricycall RAG — Test Questions

A set of test questions to run against `npm run ask -- "question"` once the real docs are ingested. Covers four categories: direct lookups, paraphrased lookups, cross-document questions, and out-of-scope questions that should be correctly refused. Expected source file(s) are noted for each so you can judge whether retrieval picked the right chunk, not just whether the final answer sounded plausible.

Run `npm run ingest` first with `test.md` removed and the four files in `rag-docs/` copied into your `docs/` folder.

---

## 1. Direct lookups
Straightforward questions that closely match the wording in the docs. These should be easy — if any of these fail, something is wrong with chunking or the similarity floor, not just phrasing sensitivity.

| # | Question | Expected source(s) |
|---|---|---|
| 1 | What is the minimum fare? | fares.md |
| 2 | How much is the cancellation fee? | cancellations.md |
| 3 | What documents do I need to become a driver? | driver-verification.md |
| 4 | What does the SOS button do? | safety.md |
| 5 | How long does driver verification take? | driver-verification.md |
| 6 | What discount do senior citizens get? | fares.md |
| 7 | Can I pay with GCash? | fares.md |
| 8 | What happens if my driver cancels? | cancellations.md |

## 2. Paraphrased / indirect lookups
Same information, worded the way a real user would actually ask it — tests whether embeddings capture meaning, not just keyword overlap.

| # | Question | Expected source(s) | Notes |
|---|---|---|---|
| 9 | why was my fare higher than i expected | fares.md | Should surface surge pricing and/or fare estimate sections |
| 10 | my driver never showed up, do i still get charged | cancellations.md | Tests the no-show vs driver-cancel distinction |
| 11 | i got rejected, why | driver-verification.md | Should surface "Common rejection reasons" |
| 12 | is it safe to ride alone at night | safety.md | Should surface night-time safety features |
| 13 | how do i get my license checked again | driver-verification.md | Tests "re-verification" wording match to "license checked" |
| 14 | i think i got overcharged | fares.md | Should surface fare disputes section |

## 3. Cross-document questions
The honest answer draws on two files, or requires the model to say it's incomplete. These are the hardest and most realistic test of whether `topK` and the similarity floor are tuned well — a single-document retrieval set up with `topK: 5` should still pull from multiple files when the question genuinely spans them.

| # | Question | Expected source(s) | Notes |
|---|---|---|---|
| 15 | i want to cancel because i feel unsafe, do i get charged | cancellations.md + safety.md | Tests whether both the "safety concern" cancellation exception and the safety reporting flow surface together |
| 16 | can a driver operate in a different city than where they signed up | driver-verification.md | Single doc, but tests a specific nuance (MTOP is area-locked) rather than a simple fact lookup |
| 17 | what happens to my fare if i report a safety incident mid-trip | safety.md + fares.md | No explicit answer exists in the docs — good test of whether the model admits the gap instead of guessing |

## 4. Out-of-scope — should be correctly refused
Nothing in the docs supports these. The pipeline should return the "I don't have information about that" fallback and cite no sources. If any of these return a confident answer, the similarity floor is too low or the model is being handed irrelevant chunks and improvising anyway — treat that as a priority fix, not a minor one, since avoiding this is the actual job of a RAG pipeline.

| # | Question | Expected behavior |
|---|---|---|
| 18 | who is the CEO of Tricycall | Refuse — not in docs |
| 19 | what's the weather like today | Refuse — unrelated |
| 20 | how do I cancel my Grab ride | Refuse — different company, not in docs |
| 21 | what's the capital of the Philippines | Refuse — unrelated general knowledge |
| 22 | can I bring a pet on the tricycle | Refuse — not covered in any doc |
| 23 | does Tricycall operate in Cebu | Refuse — no service-area list exists in the docs |

---

## How to read the results

- **Right answer, right source cited** → retrieval and generation both working as intended.
- **Right answer, wrong source cited** → the answer happened to be correct, but retrieval got lucky or pulled an adjacent chunk; worth checking why, especially if it recurs.
- **"I don't know" on a question that should have an answer** → similarity floor likely too high, or `topK` too low, or the chunk boundary split the relevant sentence away from its heading context.
- **Confident answer on an out-of-scope question (section 4)** → the most important failure mode to catch. Lower `SIMILARITY_FLOOR` is the wrong fix here; if anything, raise it, since this means irrelevant chunks are clearing the current floor.
- **Partial answer on a cross-document question (section 3) that doesn't acknowledge the gap** → check whether `topK` is large enough to pull chunks from more than one file, and whether the prompt's "say what's missing" instruction is actually being followed by the model.

Keep a running log of pass/fail here as you tune `SIMILARITY_FLOOR`, `topK`, and `MAX_CHARS` — this table is the benchmark to re-run after each change, not a one-time test.
