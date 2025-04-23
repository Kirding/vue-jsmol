import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'VueJSmol',
      formats: ['es', 'umd'], // 明确指定格式
      fileName: (format) => {
        if (format === 'es') return 'vue-jsmol.mjs'
        return 'vue-jsmol.umd.js'
      }
    },
    rollupOptions: {
      external: ['vue', 'jquery'],
      output: {
        // 处理特殊字符
        sanitizeFileName: (name) => name.replace(/[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g, '_'),
        // 强制 ES 模块规范
        interop: 'auto',
        exports: 'named', // 关键设置
        globals: {
          vue: 'Vue',
          jquery: '$'
        }
      }
    }
  }
})