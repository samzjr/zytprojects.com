#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const srcDir = path.join(root, "src");

function collectUrls(dir) {
  const urls = new Set();
  const walk = (d) => {
    for (const ent of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, ent.name);
      if (ent.isDirectory()) walk(p);
      else if (/\.(tsx?|jsx?)$/.test(ent.name)) {
        const text = fs.readFileSync(p, "utf8");
        const re = /https:\/\/freight\.cargo\.site\/[^"'\s)]+/g;
        let m;
        while ((m = re.exec(text))) urls.add(m[0]);
      }
    }
  };
  walk(srcDir);
  return [...urls];
}

function localPathFromUrl(url) {
  const u = new URL(url);
  const parts = u.pathname.split("/").filter(Boolean);
  const filename = decodeURIComponent(parts[parts.length - 1] || "file");
  const isMedia = parts[0] === "m";
  const isImage = parts[0] === "w";
  let subdir = "misc";
  if (isMedia) {
    if (filename.toLowerCase().endsWith(".pdf")) subdir = "resume";
    else if (/\.(mov|mp4|webm)$/i.test(filename)) subdir = "video";
    else subdir = "media";
  } else if (isImage) {
    subdir = "images";
  }
  return `/media/${subdir}/${filename}`;
}

async function download(url, destPath) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  fs.writeFileSync(destPath, buf);
}

const urls = collectUrls(srcDir);
const manifest = {};
let ok = 0;
let fail = 0;

for (const url of urls) {
  const local = localPathFromUrl(url);
  manifest[url] = local;
  const dest = path.join(root, "public", local);
  if (fs.existsSync(dest)) {
    ok++;
    continue;
  }
  try {
    await download(url, dest);
    console.log("OK", local);
    ok++;
  } catch (e) {
    console.error("FAIL", url, e.message);
    fail++;
  }
}

fs.writeFileSync(
  path.join(root, "scripts", "media-manifest.json"),
  JSON.stringify(manifest, null, 2)
);

// Rewrite source files
const replaceInDir = (d) => {
  for (const ent of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, ent.name);
    if (ent.isDirectory()) replaceInDir(p);
    else if (/\.(tsx?|jsx?)$/.test(ent.name)) {
      let text = fs.readFileSync(p, "utf8");
      let changed = false;
      for (const [remote, local] of Object.entries(manifest)) {
        if (text.includes(remote)) {
          text = text.split(remote).join(local);
          changed = true;
        }
      }
      if (changed) fs.writeFileSync(p, text);
    }
  }
};
replaceInDir(srcDir);

console.log(`Done: ${ok} ok, ${fail} failed, ${urls.length} unique URLs`);
