# Bookmarc website

Marketing/landing site for [Bookmarc](../bookmarc-app), a local-first desktop
bookmark manager. Built with [Astro](https://astro.build) + Tailwind CSS,
deployed as a static site.

## Develop

```sh
npm install
npm run dev
```

## Build

```sh
npm run build   # outputs to dist/
npm run preview # serve the production build locally
```

## Before you deploy — fill these in

- **`src/lib/siteConfig.ts`** — the Lemon Squeezy checkout URL, platform
  download links, GitHub repo URL, support email, and real price.
- **`src/pages/privacy.astro`** — replace the `REPLACE_ME` placeholders
  (last-updated date, and whether this site itself uses any analytics/cookies).
- **`src/components/Hero.astro`** — swap the screenshot placeholder for a real
  app screenshot (drop a PNG in `public/` and reference it with an `<img>`).
- **`astro.config.mjs`** — set `site` to this site's real deployed URL. If it
  deploys to `https://<user>.github.io/<repo>/` (a project page, not a custom
  domain or a `<user>.github.io` repo), also set `base: "/<repo>/"`.

## Deploy to GitHub Pages

1. Push this folder to a new GitHub repo.
2. In the repo's **Settings → Pages**, set the source to **GitHub Actions**.
3. Push to `main` — `.github/workflows/deploy.yml` builds and publishes the
   site automatically. The first run may take a minute to register the Pages
   environment.
4. For a custom domain, add a `CNAME` file under `public/` with the domain
   name, and point the domain's DNS at GitHub Pages per
   [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Structure

```
src/
  components/   section-level pieces (Header, Hero, Features, Pricing, ...)
  layouts/      shared <head>/theme wrapper
  lib/          siteConfig.ts — the one file with real links/copy to edit
  pages/        index.astro (landing page), privacy.astro
  styles/       global.css — same design tokens as the Bookmarc app itself
```
