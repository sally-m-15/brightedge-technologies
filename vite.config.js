import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => ({
    base: '/',
    plugins: [
        vue(),
        tailwindcss(),
        ...(mode === 'development' ? [vueDevTools()] : []),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    server: {
        watch: {
            usePolling: true,
        },
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules/vue-router')) {
                        return 'vue-vendor'
                    }
                    if (id.includes('node_modules/vue')) {
                        return 'vue-vendor'
                    }
                },
            },
        },
    },
}))