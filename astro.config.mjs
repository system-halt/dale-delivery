import {defineConfig} from 'astro/config';

import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

import {SITE} from './src/config/seo';

export default defineConfig({
    site: SITE.url,
    integrations: [
        tailwind(),
        sitemap(),
    ],
    output: 'static',
});