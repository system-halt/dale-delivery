import {defineConfig} from 'astro/config';

import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

import react from "@astrojs/react";

import {SITE} from '/src/config/seo.tsx';

import vercel from "@astrojs/vercel/server";

export default defineConfig({
    site: SITE.url,
    integrations: [
        tailwind(),
        sitemap(),
        react()
    ],
    output: 'server', adapter: vercel(),
});