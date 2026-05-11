# Global Cursor Omni-Protocol

Your user-wide Omni configuration is expected under **`.cursor`** in your profile (Windows: **`%USERPROFILE%\.cursor`**, Unix: **`~/.cursor`**).

Typical layout after **`npm run omni:bootstrap`** from the **omni-protocol** repo clone:

* **`rules/*.mdc`** including portable rules shipped from this repo (merge with any personal rules you keep)
* **`mcp.json`** merged with GitNexus and Context7 defaults (see [`PORTABLE_SETUP.md`](./PORTABLE_SETUP.md))
* **`workflows/`** repo playbooks (phase validation, intel refresh, context feedback)
* **`agent-policies/`** and **`context-routing/`** stubs from the repo
* **`omni-protocol/`** optional stub created from **`templates/cursor-global/user-hub`**

**Restart Cursor** after MCP changes.

Put your real **Context7** key in **`mcp.json`** or the Cursor MCP UI (never commit keys).

This Git repo stays the **reference implementation** for scripts and infra. The global **`.cursor`** dir is how agents behave across workspaces on that machine.

Latest **Systems Auditor** mirror in-repo: [`docs/audit/OMNI_PROTOCOL_GLOBAL_AUDIT_2026-05-11.md`](../audit/OMNI_PROTOCOL_GLOBAL_AUDIT_2026-05-11.md). A richer personal hub on an original workstation may still exist only on that disk. Copy extra Markdown by hand if you want the same files everywhere.
