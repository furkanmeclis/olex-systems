import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
const ASSET_URL = process.env.APP_URL || '';
export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'],
            refresh: true,
        }),
        react(),
    ],
    server: {
        fs: {
            strict: true,
        },
    },
    build: {
        rollupOptions: {
            output: {
                charset: 'utf-8'
            }
        }
    }
});

