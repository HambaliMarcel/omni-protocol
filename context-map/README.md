# Context map (routing index)

Use this map **before** stuffing large raw files into the agent context.

| Priority | Source | When to load |
|----------|--------|----------------|
| 1 | `architecture/SYSTEM_OVERVIEW.md` | Always for repo-wide work |
| 2 | `.truecourse/LATEST.json` (summary via `truecourse list`) | Before merges / refactor |
| 3 | `adr/` newest decisions | Architectural or cross-cutting change |
| 4 | `specs/` for active feature | Feature implementation |
| 5 | `openapi/openapi.yaml` | API client/server work |
| 6 | `external-docs/` vendored refs | Framework/library factual questions (**not** Context7 SaaS) |
| 7 | `graphs/*.json` | Impact / dependency reasoning |
| 8 | `docs/telemetry/event-catalog.md` | Product instrumentation |

Stale structural outputs: rerun `npm run intel:graphs` + `npm run intel:gitnexus`.
