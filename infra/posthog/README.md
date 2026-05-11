# PostHog — self-hosted OSS (hobby)

This workspace **does not** target PostHog Cloud. Use the official open-source Docker hobby deployment on this machine or a VM you control.

## Requirements

- Docker + Docker Compose
- At least **~8 GB RAM** for the hobby stack (official guidance — verify current docs)

## Bootstrap (upstream)

Follow the current instructions in the PostHog repository (script `bin/deploy-hobby` or maintained compose). Do not commit full PostHog sources here—clone upstream alongside this repo or use a dedicated infra folder.

Reference: [PostHog self-host documentation](https://posthog.com/docs/self-host)

## Application wiring

Set in `.env` (see root `.env.example`):

- `NEXT_PUBLIC_POSTHOG_KEY` — project API key from your local instance
- `NEXT_PUBLIC_POSTHOG_HOST` — e.g. `http://localhost:8010` (confirm actual port from your deployment)

## Operations

- Schedule backups for ClickHouse/Postgres volumes per upstream runbooks.
- Treat hobby stack as **non-HA**; scale requires different topology.
