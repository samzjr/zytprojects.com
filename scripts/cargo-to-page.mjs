#!/usr/bin/env node
/**
 * Convert a page from the live Cargo site into a Next.js page built from
 * src/components/cargo. Text, order, spacing and media sizes are copied as-is.
 *
 *   node scripts/cargo-to-page.mjs <cargo-purl> [route] [--description "..."]
 *   node scripts/cargo-to-page.mjs shift
 *
 * Reads https://zytprojects.com/<purl>, writes src/app/<route>/page.tsx.
 * Media must already exist in public/media/images|video/ (named as on Cargo);
 * missing files are listed so they can be downloaded.
 * Fails loudly on any Cargo element it doesn't know how to convert.
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const args = process.argv.slice(2);
const purl = args[0];
const route = args[1] && !args[1].startsWith("--") ? args[1] : purl;
const descIdx = args.indexOf("--description");
const description = descIdx >= 0 ? args[descIdx + 1] : "";
if (!purl) {
  console.error("usage: node scripts/cargo-to-page.mjs <cargo-purl> [route] [--description text]");
  process.exit(1);
}

// ---------- fetch Cargo page data ----------
const html = await (await fetch(`https://zytprojects.com/${purl}`)).text();
const m = html.match(/window\.__PRELOADED_STATE__=(\{.*?\});?\s*<\/script>/s);
if (!m) throw new Error("No Cargo page data found");
const state = JSON.parse(m[1]);
const page = Object.values(state.pages.byId).find((p) => p.purl === purl);
if (!page) throw new Error(`Page ${purl} not found in Cargo data`);
const mediaByHash = Object.fromEntries(page.media.map((x) => [x.hash, x]));
const pageTitle = (html.match(/<title>([^<]*?)\s*—/) || [])[1] || page.title;

// ---------- tiny HTML parser (Cargo's markup is well-formed) ----------
const VOID = new Set(["br", "img", "hr"]);
const decode = (s) =>
  s
    .replace(/&nbsp;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&amp;/g, "&");

function parse(src) {
  const root = { tag: "#root", attrs: {}, children: [] };
  const stack = [root];
  const re = /<!--[\s\S]*?-->|<\/([a-zA-Z0-9-]+)\s*>|<([a-zA-Z0-9-]+)((?:\s+[a-zA-Z0-9:-]+(?:="[^"]*")?)*)\s*\/?>|([^<]+)/g;
  for (const t of src.matchAll(re)) {
    const top = stack[stack.length - 1];
    if (t[1]) {
      const i = stack.map((n) => n.tag).lastIndexOf(t[1].toLowerCase());
      if (i > 0) stack.length = i;
    } else if (t[2]) {
      const attrs = {};
      for (const a of (t[3] || "").matchAll(/([a-zA-Z0-9:-]+)(?:="([^"]*)")?/g)) attrs[a[1]] = decode(a[2] ?? "");
      const node = { tag: t[2].toLowerCase(), attrs, children: [] };
      top.children.push(node);
      if (!VOID.has(node.tag)) stack.push(node);
    } else if (t[4]) {
      top.children.push({ tag: "#text", text: decode(t[4]) });
    }
  }
  return root;
}

// ---------- JSX emitter ----------
const missing = new Set();
const used = new Set(["Row", "Col", "Media"]);
let usesSlideshow = false;
const PLAIN = new Set(["div", "span", "b", "strong", "i", "em", "u", "s", "h1", "h2", "h3", "a", "p", "sup", "sub", "small"]);
const INLINE_PARENTS = new Set(["h1", "h2", "h3", "b", "strong", "span", "i", "em", "a", "u"]);

const rem = (v) => {
  if (v == null || v === "") return null;
  const n = parseFloat(v);
  if (/rem$/.test(v) || /^[\d.]+$/.test(v)) return n;
  throw new Error(`Unsupported length "${v}"`);
};

function styleObj(css, extra = {}) {
  const o = { ...extra };
  for (const decl of (css || "").split(";")) {
    const i = decl.indexOf(":");
    if (i < 0) continue;
    const k = decl.slice(0, i).trim();
    const v = decl.slice(i + 1).trim();
    if (!k || k === "--media-corner-radius") continue;
    o[k.startsWith("--") ? k : k.replace(/-([a-z])/g, (_, c) => c.toUpperCase())] = v;
  }
  if (!Object.keys(o).length) return "";
  const body = Object.entries(o)
    .map(([k, v]) => `${/^[a-zA-Z]+$/.test(k) ? k : JSON.stringify(k)}: ${JSON.stringify(v)}`)
    .join(", ");
  return ` style={{ ${body} } as CSSProperties}`;
}

const isWs = (n) => n.tag === "#text" && /^[\s]*$/.test(n.text) && !n.text.includes(" ");

function mediaInfo(node) {
  const meta = mediaByHash[node.attrs.hash];
  if (!meta) throw new Error(`No media data for ${node.attrs.hash}`);
  const video = !!meta.is_video;
  const rel = `${video ? "video" : "images"}/${meta.name}`;
  if (!fs.existsSync(path.join(ROOT, "public/media", rel))) missing.add(`${node.attrs.hash} ${rel}`);
  return { meta, video, src: `/media/${rel}` };
}

function emitMedia(node, ind, inGallery) {
  const { meta, video, src } = mediaInfo(node);
  const a = node.attrs;
  const props = [`src=${JSON.stringify(src)}`, `w={${meta.width}}`, `h={${meta.height}}`];
  if (video) {
    props.push("video");
    if (a.autoplay !== "true") props.push("autoplay={false}");
    if (a.loop !== "true") props.push("loop={false}");
  }
  if (a.href) throw new Error(`Linked media (${meta.name}) isn't supported`);
  if (!inGallery) {
    const lim = a["limit-by"];
    const sc = a.scale;
    if (lim === "height" && sc) props.push(`maxHeight={${rem(sc)}}`);
    else if (lim === "width" && sc) props.push(`widthPercent={${parseFloat(sc)}}`);
    else if (lim && !["fit", "width", "height"].includes(lim)) throw new Error(`limit-by="${lim}"`);
  }
  const cap = node.children.find((c) => c.tag === "figcaption");
  if (!cap) return `${ind}<Media ${props.join(" ")} />`;
  return `${ind}<Media\n${ind}  ${props.join(`\n${ind}  `)}\n${ind}  caption={\n${ind}    <>\n${emitChildren(cap.children, ind + "      ", [])}\n${ind}    </>\n${ind}  }\n${ind}/>`;
}

function emitChildren(children, ind, ancestors, structural = false) {
  const out = [];
  for (let i = 0; i < children.length; i++) {
    const n = children[i];
    if (structural && isWs(n)) continue;
    if (n.tag === "br") {
      // Count a run of <br>s; whitespace between them collapses in HTML, so skip it.
      let k = 0;
      let j = i;
      while (j < children.length) {
        if (children[j].tag === "br") k++;
        else if (!(isWs(children[j]) && children[j + 1]?.tag === "br")) break;
        j++;
      }
      i = j - 1;
      if (k === 1) out.push(`${ind}<br />`);
      else {
        used.add("Lines");
        out.push(`${ind}<Lines n={${k}} />`);
      }
      continue;
    }
    out.push(emit(n, ind, ancestors));
  }
  return out.filter(Boolean).join("\n");
}

function emit(n, ind, ancestors) {
  if (n.tag === "#text") {
    const t = n.text.replace(/[ \t\r\n\f]+/g, " ");
    return t === "" ? "" : `${ind}{${JSON.stringify(t)}}`;
  }
  const a = n.attrs;
  const kids = (structural = false, anc = [...ancestors, n.tag]) => emitChildren(n.children, ind + "  ", anc, structural);
  const inGallery = ancestors.some((t) => t.startsWith("gallery-"));
  switch (n.tag) {
    case "column-set": {
      const g = a.gutter == null ? null : rem(a.gutter);
      return `${ind}<Row${g != null && g !== 1 ? ` gutter={${g}}` : ""}>\n${kids(true)}\n${ind}</Row>`;
    }
    case "column-unit": {
      const span = a.span ? ` span={${a.span}}` : "";
      const inner = kids();
      return inner.trim() ? `${ind}<Col${span}>\n${inner}\n${ind}</Col>` : `${ind}<Col${span} />`;
    }
    case "media-item":
      return emitMedia(n, ind, inGallery);
    case "gallery-columnized":
    case "gallery-grid":
    case "gallery-justify": {
      const name = { "gallery-columnized": "Gallery", "gallery-grid": "Grid", "gallery-justify": "Justify" }[n.tag];
      used.add(name);
      const g = a.gutter == null ? null : rem(a.gutter);
      const p = `${g != null && g !== 1 ? ` gutter={${g}}` : ""}${a.columns && name !== "Justify" ? ` columns={${a.columns}}` : ""}`;
      return `${ind}<${name}${p}>\n${kids(true)}\n${ind}</${name}>`;
    }
    case "gallery-slideshow": {
      if (a.navigation && a.navigation !== "none") throw new Error(`Slideshow navigation="${a.navigation}"`);
      usesSlideshow = true;
      const slides = n.children
        .filter((c) => c.tag === "media-item")
        .map((c) => {
          const { meta, video, src } = mediaInfo(c);
          if (video) throw new Error("Video slides aren't supported");
          return `${ind}    { src: ${JSON.stringify(src)}, w: ${meta.width}, h: ${meta.height} },`;
        });
      const speed = a["transition-speed"] ? ` fadeSeconds={${parseFloat(a["transition-speed"])}}` : "";
      return `${ind}<Slideshow${speed}\n${ind}  slides={[\n${slides.join("\n")}\n${ind}  ]}\n${ind}/>`;
    }
    default: {
      if (!PLAIN.has(n.tag)) throw new Error(`Unsupported Cargo element <${n.tag}>`);
      // A block <div> inside inline/heading elements becomes a block <span> (valid HTML, same layout).
      let tag = n.tag;
      let extra = {};
      if (tag === "div" && ancestors.some((t) => INLINE_PARENTS.has(t))) {
        tag = "span";
        extra = { display: "block" };
      }
      let attrs = "";
      if (a.class) attrs += ` className=${JSON.stringify(a.class)}`;
      if (a.href) {
        const ext = /^(https?:|mailto:)/.test(a.href);
        attrs += ` href=${JSON.stringify(ext ? a.href : `/${a.href}`)}`;
        if (ext && a.href.startsWith("http")) attrs += ` target="_blank" rel="noopener noreferrer"`;
      }
      attrs += styleObj(a.style, extra);
      const inner = kids();
      return inner.trim() ? `${ind}<${tag}${attrs}>\n${inner}\n${ind}</${tag}>` : `${ind}<${tag}${attrs} />`;
    }
  }
}

const tree = parse(page.content);
const body = emitChildren(tree.children, "        ", [], false);

const imports = [...used].sort().join(", ");
const out = `// Generated from https://zytprojects.com/${purl} (Cargo) by scripts/cargo-to-page.mjs.
// Text, order, spacing and media sizes match the original. Edit freely, but
// don't paraphrase the copy (see AGENTS.md).
import type { Metadata } from "next";
import type { CSSProperties } from "react";
import CargoHeader from "@/components/cargo/CargoHeader";
import { ${imports} } from "@/components/cargo/Cargo";
${usesSlideshow ? 'import Slideshow from "@/components/cargo/Slideshow";\n' : ""}
export const metadata: Metadata = {
  title: ${JSON.stringify(pageTitle)},${description ? `\n  description: ${JSON.stringify(description)},` : ""}
};

export default function Page() {
  return (
    <div className="cg-page">
      <CargoHeader />

      <main className="cg-body" style={{ textAlign: "center" }}>
${body}
      </main>
    </div>
  );
}
`;

const file = path.join(ROOT, "src/app", route, "page.tsx");
fs.mkdirSync(path.dirname(file), { recursive: true });
fs.writeFileSync(file, out);
console.log(`wrote ${path.relative(ROOT, file)} (${out.length} bytes)`);
if (missing.size) {
  console.log(`\nMISSING media (${missing.size}) - download from Cargo before building:`);
  for (const x of missing) console.log("  " + x);
  process.exitCode = 2;
}
