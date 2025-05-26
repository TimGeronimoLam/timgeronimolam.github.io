// @ts-check
import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://timsblog.dev",

  markdown: {
      shikiConfig: {
          themes: {
            light: "github-dark",
            dark: "github-dark-default"
          },
      }
  },

  integrations: [mdx()]
});
