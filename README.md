# Brittany Pepe — Portfolio

Personal portfolio for Brittany Pepe, a Miami-based Brand Manager and digital marketing professional.

**Production URL:** https://brittany-pepe.vercel.app

---

## Stack

Next.js 16 (App Router) · React 19 · TypeScript (strict) · Tailwind CSS 4 · GSAP + ScrollTrigger · lucide-react

No Three.js, no second animation library, no smooth-scroll library. Each was considered and left out because it added bundle weight without serving the design.

## Getting started

```bash
npm install
```

```bash
npm run dev
```

Other scripts: `npm run build`, `npm start`, `npm run lint`.

## Environment

| Variable | Default | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://brittany-pepe.vercel.app` | Canonical URL, Open Graph tags, sitemap, robots, JSON-LD. Set this in the Vercel project when moving to a custom domain — it is the only place the domain is written. |

## Art direction

"Ivory & Ink" — Instrument Serif for display, Geist for UI. Tokens live in `app/globals.css` under `@theme`.

One rule matters when editing: **`--color-stone` is for rules and decoration only.** It does not meet 4.5:1 against ivory. Small text on the ivory ground uses `--color-muted`. On the ink ground (Contact, Footer) that inverts — `stone` is the correct secondary token there.

## Content lives in data, not markup

All copy is in `lib/data/`. Components render from these arrays, so content changes never require touching JSX.

- `profile.ts` — name, positioning, about copy, contact details, résumé flag
- `experience.ts` — the six roles
- `work.ts` — the six areas of work
- `capabilities.ts` — capability groups and Tools & Platforms
- `education.ts`, `navigation.ts`

### Adding real metrics later

The site ships with **no campaign numbers**, because none are publicly verified yet. The types are already built for them: add a `metrics` array to any role in `experience.ts` and the timeline renders it. Components check `metrics?.length` before rendering, so a role without metrics shows nothing.

```ts
metrics: [{ label: "Engagement", value: "+18%", note: "Q1 2026 vs Q4 2025" }]
```

Only add figures that are verified and shareable.

### Adding a résumé

Drop the PDF in `public/`, then set `resumeHref` in `lib/data/profile.ts`:

```ts
resumeHref: "/brittany-pepe-resume.pdf",
```

The hero, contact, and footer links appear automatically. While it is `null`, no link renders — the site never ships a dead link.

### Imagery

Brittany's portrait lives at `public/brittany-pepe.jpg` and is wired through `profile.portrait`. Setting that to `null` removes it and the About layout collapses to a single column — no markup change. To swap the photo, replace the file and update the `width`/`height` in `profile.ts` to match the new dimensions.

`MaskedImage` is the reusable frame: fixed aspect ratio, scale-out reveal, and a small desktop parallax that never moves the frame itself.

The work grid still uses `EditorialPlate`, which draws an abstract composition per discipline. Pass an `image` and it steps aside with no layout change:

```tsx
<EditorialPlate variant={area.id} image={{ src: "/work/campaign.jpg", alt: "…", width: 1200, height: 1500 }} />
```

### Growing an area into a case study

`WorkArea` accepts an optional `caseStudy` (challenge, strategy, execution, tools, gallery, results). Attaching one is the seam for a future `/work/[slug]` detail page.

## Motion

One vocabulary in `lib/motion.ts` — easing, durations, staggers, and the media-query conditions.

`MOTION_CONDITIONS` deliberately registers **both** `prefers-reduced-motion: reduce` and `no-preference`. `gsap.matchMedia()` only invokes a callback when one of its conditions matches; registering only the `reduce` half means the callback never fires on a normal browser and every animation silently does nothing. Keep both.

Reduced motion is handled in one place per component (early return leaves markup in its final state) plus a CSS block in `globals.css`.

The marquees scrub against scroll rather than auto-playing. That is deliberate: an auto-playing marquee is moving content under WCAG 2.2.2 and would require a pause control.

## Accessibility notes

- Masked text reveals carry the full sentence in a visually-hidden node and hide the animated fragments. Do not use `aria-label` on the wrapper — ARIA prohibits labelling generic elements and axe flags it as a serious violation.
- Mobile nav traps focus, closes on Escape, locks scroll without layout shift, and returns focus to the trigger button.
- Clipboard copy is an enhancement over a real `mailto:` link, which always works.

## Audited results

Lighthouse against the production build:

| | Performance | Accessibility | Best Practices | SEO |
| --- | --- | --- | --- | --- |
| Desktop | 100 | 100 | 100 | 100 |
| Mobile | 97 | 100 | 100 | 100 |

CLS 0 · desktop LCP 0.6 s · mobile LCP 2.6 s · total page weight 276 KiB. No horizontal overflow at 1440, 1024, 768, 390, 375, or 320.

## Deploy

```bash
vercel --prod
```

Then set `NEXT_PUBLIC_SITE_URL` in the Vercel project settings. Note the brief's original `brittany-pepe.vercel.com` is not obtainable — Vercel deploys land on `*.vercel.app`.
