# Context feedback workflow (telemetry → improvement)

With self-hosted PostHog:

1. Define or verify events in `docs/telemetry/event-catalog.md`.
2. In PostHog UI (local), build a funnel or insight for the feature under test.
3. Capture findings in the feature spec “Learnings” section and/or BookStack runbook.
4. If behavior diverges from spec, open follow-up Linear issue; consider new ADR if architectural.

No external SaaS analytics required.
