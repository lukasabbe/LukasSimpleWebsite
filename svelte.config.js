import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),

    vitePlugin: {
        dynamicCompileOptions({ filename }) {
            if (!filename.split(/[/\\]/).includes('node_modules')) {
                return { runes: true };
            }
        }
    },

    kit: {
        adapter: adapter({
            pages: 'dist',
            assets: 'dist',
            fallback: 'index.html',
            precompress: false,
            strict: true
        })
    }
};

export default config;
