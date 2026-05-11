# Omni-Protocol — integration report (Local OSS)

_Last updated: 2026-05-11 — repo `omni-protocol-stack`._

## 1. Full integration report

This repository bootstraps the **Omni-Protocol engineering stack** using **OSS and self-hosted components only** on Windows (adaptable elsewhere). Layers implemented or documented-as-code:

| Layer | Artifact / command | Status |
|-------|---------------------|--------|
| Structural intelligence | `npm run intel:graphs`, `npm run intel:gitnexus`, `docs/mcp/gitnexus-cursor.md` | Scaffolded |
| Specs | `specs/` templates | Scaffolded |
| ADR | `adr/` | Scaffolded + ADR-0000 |
| Governance | TrueCourse `.truecourse/` (after analyze), Cursor `.cursor/rules` | Partially automated |
| Contracts | `openapi/openapi.yaml`, `npm run openapi:lint` | Scaffolded |
| Local external knowledge | `external-docs/` | Policy + placeholders |
| Validation | Playwright `tests/e2e`, `openapi:lint`, TrueCourse diff | Scaffolded |
| Observability | `infra/posthog/README.md`, `docs/telemetry/event-catalog.md` | Docs-first |
| Institutional memory | BookStack `infra/bookstack/docker-compose.yml`, wiki IA doc | Compose ready |
| Developer portal | `apps/developer-docs` (Next.js) | Shell |
| Tracking | Linear project + backlog pointer `docs/linear/BACKLOG.md` | Linked |

Operational tracking: **[Linear — Omni-Protocol — Local OSS Engineering Stack](https://linear.app/terravolt/project/omni-protocol-local-oss-engineering-stack-3075d7f78a64)** (`TER-5` … `TER-32`).

## 2. Installed tooling matrix

| Capability | Implementation | Licensing |
|------------|----------------|-----------|
| Editor agent | Cursor + project rules/workflows | Cursor ToS |
| Repo graph MCP | GitNexus (`gitnexus` npm) | OSS |
| Dep graph | dependency-cruiser, madge | OSS |
| Arch lint | TrueCourse (`truecourse`) | OSS (MIT; telemetry disable locally) |
| API lint | Redocly CLI (`@redocly/cli`) | OSS CLI |
| E2E | Playwright (`@playwright/test`) | OSS |
| Analytics (target) | PostHog self-hosted hobby stack | OSS (compose upstream) |
| Wiki (target) | BookStack Docker (linuxserver) | OSS |

**Explicitly avoided in policy:** Context7 SaaS MCP, PostHog Cloud defaults, unmanaged external doc hallucination paths.

## 3. Repository architecture map

```
omni-protocol/
├── .cursor/                 # Governance + workflows (Cursor-native)
├── adr/                     # Architectural decisions
├── apps/developer-docs/     # Next developer portal shell
├── architecture/            # Narrative topology
├── context-map/             # Agent routing priorities
├── docs/                    # Analysis, gov, telemetry, MCP, integrations
├── external-docs/           # Mirrored upstream docs ONLY
├── graphs/                  # Generated dependency graphs
├── infra/bookstack          # Compose stack
├── infra/posthog            # Self-host instructions (upstream clone)
├── openapi/                 # Contract source of truth
├── scripts/regen-graphs.mjs
├── specs/                   # OpenSpec workspace
├── tests/e2e/               # Playwright
└── package.json             # npm scripts & dev tooling
```

## 4. AI orchestration flow

```text
Intent (Linear + specs)
       ↓
Context routing (.cursor/context-routing + context-map)
       ↓
Governed codegen (rules: local-first + architecture + validation)
       ↓
Contract check (openapi:lint)
       ↓
Structural diff (graphs / TrueCourse --diff optional)
       ↓
Runtime check (Playwright smoke)
       ↓
Telemetry feedback (PostHog local) + wiki capture (BookStack)
```

## 5. Validation checklist

- [ ] `npm ci` / `npm install` completes at repo root  
- [ ] `npm run openapi:lint` passes  
- [ ] `npm run intel:graphs` produces `graphs/` artifacts  
- [ ] `npm run pw:install` then `npm run test:e2e` (with dev server optional / skips documented)  
- [ ] `TRUECOURSE_TELEMETRY=0 npx truecourse analyze --no-stash --no-skills` after installing Claude Code per `docs/governance/truecourse-prerequisites.md` (CLI currently requires `claude` binary)
- [ ] GitNexus MCP merges into user `mcp.json` and indexes repo  
- [ ] BookStack compose smoke (`docker compose up`) when Docker available  
- [ ] PostHog hobby bootstrap per `infra/posthog/README.md` when resources allow  

## 6. Remaining manual tasks

| Task | Owner | Notes |
|------|-------|-------|
| Fill `docs/analysis/*` matrices | Engineer | Matches Linear P1 tickets |
| Merge GitNexus MCP snippet | You | `%USERPROFILE%\.cursor\mcp.json` |
| Vendor libs into `external-docs/` | Team | Per library `SOURCE.md` |
| Provision PostHog hobby | Ops | Hardware + compose |
| Decide TrueCourse hooks | Team | Latency vs gate strength |
| BookStack TLS + backups prod | Ops | Beyond local stubs |

## 7. Optimization recommendations

- Prefer `npm run intel:graphs` on a pre-commit cron or nightly CI vs every edit.  
- Keep OpenAPI deltas small — split services if spec churn explodes.  
- Use selective TrueCourse categories to reduce analyzer time early.  

## 8. Security considerations

- Secrets only in `.env` (ignored). Rotate BookStack defaults before any shared network exposure.  
- Self-hosted telemetry still contains behavioral data — restrict instance network access.  
- Review Docker socket exposure on shared machines when agents run compose.  

## 9. Scalability considerations

- Hobby PostHog is not HA; migrate to monitored cluster only with an explicit ADR.  
- BookStack + MariaDB volumes need backup/restore rehearsals.  
- GitNexus / TrueCourse runtimes scale with repo size — adjust CI parallelism.  

## 10. Future enhancement roadmap

1. Wire CI (GitHub Actions / Azure DevOps) running openapi + playwright + TrueCourse diff.  
2. Promote developer-docs to full FumaDocs MDX routing (currently Next shell ready for layering).  
3. Automate `external-docs` mirroring scripts per dependency upgrade.  
4. Optional Grafana stack for infra metrics beside PostHog product analytics (ADR gated).  

---

_See also: project README and Linear documents “Master playbook” + “OSS tooling matrix”._
