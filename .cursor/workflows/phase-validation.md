# Phase validation workflow (operator checklist)

Run in order after a feature slice:

1. `npm run openapi:lint`
2. `npm run intel:graphs` (if dependency shape changed)
3. `npm run validate:architecture` (or `npm run validate:architecture:llm` with Claude auth)
4. `npm run test:e2e` (docs app or API must be up, or accept intentional skips)
5. Update ADR / spec links in PR description

Record failures in Linear issue comments with logs.
