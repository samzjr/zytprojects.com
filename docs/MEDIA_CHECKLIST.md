# Media checklist (drag into `public/`)

Paths are **exact** — match the folder + filename. After adding files, run:

```bash
node scripts/check-media.mjs
```

Edit copy and section order in `src/content/<project>.ts` only.

## Somna (`public/media/todo/somna/`)

| File | Cargo section |
|------|----------------|
| `focused-concepts.jpg` | Focused Concepts |
| `control-knob-detail.jpg` | Control Knob |
| `humidifier-tank-access.jpg` | Humidifier tank access |
| `tank-refill.jpg` | Tank refill |
| `airway-connection.jpg` | Airway connection |

## Shift (`public/media/todo/shift/`)

| File | Notes |
|------|--------|
| `hero-45.jpg` | Cargo hero (or symlink/use `public/media/images/hero_.thumbnail.png` and update `shift.ts` hero src) |
| `stress-tracking-context.jpg` | After “Tracking stress…” |
| `concept-light-color.jpg` | Focused Concepts 1/3 |
| `concept-transparency.jpg` | 2/3 |
| `concept-movement.jpg` | 3/3 |
| `color-explorations.jpg` | Color explorations |
| `workflow-indicator.jpg` | Workflow indicator |
| `meaningful-recovery.jpg` | Meaningful Recovery |
| `peripheral-vision.jpg` | Seen at the edge |
| `app-personalization.jpg` | App personalisation |
| `health-tracker.jpg` | Health tracker |

## Pocketto (`public/media/todo/pocketto/`)

| File | Section |
|------|---------|
| `e-ink-display.jpg` | E-ink Display |
| `nft-customize.jpg` | NFT customise |

## CNC (`public/media/todo/cnc-wallet/`)

| File | Section |
|------|---------|
| `efficient-machining.jpg` | Efficient machining |

## Already in `public/media/images/` and `video/`

Home, archive, and most case-study heroes use files under `public/media/images/` and `public/media/video/` from the earlier migration. Prefer keeping those names unless you replace an asset.

## Your workflow

1. Open Cargo and your local site side by side for one project.
2. For each broken image, export from Cargo (or your drive) → save as the filename above.
3. `node scripts/check-media.mjs` until Missing is 0 for that project.
4. Tweak headings/copy in the matching `src/content/*.ts` file.
5. `git push` → Vercel redeploys.
