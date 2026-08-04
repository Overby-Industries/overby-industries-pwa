# Overby Industries — Progressive Web App

[![Live Site](https://img.shields.io/badge/live-overbyindustries.space-blue)](https://overbyindustries.space)
[![License: CC BY-4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](LICENSE)

The public site for **Overby Industries** — an ethical, zero-waste roadmap to sustainable space industry. From metals and concrete on asteroids to hydrocarbons on Titan, Overby Industries is building everything humanity needs to construct an interplanetary civilization without harming Earth or the solar system itself.

Live at **[overbyindustries.space](https://overbyindustries.space)**.

For the full technical and policy write-up behind this site, see the [org profile](https://github.com/Overby-Industries/Overby-Industries) and the [whitepapers repo](https://github.com/Overby-Industries/whitepapers).

## What's in the site

- **Landing page** — mission statement, engineering capabilities (ISRU, reusable shuttle transport, propulsion, modular platforms, open-source tech, orbital debris reclamation), an eight-phase development roadmap, and a donation / mailing-list signup flow.
- **Deep-dive sections:**
  - `/aerospace` — airframe, flight controls, operating systems, propulsion
  - `/heavy-industry` — advanced manufacturing, asteroid mining, robotics, space debris reclamation
  - `/isru` — hydrocarbons, precious/base metals, regolith, water
  - `/the-gravastar-project`
  - `/whitepapers` — renders published papers from the [whitepapers repo](https://github.com/Overby-Industries/whitepapers)
- **Donations** via Stripe Checkout (`/api/donate`), with success/cancel pages.
- **Mailing list signups** via Supabase (`/api/subscribe`).
- Installable as a PWA (manifest + service worker), with sitemap/RSS generation on build.

## Tech stack

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Supabase · Stripe · Framer Motion

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

Create a `.env.local` with:

```
NEXT_PUBLIC_URL=http://localhost:3000
STRIPE_SECRET_KEY=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY=
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
```

- `STRIPE_SECRET_KEY` powers the donation checkout flow.
- The `NEXT_PUBLIC_SUPABASE_*` pair is used client-side (mailing list signup form); `SUPABASE_URL` / `SUPABASE_SERVICE_ROLE_KEY` are used server-side.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build (also generates the sitemap via `postbuild`)
- `npm run start` — run the production build
- `npm run format` — Prettier, write mode

## Contributing

Clone the `dev` branch, make your changes, and open a pull request against it — `dev` auto-deploys as a preview environment. Pre-commit formatting is enforced via Husky + Prettier.
