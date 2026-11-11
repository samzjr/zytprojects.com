# Deploy to Vercel

The site is a static-export-friendly Next.js app (all routes prerendered). Media (~103 MB) ships in `public/media/`.

## Option A — Vercel dashboard (recommended)

1. Push this folder to a git host you control (GitHub, GitLab, etc.).
   - Local repo: `/Users/samzhanjr/Projects/zytprojects` (branch `main`, commit ready).
2. Go to [vercel.com/new](https://vercel.com/new) → **Import Git Repository**.
3. Framework preset: **Next.js** (auto-detected).
4. Deploy. No environment variables required unless you override the canonical URL:
   - `NEXT_PUBLIC_SITE_URL=https://zytprojects.com`
5. After the first production deploy, add custom domains in **Settings → Domains** (see [DNS_CUTOVER.md](./DNS_CUTOVER.md)).

## Option B — Vercel CLI

```bash
cd ~/Projects/zytprojects
npx vercel login
npx vercel        # preview
npx vercel --prod # production
```

## Option C — Cursor Origin

If your Cursor plan includes Origin repos, install the CLI and push:

```bash
curl -fsSL https://downloads.cursor.com/origin/install.sh | sh
~/.local/bin/origin auth login
~/.local/bin/origin repo create zytprojects
git remote add origin <cloneUrl from create>
git push -u origin main
```

Then import that repo in Vercel.

## Post-deploy smoke test

- `/`, `/archive`, `/information`
- `/somna`, `/shift`, `/pocketto`, `/cnc-wallet` (videos autoplay muted)
- `/resume.pdf`
