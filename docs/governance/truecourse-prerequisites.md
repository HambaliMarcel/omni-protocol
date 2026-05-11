# TrueCourse prerequisites (OSS)

## Claude Code CLI

TrueCourse **v0.5.x** requires the **`claude`** binary on PATH (or `CLAUDE_CODE_BINARY` set). Typical install:

- Windows: `winget install Anthropic.ClaudeCode` (adds User PATH; reopen terminal or Cursor).

Daily coding stays in **Cursor**; Claude Code is a **dependency** for TrueCourse, not a replacement IDE.

## Unattended (CI / agents)

Telemetry is disabled on this workspace via `npx truecourse telemetry disable` (already run).

For non-interactive analysis without paid LLM policy checks, use the repo script (frozen flags):

```powershell
npm run validate:architecture
```

Equivalent manual command: `npx truecourse analyze --no-stash --no-skills --no-llm`

## Optional LLM rules

Governance with Claude-backed rules costs tokens and needs an authenticated Claude Code setup:

```powershell
npm run validate:architecture:llm
```

## Stuck lock file

If you see “Another analyze is already running” and no process holds the lock, delete:

`C:\omni-protocol\.truecourse\.analyze.lock`
