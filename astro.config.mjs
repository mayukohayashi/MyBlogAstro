import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import robotsTxt from "astro-robots-txt";
import webmanifest from "astro-webmanifest";
import remarkBreaks from "remark-breaks";

// https://astro.build/config
export default defineConfig({
  site: "https://sunny-arithmetic-1e866e.netlify.app",
  experimental: {
    integrations: true,
  },
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    compress({
      css: true,
      html: false,
      js: true,
      img: false,
      svg: false,
    }),
    robotsTxt({
      sitemapBaseFileName: "sitemap-index",
      policy: [
        {
          userAgent: "Googlebot",
          allow: "/",
          crawlDelay: 2,
        },
      ],
    }),
    webmanifest({
      name: "blog",
      icon: "./public/favicon.svg",
      lang: "en-US",
      short_name: "blog",
      description: "just notes",
      theme_color: "#4E9F3D",
      background_color: "#4E9F3D",
      display: "standalone",
    }),
  ],

  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
