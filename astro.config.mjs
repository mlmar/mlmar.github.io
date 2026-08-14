// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    server: {
        port: 3000,
    },
    fonts: [
        {
            name: 'DM Sans',
            cssVariable: '--font-dm-sans',
            provider: fontProviders.google(),
            weights: ['100 900'],
            styles: ['normal'],
            fallbacks: ['sans-serif']
        }
    ]
});
