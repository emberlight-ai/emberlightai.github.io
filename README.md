# Emberlight — Marketing Site

Next.js 14 (App Router) + Tailwind CSS. Design: warm-cream editorial style, serif display type (Source Serif 4, self-hosted via Fontsource), Inter body text, ember-gradient panels.

## Pages

- `/` — Home (coach-first)
- `/how-it-works` — 4-step creator flow + twin editor
- `/for-coaches` — deep coach pitch, feature grid, twin editor, Become a creator CTA
- `/for-users` — the one user-facing page, App Store CTA
- `/founding-team` — why we started this + founder bios

## Run locally

```bash
npm install
npm run dev
```

## Deploy

Standard Next.js build — deploys as-is on Vercel:

```bash
npm run build
```

## Notes for deployment (Carl)

- All fonts are self-hosted (`@fontsource/*`), no Google Fonts fetch at build time.
- Brand tokens live in `tailwind.config.ts` (colors: cream/ink/taupe/ember) and gradients in `app/globals.css`.
- The "Become a creator" CTA points to Alice's calendar booking link; footer/contact email is alice@emberlightai.com.
- The App Store button on /for-users points at the current live listing; update when the listing is renamed.
- Stat bar numbers (50+, 5.0★, $14K/mo) are hardcoded in `app/page.tsx`.
