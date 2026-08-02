import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://tonto417.github.io',
  base: '/axiom-research',
  integrations: [tailwind()],
});
