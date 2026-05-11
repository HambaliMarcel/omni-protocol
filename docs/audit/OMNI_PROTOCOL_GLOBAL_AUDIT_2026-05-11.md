# Omni-Protocol Global Audit — 2026-05-11 (refresh)

**Evidence snapshot (this run):** Git `2.47.1.windows.2`, Node `v22.22.0`, npm `11.12.1`, **GitNexus** CLI `1.6.4` (global `gitnexus.cmd` + repo `devDependency`; LadybugDB native present under global install), reference repo `C:\omni-protocol` workspaces installed. **Docker Desktop** engine **reachable** (client/server **29.4.2**, `desktop-linux`). **Playwright** `@playwright/test` **1.59.1**, **Redocly** CLI **1.34.14**, **TrueCourse** **0.5.11**. **Claude Code** CLI present at `%USERPROFILE%\.local\bin\claude.exe`. **Context7** configured in `mcp.json` as remote MCP (`https://mcp.context7.com/mcp`) with API key in headers (verify green in Cursor MCP UI).

---

## 1. Omni-Protocol Global Status Report

**Overall:** The Omni-Protocol control plane remains **active globally** via `%USERPROFILE%\.cursor\`: `alwaysApply` rules (`00`–`05`, plus toolchain / validation / memory), MCP (**GitNexus** via global shim, **Context7** remote, **Linear** remote, **Docker** MCP gateway profile), workflows, governance mirror, context routing, **omni-protocol** hub templates, and skill `skills\omni-protocol-orchestrator\SKILL.md`. Canonical **reference implementation:** `C:\omni-protocol`.

**Strengths:**

- **GitNexus:** global install avoids Windows `npx` + `@ladybugdb/core` copy gap; MCP uses `%APPDATA%\npm\gitnexus.cmd`.
- **Contracts:** `openapi:lint` **passes** on reference OpenAPI (this run).
- **TrueCourse:** `npx truecourse analyze --no-stash --no-skills --no-llm` **exit 0** (9 code-quality violations reported: 3 medium, 6 low — review via `truecourse list` / dashboard).
- **Playwright:** `PLAYWRIGHT_SKIP_WEBSERVER=1` → **exit 0**, **2 skipped** (same intentional posture without docs server).
- **Docker engine** online — infra compose can be brought up without “daemon offline” blocker.

**Gaps:**

- **Context7:** key is in `mcp.json`; confirm **MCP server healthy** in Cursor after reload (no automated round-trip in this audit).
- **BookStack / PostHog:** compose dirs exist; **stacks not started** in this run (engine ready only).
- **Graphify** product server: not deployed; repo uses **dependency-cruiser + madge** for graphs (`intel:graphs`).
- **FumaDocs:** app under `apps/developer-docs`; full “generator happy path” not re-tested here.
- **Screenity:** extension workflow only, not agent-callable.

---

## 2. Installed Tool Matrix

Legend: ✅ verified usable · ⚠️ partial / gated · ❌ not installed or blocked

| # | Tool | Installed | Global / repo access | Repo automation | Cursor / agent | Integration notes |
|---|------|-----------|----------------------|-------------------|----------------|---------------------|
| 1 | **GitNexus** | ✅ `1.6.4` (global + repo) | ✅ MCP: `gitnexus.cmd` in `mcp.json` | ✅ `intel:gitnexus` / `gitnexus analyze` | ✅ MCP + CLI | Use **global** MCP on Windows; `npx … mcp` can miss `lbugjs.node` in cache. |
| 2 | **Graphify** | ⚠️ Not as dedicated Graphify service | N/A | ⚠️ `intel:graphs` (cruiser + madge) | ⚠️ Rules reference Graphify when external stack exists | Optional upstream Graphify; current graphs are **compatible intent**. |
| 3 | **Context7** | ✅ Remote MCP config | ✅ `url` + `CONTEXT7_API_KEY` header in `mcp.json` | N/A (MCP-time) | ⚠️ Confirm server **green** in UI | Replace key if file is ever leaked/synced. |
| 4 | **TrueCourse** | ✅ `0.5.11` | ✅ `npx truecourse` | ✅ `validate:architecture` / `validate:architecture:llm` | ✅ `analyze` **runs** (no-LLM smoke); Claude at `.local\bin` | **9** quality violations to triage (`truecourse list`). |
| 5 | **Playwright** | ✅ `1.59.1` | Per-project | ✅ `test:e2e`, `pw:install` | ✅ Agent runs npm scripts | With `PLAYWRIGHT_SKIP_WEBSERVER=1`, smoke tests **skipped** by design. |
| 6 | **Swagger / OpenAPI** | ✅ Redocly `1.34.14` | Per-project | ✅ `openapi:lint` | ✅ Lint passes | Spec must stay aligned with handlers. |
| 7 | **PostHog** | ⚠️ Docs + hobby `infra/posthog` | N/A | ⚠️ Not running (compose not started) | ⚠️ Events only when app wired | Start stack per `infra/posthog/README.md` (Docker ready). |
| 8 | **BookStack** | ⚠️ `infra/bookstack` compose | N/A | ⚠️ Not running (compose not started) | ⚠️ Human institutional memory | Start compose; link runbooks from ADRs. |
| 9 | **FumaDocs** | ⚠️ Next portal + `apps/developer-docs` | App in monorepo | ⚠️ Dev server not validated this run | ✅ Code in repo | Use `apps:docs` when exercising E2E without skip. |
| 10 | **Screenity** | ⚠️ Browser extension | User machine | ❌ | ❌ | Recordings → runbooks / BookStack. |
| 11 | **OpenSpec** | ✅ `specs/` + templates + README | Repo | ✅ Specs as intent source | ✅ Rules route to `specs/` | Align with org OpenSpec standard if adopted. |
| 12 | **ADR system** | ✅ ADR layout + global template | `omni-protocol\templates\` | ✅ Human + agent | ✅ Memory routing priority | ADR on boundary changes. |

---

## 3. Missing Components List

- **Operational validation:** bring up **BookStack** / **PostHog** hobby stacks when you want runtime observability drills (Docker engine is ready).
- **Context7:** manual **MCP health check** in Cursor after edits to `mcp.json`.
- **TrueCourse:** address reported **9 violations** (3 medium, 6 low) or accept as backlog with rationale.
- **Optional:** dedicated **Graphify** deployment vs. current cruiser/madge graphs.
- **E2E without skips:** run docs app + `test:e2e` for full proof.

---

## 4. Broken Integration Report

| Integration | Symptom | Severity | Fix |
|-------------|---------|----------|-----|
| PostHog / BookStack | Stacks not started | Low–medium until you need them | `docker compose up` per `infra/*/README.md`. |
| Playwright smoke | 2 tests skipped without webserver | Low if intentional | `npm run apps:docs` + `npm run test:e2e`. |
| TrueCourse quality gate | 9 violations recorded | Medium (governance) | `truecourse list` → fix or document waivers. |

No OpenAPI lint failures on reference spec this run.

**Resolved vs. prior snapshot:** Docker engine **online**; GitNexus Windows **npx native** issue **mitigated** via global `gitnexus.cmd`; Context7 **key present** in MCP config (verify in UI); TrueCourse **analyze** no longer blocked by missing Claude on PATH (`.local\bin\claude.exe` found).

---

## 5. Global Cursor Configuration Summary

| Area | Path / artifact | Purpose |
|------|------------------|---------|
| User rules | `%USERPROFILE%\.cursor\rules\` | `00`–`05` + memory, MCP map, validation (`alwaysApply: true`). |
| MCP | `%USERPROFILE%\.cursor\mcp.json` | GitNexus (`gitnexus.cmd`), Context7 (remote + headers), Linear (`mcp-remote`), Docker MCP gateway (`MCP_DOCKER`). |
| Workflows | `%USERPROFILE%\.cursor\workflows\` | Phase validation, intel refresh, context feedback, architecture detect, index. |
| Governance | `%USERPROFILE%\.cursor\agent-policies\OMNI_GOVERNANCE.md` | Architectural discipline text. |
| Context routing | `%USERPROFILE%\.cursor\context-routing\CANONICAL_ROUTES.md` | Canonical memory order pointer. |
| Hub | `%USERPROFILE%\.cursor\omni-protocol\` | README, MEMORY_ROUTING, TOOL_INTEROP_MAP, VALIDATION_LOOP, templates, **this audit**. |
| Skill | `%USERPROFILE%\.cursor\skills\omni-protocol-orchestrator\SKILL.md` | Invokable orchestration skill. |
| Reference repo | `C:\omni-protocol` | Scripts, OpenAPI, Playwright, apps, infra docs. |

---

## 6. Workflow Activation Summary

*(Unchanged — policy-driven via rules `04`–`05` + director.)*

| Workflow | Location | Trigger (agent behavior) |
|----------|----------|---------------------------|
| Phase validation | `workflows\phase-validation.md` | After feature slices; OpenAPI + graphs + optional TrueCourse + E2E. |
| Intel refresh | `workflows\intel-refresh.md` | Post-merge / periodic graph + GitNexus refresh. |
| Context feedback | `workflows\context-feedback.md` | Telemetry → spec / BookStack loop. |
| Architecture detect | `workflows\architecture-detect.md` | New or unknown repo layout. |
| Default loop | `omni-protocol\workflows\VALIDATION_LOOP.md` | Short proof-of-change sequence. |

---

## 7. Memory Routing Summary

Canonical order (`MEMORY_ROUTING.md` + rule `01`):

1. **Structural** — GitNexus MCP, `architecture/`, `graphs/`, `.gitnexus`.
2. **Decisions** — `adr/`, `docs/adr/`.
3. **Product intent** — `specs/`, OpenSpec layouts.
4. **API contracts** — OpenAPI / Swagger in-repo.
5. **Fresh external docs** — Context7 (when MCP healthy).
6. **Mirrored docs** — `external-docs/` if present.
7. **Runtime truth** — PostHog / BookStack when operational.

---

## 8. Automation Readiness Score

**Score: 84 / 100** (weighted heuristic; improved vs. prior **72** mainly due to Docker, GitNexus MCP path, Context7 key present, TrueCourse + Claude on machine.)

| Criterion | Weight | Score (0–10) | Notes |
|-----------|--------|--------------|-------|
| Global rules loaded | 15 | 14 | Six always-on rules across projects. |
| MCP structural path | 15 | 14 | GitNexus via global shim + Ladybug OK. |
| External doc path (Context7) | 12 | 9 | Remote + key configured — confirm UI green. |
| Contract lint automation | 12 | 12 | `openapi:lint` pass. |
| E2E automation | 12 | 7 | Harness OK; skips without server. |
| Governance (TrueCourse) | 10 | 8 | `analyze` runs; violations remain. |
| Observability stack | 8 | 5 | Docker up; BookStack/PostHog not running. |
| Templates & playbooks | 8 | 8 | Templates + workflows in hub. |
| Knowledge preservation (ADR/spec) | 8 | 7 | Wired; discipline enforced by policy. |

---

## 9. Recommended Optimizations

1. **Cursor MCP:** reload servers; confirm **Context7** + **GitNexus** green.
2. **`truecourse list`** — resolve or document the **9** quality violations.
3. **Compose smoke:** BookStack + PostHog when you need institutional/telemetry proof (engine is ready).
4. **CI:** wire `openapi:lint`, `intel:graphs`, TrueCourse `--diff` on golden repos.
5. **Periodic full E2E:** run `apps:docs` + `test:e2e` without skip env.
6. **Redocly:** optional global upgrade (`2.x` banner in lint output).

---

## 10. Remaining Manual Actions

- [ ] Cursor → MCP: confirm **Context7** + **GitNexus** connected after reload.
- [ ] **`truecourse list`** / dashboard — triage **9 violations**.
- [ ] **BookStack / PostHog:** `docker compose` bring-up when needed.
- [ ] **Playwright:** full run against running docs app (no skip).
- [ ] **Screenity** on engineer machines for runbook-linked recordings.
- [ ] Org stance: **Graphify product** vs **cruiser/madge** (ADR if both).

---

### Validation evidence (this audit run)

| Check | Result |
|-------|--------|
| `npm run openapi:lint` (`C:\omni-protocol`) | **Pass** (valid in 60ms) |
| `npm run test:e2e` with `PLAYWRIGHT_SKIP_WEBSERVER=1` | **Exit 0**; **2 skipped** |
| `npx truecourse analyze --no-stash --no-skills --no-llm` | **Exit 0**; **9** quality violations (3 medium, 6 low) |
| `gitnexus --version` (global) | `1.6.4` |
| Ladybug `lbugjs.node` under global `gitnexus` | **Present** |
| `claude.exe` | `%USERPROFILE%\.local\bin\claude.exe` |
| Docker engine | **Reachable** (29.4.2) |

---

*Copy for repos: mirror to `docs/audit/OMNI_PROTOCOL_GLOBAL_AUDIT_2026-05-11.md` under `C:\omni-protocol` if you keep repo-local evidence.*
