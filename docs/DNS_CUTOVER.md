# DNS cutover: Cargo → Vercel

Use this when the Vercel preview looks right and you are ready to serve **zytprojects.com** from this Next.js app.

## 1. Vercel project

1. Import the Git repository in [Vercel](https://vercel.com).
2. Confirm production build succeeds (`npm run build` locally if needed).
3. In **Project → Settings → Domains**, add:
   - `zytprojects.com`
   - `www.zytprojects.com` (optional; redirect to apex if you prefer)

Vercel will show the DNS records required for your registrar.

## 2. Typical DNS records

At whoever hosts DNS for `zytprojects.com` (Cargo, Cloudflare, Namecheap, etc.):

| Host | Type | Value |
|------|------|--------|
| `@` | `A` | `76.76.21.21` (Vercel apex — confirm in Vercel UI) |
| `www` | `CNAME` | `cname.vercel-dns.com` |

Remove old Cargo A/CNAME records when you cut over, or traffic will keep hitting Cargo.

Propagation usually takes minutes; allow up to 48 hours globally.

## 3. Verification checklist

- [ ] Home, Archive, Information load over HTTPS
- [ ] All four case studies: images and looping videos
- [ ] `/resume.pdf` opens
- [ ] Instagram + email links in footer

## 4. After cutover

- Keep Cargo live for ~1 week only if you want a fallback; otherwise cancel/downgrade to stop paying for unused hosting.
- Set `NEXT_PUBLIC_SITE_URL=https://zytprojects.com` in Vercel env if you use absolute URLs in metadata (optional; default is already zytprojects.com).
