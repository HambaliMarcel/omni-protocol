# System overview (structural memory)

This file is the human-facing summary of repository topology. Machine-readable graphs live under `graphs/` (`npm run intel:graphs`) and GitNexus under `.gitnexus/` after `npm run intel:gitnexus`.

## Layers (Omni-Protocol, local OSS)

1. **Structural** — dependency-cruiser, madge, GitNexus MCP.
2. **Contracts** — `openapi/openapi.yaml` + `npm run openapi:lint`.
3. **Specs / ADR** — `/specs`, `/adr`.
4. **Governance** — TrueCourse (`.truecourse/`), Cursor rules (`.cursor/rules`).
5. **Validation** — Playwright `tests/e2e`.
6. **Observability** — self-hosted PostHog (`infra/posthog`).
7. **Institutional** — BookStack (`infra/bookstack`), developer portal (`apps/developer-docs`).

## Next actions

- Refresh graphs after large refactors.
- Link new services to OpenAPI and ADR decisions.
