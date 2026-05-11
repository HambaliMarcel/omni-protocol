# TrueCourse prerequisites (OSS)

TrueCourse’s current published CLI (**v0.5.x**) attempts to invoke the **Claude Code** binary (`claude`) even for workflows that historically supported deterministic-only mode.

Until a `claude` binary is installed (or `CLAUDE_CODE_BINARY` points to one), **`npx truecourse analyze` will abort early** on this machine.

Options:

1. Install [Claude Code](https://docs.anthropic.com/en/docs/claude-code) locally if policy allows — then rerun `npm run validate:architecture`.
2. Defer governance automation and rely on **dependency graphs + openapi lint + playwright** until TrueCourse adjusts or you pin an older CLI that supports no-LLM mode.
3. Keep **`TRUECOURSE_TELEMETRY=0`** (or `truecourse telemetry disable`) whenever the CLI becomes available — still required for Omni local OSS posture.
