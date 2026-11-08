// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';

const isNetlifyEnvironment = process.env.NETLIFY === 'true';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  trailingSlash: 'always',
  output: 'server',
  adapter: netlify({
    edgeMiddleware: isNetlifyEnvironment,
  }),
  server: { port: 8000, host: true}
});