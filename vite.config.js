import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@icon': path.resolve(__dirname, 'src/assets/icon'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@sass': path.resolve(__dirname, 'src/scss'),
        },
    },
});
