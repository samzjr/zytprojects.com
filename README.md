# zytprojects.com

Next.js portfolio for industrial designer Sam Zhan — migrated from [Cargo Collective](https://zytprojects.com).

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding a featured project

1. Add card data in [`src/data/portfolioData.ts`](src/data/portfolioData.ts) (`FEATURED_PROJECTS`).
2. Create `src/app/<slug>/page.tsx` using [`CaseStudyLayout`](src/components/CaseStudyLayout.tsx).
3. Put images and video under `public/media/`.

## Media

Assets live in `public/media/`. To refresh from Cargo URLs (one-time migration):

```bash
node scripts/download-media.mjs
```

## Deploy (Vercel)

1. Push this repo to GitHub or Cursor Origin.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Deploy — no env vars required unless you override `NEXT_PUBLIC_SITE_URL`.

See [`docs/DNS_CUTOVER.md`](docs/DNS_CUTOVER.md) for pointing **zytprojects.com** at Vercel and leaving Cargo.

## Stack

Next.js 16 (App Router), React 19, Tailwind CSS 4, TypeScript.
