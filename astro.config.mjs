import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://anthonyscardapane.com/",
  output: "server",
  integrations: [mdx(), svelte()],
  markdown: {
    shikiConfig: {
      theme: "dracula",
    },
    rehypePlugins: [
      [
        "rehype-external-links",
        {
          target: "_blank",
        },
      ],
    ],
  },
  adapter: vercel({
    analytics: true,
  }),
});
