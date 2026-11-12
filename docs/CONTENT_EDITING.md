# Content editing

Work only in **`~/Projects/zytprojects`** (this repo). Run `npm run dev` here and open **http://localhost:3000**.

**If changes don’t show up:** another Next app may still be on port 3000 from `~/.gemini/antigravity/scratch/zytprojects`. Stop it (`lsof -i :3000` → kill that PID), then run `npm run dev` in **this** folder. You should see a **“Dev · ~/Projects/zytprojects”** badge at the bottom-right.

| Page | Edit |
|------|------|
| Home / archive listing | `src/data/portfolioData.ts` |
| Information | `src/app/information/page.tsx` + `INFO_DATA` in portfolio data |
| **Somna** (focus now) | **`src/app/somna/page.tsx`** |
| Shift | `src/app/shift/page.tsx` |
| Pocketto | `src/app/pocketto/page.tsx` |
| CNC Cardholder | `src/app/cnc-wallet/page.tsx` |

Shared chrome (nav, hero, footer): `src/components/CaseStudyLayout.tsx`.

Typography matches live Cargo: `src/styles/cargo-typography.css` (Helvetica Neue / Neue Light, applied via class `zyt-cargo-type` on case studies).

Images and video: `public/media/`. Optional check: `node scripts/check-media.mjs`.
