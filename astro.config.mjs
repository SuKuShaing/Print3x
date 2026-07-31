import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://www.print3x.cl',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
});
