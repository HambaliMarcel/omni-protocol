# Global Cursor Omni-Protocol

Your **Terravolt** machine now has user-wide Omni configuration under:

- `%USERPROFILE%\.cursor\rules\*.mdc` — always-on director rules
- `%USERPROFILE%\.cursor\mcp.json` — GitNexus + Context7 + Linear MCP
- `%USERPROFILE%\.cursor\workflows\` — orchestration Markdown playbooks (phase validation, intel refresh, architecture detect)
- `%USERPROFILE%\.cursor\agent-policies\` — governance text mirrored for agents
- `%USERPROFILE%\.cursor\context-routing\` — pointers into canonical MEMORY_ROUTING
- `%USERPROFILE%\.cursor\omni-protocol\` — hub (`README`, routing, interoperability, **`audit/`**, **`templates/`**)
- `%USERPROFILE%\.cursor\skills\omni-protocol-orchestrator\SKILL.md` — personal orchestrator skill

**Restart Cursor** after MCP changes.

Set **CONTEXT7_API_KEY** in Cursor MCP UI for Context7.

This repo (`C:\\omni-protocol`) remains the **reference implementation** for scripts and infra; global `.cursor/` governs agent behavior everywhere.

Latest **Systems Auditor** output: `%USERPROFILE%\.cursor\omni-protocol\audit\OMNI_PROTOCOL_GLOBAL_AUDIT_2026-05-11.md` (mirrored in-repo at [`docs/audit/OMNI_PROTOCOL_GLOBAL_AUDIT_2026-05-11.md`](../audit/OMNI_PROTOCOL_GLOBAL_AUDIT_2026-05-11.md)).
