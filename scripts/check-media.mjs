#!/usr/bin/env node
/**
 * Lists /media/ paths referenced in src/content and whether the file exists in public/.
 * Run: node scripts/check-media.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const contentDir = path.join(root, "src/content");
const re = /\/media\/[^"'`\s)]+/g;

const paths = new Set();
for (const f of fs.readdirSync(contentDir)) {
  if (!f.endsWith(".ts")) continue;
  const text = fs.readFileSync(path.join(contentDir, f), "utf8");
  let m;
  while ((m = re.exec(text))) paths.add(m[0]);
}

const missing = [];
const ok = [];
for (const p of [...paths].sort()) {
  const disk = path.join(root, "public", p);
  if (fs.existsSync(disk)) ok.push(p);
  else missing.push(p);
}

console.log(`OK: ${ok.length}  Missing: ${missing.length}\n`);
if (missing.length) {
  console.log("Missing files (drop into public/ with this path):\n");
  for (const p of missing) console.log(`  ${p}`);
}
