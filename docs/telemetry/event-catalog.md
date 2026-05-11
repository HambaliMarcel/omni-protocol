# Telemetry event catalog (local PostHog OSS)

All events must:

- avoid PII in property keys/values
- use consistent namespaces (examples: `app:`, `api:`, `perf:`)
- map to spec acceptance criteria where applicable

| Event key | When | Properties |
|-----------|------|------------|
| `app:session_start` | SPA mount | `route` |
| `api:request_error` | 5xx / client error class | `path`, `code` |

Update this table when adding instrumentation. Point SDK only at **self-hosted** instance from `.env`.
