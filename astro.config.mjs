// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Static output. No adapter — Vercel serves the prerendered `dist/` directly.
export default defineConfig({
  site: 'https://panwarknitwear.com',
  output: 'static',
  vite: { plugins: [tailwindcss()] },
});
