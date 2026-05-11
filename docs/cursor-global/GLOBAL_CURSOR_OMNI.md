# Global Cursor Omni-Protocol

Your **Terravolt** machine now has user-wide Omni configuration under:

- `%USERPROFILE%\.cursor\rules\*.mdc` — always-on director rules
- `%USERPROFILE%\.cursor\mcp.json` — GitNexus + Context7 + Linear MCP
- `%USERPROFILE%\.cursor\omni-protocol\` — playbooks (`README`, routing, interoperability)
- `%USERPROFILE%\.cursor\skills\omni-protocol-orchestrator\SKILL.md` — personal orchestrator skill

**Restart Cursor** after MCP changes.

Set **CONTEXT7_API_KEY** in Cursor MCP UI for Context7.

This repo (`C:\\omni-protocol`) remains the **reference implementation** for scripts and infra; global `.cursor/` governs agent behavior everywhere.
