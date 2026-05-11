# Omni-Protocol (local OSS) — bootstrap repo

Unified **OSS / self-hosted** engineering stack scaffolding for Cursor: structural intelligence (GitNexus + Graphify), specs & ADRs, TrueCourse governance, Playwright smoke tests, OpenAPI contracts, infra docs for PostHog hobby + BookStack, and Cursor rules/workflows.

**Workspace root:** use this folder in Cursor—not `C:\` directly.

Linear tracking & links: [`docs/linear/BACKLOG.md`](docs/linear/BACKLOG.md).

## Global Cursor orchestrator (all projects)

User-wide Omni configuration lives under **`%USERPROFILE%\.cursor\`** rules, MCP servers, orchestration hub, and personal skill. See **[`docs/cursor-global/GLOBAL_CURSOR_OMNI.md`](docs/cursor-global/GLOBAL_CURSOR_OMNI.md)**. Restart Cursor after MCP updates; set the Context7 API key for the Context7 MCP server.

## Prerequisites

- Node **22+** recommended (aligned with toolchain on authoring machine).
- npm (workspaces-aware **10.9+**).
- Docker Desktop (optional, for BookStack / PostHog hobby).
- ~**8 GB+ RAM** if running PostHog hobby per upstream guidance.

## Install

```powershell
cd C:\omni-protocol
npm install
npm run pw:install   # Chromium for Playwright
```

Copy `.env.example` → `.env` for local telemetry/doc URLs.

## Core commands

| Command | Purpose |
|---------|---------|
| `npm run openapi:lint` | Lint `openapi/openapi.yaml` |
| `npm run intel:graphs` | dependency-cruiser + madge → `graphs/` |
| `npm run intel:gitnexus` | GitNexus index (.git Nexus output) |
| `npm run test:e2e` | Playwright (set `PLAYWRIGHT_BASE_URL`) |
| `npm run validate:architecture` | TrueCourse full analyze |

TrueCourse telemetry opt-out:

```powershell
$env:TRUECOURSE_TELEMETRY = "0"
npx truecourse analyze --no-stash --no-skills
```

## Developer docs app

```powershell
npm run apps:docs
```

Default dev server: http://localhost:3000 — see `tests/e2e` for smoke expectations.

## MCP (GitNexus)

Instructions: [`docs/mcp/gitnexus-cursor.md`](docs/mcp/gitnexus-cursor.md).

## Compose stacks

| Stack | Path | Notes |
|-------|------|-------|
| BookStack | [`infra/bookstack/docker-compose.yml`](infra/bookstack/docker-compose.yml) | Port **6875** |
| PostHog | [`infra/posthog/README.md`](infra/posthog/README.md) | Clone upstream hobby deploy |

## Full report

See [`docs/integration/INTEGRATION_REPORT.md`](docs/integration/INTEGRATION_REPORT.md).
