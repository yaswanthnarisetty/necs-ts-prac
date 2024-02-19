/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: 'happy-dom',
        setupFiles: ['./setup.ts'],
        css: true,
        coverage: {
            provider: 'v8' // or 'istanbul'
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        },
    },
})