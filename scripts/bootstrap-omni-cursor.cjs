'use strict';

/**
 * Copies repo-level `.cursor/` overlays into the user's `%USERPROFILE%/.cursor` (Windows)
 * or `$HOME/.cursor` (macOS/Linux), then merges Omni MCP defaults into `mcp.json`
 * without removing servers you already configured.
 *
 * Run from repo root: npm run omni:bootstrap
 */

const fs = require('fs');
const path = require('path');
const os = require('os');

const repoRoot = path.resolve(__dirname, '..');
const home = os.homedir();
const userCursor = path.join(home, '.cursor');
const repoCursor = path.join(repoRoot, '.cursor');
const partialPath = path.join(repoRoot, 'templates', 'cursor-global', 'mcp.omni.json');

function log(msg) {
  console.log(`[omni:bootstrap] ${msg}`);
}

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  fs.cpSync(src, dest, { recursive: true });
}

function defaultGitnexusServer() {
  if (process.platform === 'win32') {
    const npmGlobalCmd = path.join(process.env.APPDATA || '', 'npm', 'gitnexus.cmd');
    if (fs.existsSync(npmGlobalCmd)) {
      return { command: npmGlobalCmd, args: ['mcp'] };
    }
  }
  return { command: 'npx', args: ['-y', 'gitnexus@latest', 'mcp'] };
}

function mergeMcp() {
  const mcpPath = path.join(userCursor, 'mcp.json');
  let merged = { mcpServers: {} };

  if (fs.existsSync(mcpPath)) {
    try {
      merged = JSON.parse(fs.readFileSync(mcpPath, 'utf8'));
    } catch {
      log('warning: existing mcp.json invalid JSON, backing up to mcp.json.bak.omni');
      fs.copyFileSync(mcpPath, `${mcpPath}.bak.omni`);
    }
    if (!merged.mcpServers || typeof merged.mcpServers !== 'object') merged.mcpServers = {};
  }

  if (!fs.existsSync(partialPath)) {
    throw new Error(`missing template ${partialPath}`);
  }
  const partial = JSON.parse(fs.readFileSync(partialPath, 'utf8'));
  const omniServers = partial.mcpServers || {};

  for (const [key, val] of Object.entries(omniServers)) {
    if (merged.mcpServers[key]) {
      log(`MCP server "${key}" already present, left unchanged`);
    } else {
      merged.mcpServers[key] = val;
      log(`MCP server "${key}" added from Omni template`);
    }
  }

  if (!merged.mcpServers.gitnexus) {
    merged.mcpServers.gitnexus = defaultGitnexusServer();
    log('MCP server "gitnexus" added (default for this OS)');
  }

  fs.mkdirSync(userCursor, { recursive: true });
  fs.writeFileSync(mcpPath, `${JSON.stringify(merged, null, 2)}\n`, 'utf8');
  log(`updated ${mcpPath}`);
}

function main() {
  log(`repo root: ${repoRoot}`);
  log(`user Cursor dir: ${userCursor}`);

  const subdirs = ['rules', 'workflows', 'agent-policies', 'context-routing'];
  for (const sub of subdirs) {
    const from = path.join(repoCursor, sub);
    const to = path.join(userCursor, sub);
    if (fs.existsSync(from)) {
      copyDir(from, to);
      log(`synced .cursor/${sub}/ -> ${to}`);
    }
  }

  const hubSrc = path.join(repoRoot, 'templates', 'cursor-global', 'user-hub');
  const hubDest = path.join(userCursor, 'omni-protocol');
  if (fs.existsSync(hubSrc)) {
    copyDir(hubSrc, hubDest);
    log(`synced bundled hub templates -> ${hubDest}`);
  }

  mergeMcp();

  console.log('');
  console.log('Next: replace PASTE_CONTEXT7_API_KEY_HERE in ~/.cursor/mcp.json (or Cursor MCP UI).');
  console.log('Windows: npm install -g gitnexus so GitNexus MCP stays stable (optional on macOS/Linux).');
  console.log('Then: restart Cursor, open this repo as workspace root, npm install, npm run pw:install.');
}

main();
