import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://niuqiang1.github.io',
	base:'/hhz2',
	integrations: [mdx(), sitemap()],
});
