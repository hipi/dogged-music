import { defineConfig } from 'vite'

import path from 'path'

import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import viteSvgIcons from 'vite-plugin-svg-icons'

// 详细配置请访问 https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    vue(),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    viteSvgIcons({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/icons')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]',
    }),
  ],
  resolve: {
    alias: {
      '@/': new URL('./src/', import.meta.url).pathname,
      '~': new URL('./node_modules/', import.meta.url).pathname,
    },
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@use "~/styles/element/index.scss" as *;`,
  //     },
  //   },
  // },
})
