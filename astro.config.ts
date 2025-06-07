import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://kenta-ham.github.io',
  base: '/practice',
  output: 'static',
  build: {
    assets: '_astro'
  }
});