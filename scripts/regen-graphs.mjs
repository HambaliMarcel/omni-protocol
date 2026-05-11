import { mkdirSync, writeFileSync } from "node:fs";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
mkdirSync(join(root, "graphs"), { recursive: true });

writeFileSync(
  join(root, "graphs", "README.md"),
  `# Graph artifacts (Graphify layer)

Run \`npm run intel:graphs\`.

- dependency-graph.json — dependency-cruiser (local OSS)
- madge-graph.json — madge (optional)

Human narrative: update \`architecture/SYSTEM_OVERVIEW.md\` when topology changes materially.
`,
  "utf8"
);

try {
  execSync(
    'npx depcruise --config .dependency-cruiser.js -T json -f graphs/dependency-graph.json "apps/**/*.{ts,tsx,js,jsx,mjs,cjs}" "tests/**/*.{ts,tsx,js,jsx,mjs,cjs}" "scripts/**/*.{mjs,cjs,js}"',
    { cwd: root, stdio: "inherit", shell: true }
  );
} catch {
  console.warn("[intel:graphs] dependency-cruiser reported issues or no files — see output above.");
}

try {
  const out = execSync(
    "npx madge apps/developer-docs --extensions ts,tsx,js,jsx --json",
    { cwd: root, encoding: "utf8", shell: true }
  );
  writeFileSync(join(root, "graphs", "madge-graph.json"), out, "utf8");
} catch {
  writeFileSync(
    join(root, "graphs", "madge-graph.json"),
    JSON.stringify({ info: "madge could not build graph (empty or parse issue)" }, null, 2),
    "utf8"
  );
}

console.log("[intel:graphs] finished");
