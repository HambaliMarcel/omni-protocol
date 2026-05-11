# GitNexus (local OSS) + Cursor MCP

GitNexus indexes the repository into a local knowledge graph. **No cloud plan is required.**

## Index

From repo root:

```bash
npm run intel:gitnexus
```

## Cursor MCP

After **`npm run omni:bootstrap`**, your user **`mcp.json`** should already contain a **gitnexus** entry.

**Windows (recommended):** install GitNexus globally so **`lbugjs.node`** from LadybugDB installs reliably, then keep MCP pointed at **`%APPDATA%\npm\gitnexus.cmd`** with args **`["mcp"]`**. If that file is missing, bootstrap falls back to **`npx -y gitnexus@latest mcp`**.

**macOS / Linux:** **`npx -y gitnexus@latest mcp`** is usually fine. If you hit native loader errors, try a global install or match Node LTS to what GitNexus tested.

Merge extra keys (Linear, Docker gateway) without deleting existing servers. Restart Cursor after edits.

## Docs

Upstream editor setup: [GitNexus README](https://github.com/tsingke/gitnexus/blob/main/gitnexus/README.md).
