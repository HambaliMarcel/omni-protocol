# Agent policies (safety)

## Destructive operations

Require explicit human approval before:

- deleting volumes (`docker volume rm`), dropping databases,
- rewriting git history (`reset --hard`, `push --force` to shared branches),
- disabling security tooling (TrueCourse hooks, openapi lint gates).

## Infra commands

Docker Compose Bring-up is allowed locally for `infra/bookstack` and hobby PostHog **only** inside documented compose directories. Secrets live in `.env` (never commit).

## Data handling

No production customer data in local hobby analytics or BookStack demo instances unless approved.

## Branching

Default: feature branches; merge via PR referencing Linear issue IDs where applicable (`TER-*`).
