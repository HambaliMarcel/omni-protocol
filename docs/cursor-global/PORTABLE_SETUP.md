# Portable setup (new machine)

Goal: clone **omni-protocol** on any laptop or desktop, run one bootstrap, and get the **same Cursor habits** (rules, workflows, MCP defaults) without manually copying files from an old machine.

No em dash style in this doc: use commas and short sentences.

## Quick path (you or your agent)

1. **Clone**  
   `git clone https://github.com/HambaliMarcel/omni-protocol.git`  
   Open **that folder** as the Cursor workspace root (not `C:\`).

2. **Dependencies**  
   ```
   cd omni-protocol
   npm install
   npm run pw:install
   ```

3. **Cursor user directory**  
   ```
   npm run omni:bootstrap
   ```  
   This copies **`.cursor/rules`, `.cursor/workflows`, `.cursor/agent-policies`, `.cursor/context-routing`** into **`~/.cursor/`** (or **`%USERPROFILE%\.cursor`**), and **merges** Omni MCP entries into **`mcp.json`** without deleting servers you already had.

4. **Secrets**  
   Replace **`PASTE_CONTEXT7_API_KEY_HERE`** inside **`~/.cursor/mcp.json`** with your real Context7 API key, or paste the key in Cursor MCP settings instead.

5. **GitNexus**  
   **Windows:** install globally so LadybugDB native bits install reliably, then restart Cursor.  
   ```
   npm install -g gitnexus
   ```  
   Bootstrap already prefers **`%APPDATA%\npm\gitnexus.cmd`** when that file exists.  
   **macOS / Linux:** **`npx gitnexus@latest`** usually works; run **`npm run omni:bootstrap`** again after global install if you switch approaches.

6. **Optional**  
   * **Claude Code** for TrueCourse LLM workflows: install per Anthropic docs.  
   * **Docker** for BookStack / PostHog under **`infra/`**.

7. **Restart Cursor**  
   Then run **`npm run openapi:lint`**, **`npm run validate:architecture`**, and index with **`npm run intel:gitnexus`** when you want graph tools.

## One sentence for your agent

*"Clone omni-protocol, open it as workspace root, run `npm install`, `npm run pw:install`, and `npm run omni:bootstrap`, fix the Context7 placeholder in `~/.cursor/mcp.json`, restart Cursor, and on Windows run `npm install -g gitnexus`."*

## Drift between machines

Different OS paths (global npm, Docker) are expected. The **repo** is the contract. Re-run **`npm run omni:bootstrap`** after you `git pull` if **`.cursor`** overlays in the repo changed.

## Related

* [`GLOBAL_CURSOR_OMNI.md`](./GLOBAL_CURSOR_OMNI.md) (how global vs repo split works)  
* [`../mcp/gitnexus-cursor.md`](../mcp/gitnexus-cursor.md)  
