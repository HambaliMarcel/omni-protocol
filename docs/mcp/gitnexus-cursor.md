# GitNexus (local OSS) + Cursor MCP

GitNexus indexes the repository into a local knowledge graph. **No cloud plan is required.**

## Index

From repo root:

```bash
npm run intel:gitnexus
```

## Cursor MCP (Windows-friendly)

Merge into `%USERPROFILE%\.cursor\mcp.json` (create file if missing). Example:

```json
{
  "mcpServers": {
    "gitnexus": {
      "command": "cmd",
      "args": ["/c", "npx", "-y", "gitnexus@latest", "mcp"]
    }
  }
}
```

If you already have other servers, **merge** the `gitnexus` key only—do not overwrite the whole file.

Restart Cursor after editing.

## Docs

See upstream GitNexus installation & editor setup for updates: [GitNexus installation](https://github.com/abhigyanpatwari/GitNexus).
