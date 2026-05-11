# Omni-Protocol (local OSS), portable bootstrap repo

Unified **OSS / self-hosted** engineering stack scaffolding for Cursor: structural intelligence (GitNexus + local graphs), specs and ADRs, TrueCourse governance, Playwright smoke tests, OpenAPI contracts, infra docs for PostHog hobby and BookStack, and Cursor rules that travel with the repo.

**Workspace root:** open **this cloned folder** in Cursor, not a drive root like `C:\`.

**New machine or new checkout:** read **[`docs/cursor-global/PORTABLE_SETUP.md`](docs/cursor-global/PORTABLE_SETUP.md)**, then run **`npm run omni:bootstrap`** after **`npm install`**. That copies repo **`.cursor`** overlays into your user **`.cursor`** folder and merges Omni MCP defaults.

Linear tracking and links: [`docs/linear/BACKLOG.md`](docs/linear/BACKLOG.md).

## Global Cursor orchestrator (all projects)

User-wide Omni configuration is created or updated by **`npm run omni:bootstrap`** (from this repo) and lives under **`%USERPROFILE%\.cursor\`** on Windows or **`~/.cursor`** on macOS and Linux. See **[`docs/cursor-global/GLOBAL_CURSOR_OMNI.md`](docs/cursor-global/GLOBAL_CURSOR_OMNI.md)**. Restart Cursor after MCP updates. Set the Context7 API key in **`mcp.json`** or the Cursor MCP UI.

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
| `npm run validate:architecture` | TrueCourse static analyze (`--no-llm`, agent/CI safe) |
| `npm run validate:architecture:llm` | TrueCourse with LLM rules (auth + cost) |

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

Systems auditor rollup (globally authoritative copy under `%USERPROFILE%\.cursor\omni-protocol\audit\`): [`docs/audit/OMNI_PROTOCOL_GLOBAL_AUDIT_2026-05-11.md`](docs/audit/OMNI_PROTOCOL_GLOBAL_AUDIT_2026-05-11.md).
