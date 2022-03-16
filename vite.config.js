import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import Components from 'unplugin-vue-components/vite'
// import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        legacy({
            targets: ['ie >= 11'],
            additionalLegacyPolyfills: ['regenerator-runtime/runtime']
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "@/assets/main.scss";'
            }
        }
    }
})
