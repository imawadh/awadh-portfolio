// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://awadh.tech',
  integrations: [sitemap()],
   image: {
    domains: ["awadh-portfolio-website.s3.ap-south-1.amazonaws.com"],
  },
});
