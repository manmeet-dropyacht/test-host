import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/test-host/',
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      // input: {
      //   app: './src/main.tsx',
      // },
      // output: {
      //   entryFileNames: 'assets/dypops.js',
      //   assetFileNames: 'assets/dypops.[ext]',
      // },
    },
  },
})
