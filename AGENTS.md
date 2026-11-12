<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# zytprojects.com: rules for every AI tool (Cursor, Claude Code, others)

This site is a rebuild of the Cargo site at https://zytprojects.com. Until DNS is
switched to Vercel, that live Cargo site is the **source of truth** for how
every page should look.

## The one project folder

- Work only in `~/Projects/zytprojects`. Any other copy (for example under
  `~/.gemini/antigravity/`) is stale. Never edit or run it.
- `npm run dev` serves http://localhost:3000. In development, a small badge in the
  bottom-right corner shows `~/Projects/zytprojects`. If it's missing, you're
  looking at the wrong server.

## Matching Cargo: measure, don't guess

- Before changing a page's layout, open the same page on https://zytprojects.com
  and read its real positions, sizes and fonts (the page DOM / computed styles,
  including Cargo's shadow DOM). Never rebuild from a screenshot or a description.
- **Never rewrite, paraphrase or reorder the copy.** Use the exact text from Cargo,
  including the owner's spelling (e.g. "curiousity").
- Don't add things Cargo doesn't have: no rounded corners, gray image boxes,
  divider lines, "Back to Projects" links, prev/next arrows, captions or hover
  zoom unless the owner asks for them.
- Desktop first. Phone layout is out of scope unless the owner asks for it.

## Cargo's sizing system

- Cargo sizes everything from one base unit: `--b: 1.44vh` (1.44% of the window
  *height*). Write every font size, margin and padding as `calc(var(--b) * n)`,
  not fixed px or Tailwind spacing.
- Page padding: `5b` top, `6b` left/right. Layout is a 12-column grid with no gutter.
- One empty line of body text = `1.8b` (Cargo builds spacing from `<br>` lines).
- Fonts: `HelveticaNeue-Light, "Helvetica Neue Light", "Helvetica Neue", Helvetica, sans-serif`,
  weight 400, bold = 700.
  Body `1.5b` / line-height 1.2. Nav links `1.65b` / 1.5, color `rgba(0,0,0,0.85)`.
- Working example: `src/app/page.tsx` + `src/styles/cargo-home.css` (the homepage,
  verified within 1px of Cargo at 1440×900 and 1024×768). Copy its approach.
- Put page-specific CSS in `src/styles/cargo-<page>.css` and import it from
  `src/app/globals.css`.

## Checking your work

- A page is done when every element sits within ~2px of Cargo at 1440×900 and
  1024×768. Compare measured positions, not just how it looks.
- Run `npm run build` before committing. Vercel runs the same build.

## Git and deploys

- Pushing to `main` deploys to https://zytprojects-com.vercel.app in ~2–3 minutes.
- Commit after each finished page, with a message that says which page.
- Only one AI tool edits the project at a time. Before starting, check
  `git status` for uncommitted work from another tool and don't overwrite it.
