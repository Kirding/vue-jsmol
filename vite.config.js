import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'VueJSmol',
      fileName: (format) => `vue-jsmol.${format}.js`
    },
    rollupOptions: {
      external: ['vue', 'jquery'],
      output: {
        globals: {
          vue: 'Vue',
          jquery: '$'
        }
      }
    }
  }
})