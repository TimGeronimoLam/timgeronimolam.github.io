// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: "https://timsblog.dev",
    markdown: {
        shikiConfig: {
            theme: "github-dark",
        }
    }
});
