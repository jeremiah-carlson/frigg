import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: 'https://jeremiah-carlson.github.io',
  base: '/frigg',
  integrations: [tailwind(), solidJs()]
});