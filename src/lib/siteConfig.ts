// Fill these in before deploying — see README.md.
export const siteConfig = {
  name: "Bookmarc",
  tagline: "A bookmark manager that stays on your computer.",
  description:
    "Bookmarc is a local-first desktop bookmark manager: import from every browser, organize with folders/categories/tags, find dead links and duplicates, and see your bookmarking habits in Analytics — with nothing ever sent to a server.",

  // Lemon Squeezy checkout / product page URL.
  checkoutUrl: "https://bookmarc.lemonsqueezy.com/buy/REPLACE_ME",

  // GitHub Releases (or a direct download host) for each platform's installer.
  downloads: {
    mac: "#",
    windows: "#",
    linux: "#",
  },

  githubRepoUrl: "https://github.com/REPLACE_ME/bookmarc",
  supportEmail: "support@bookmarc.app",

  price: "$__", // REPLACE_ME — set your real one-time price before deploying
  priceNote: "one-time purchase, free updates",
} as const;
