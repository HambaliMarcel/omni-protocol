# Intel refresh workflow

When large merges land or monthly maintenance:

1. `npm run intel:gitnexus` — rebuild knowledge graph / `.gitnexus` per GitNexus docs.
2. `npm run intel:graphs` — dependency-cruiser + madge outputs.
3. Summarize deltas in `architecture/SYSTEM_OVERVIEW.md` (short bullet list).
4. Attach graph JSON paths to Linear milestone notes if useful for reviewers.
