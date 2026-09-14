import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Update `site` (and `base`, if this deploys to a project page rather than
// a custom domain / user.github.io root) once the GitHub repo is created —
// see README.md.
export default defineConfig({
  site: "https://bookmarc.app",
  vite: {
    plugins: [tailwindcss()],
  },
});
