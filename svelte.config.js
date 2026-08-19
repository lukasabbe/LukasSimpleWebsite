import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      // Tell SvelteKit to output to 'dist' to match Coolify's default expectations
      pages: 'dist',
      assets: 'dist',
      // Generate an index.html fallback for client-side SPA routing
      fallback: 'index.html',
      precompress: false,
      strict: true
    })
  }
};

export default config;
