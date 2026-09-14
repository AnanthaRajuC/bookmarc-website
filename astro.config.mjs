import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Currently deployed as a GitHub Pages project page at
// https://anantharajuc.github.io/bookmarc-website/ — `base` must match the
// repo name so every internal link/asset resolves under that subpath. If
// this later moves to a custom domain (or a <user>.github.io root repo),
// update `site` and remove `base`.
export default defineConfig({
  site: "https://anantharajuc.github.io",
  base: "/bookmarc-website/",
  vite: {
    plugins: [tailwindcss()],
  },
});
