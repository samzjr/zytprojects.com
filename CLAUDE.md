@AGENTS.md

## Claude Code notes

- Verify layout in the built-in browser: measure the live Cargo page and the local
  build side by side (DOM positions and computed styles) before calling a page done.
- A `next dev` server for this folder may already be running from Cursor, and
  Next.js allows only one per folder. To test without disturbing it, run
  `npm run build`, then start the `zytprojects-prod` preview (`next start` on port 3005).
