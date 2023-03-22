import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({ config: { applyBaseStyles: false }, }), sitemap()],
  experimental: {
    assets: true
  }
});