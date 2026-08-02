import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://tonto417.github.io',
  base: '/axiom-research',
  vite: {
    plugins: [tailwindcss()],
  },
});
