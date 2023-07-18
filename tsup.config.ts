import { defineConfig } from 'tsup'
import path from 'path'
import fs from 'fs'

export default defineConfig ({
  // 入口文件
  entry: ['src/main.ts'],
  // 输出目录
  outDir: 'dist',
  legacyOutput: false,
  banner: {
    js: `/*
* plugin: vite-plugin-files-copy
* author: tcly861204
* github: https://github.com/tcly861204/vite-plugin-files-copy
*/`
  },
  // 是否生成对应的调试源文件
  sourcemap: false,
  // 打包之前是否先清空dist文件
  clean: true,
  // 是否生成dts文件
  dts: true,
  // 是否压缩代码
  minify: true,
  // 防止代码分割
  splitting: false,
  // 输出格式
  format: ["esm", "cjs"],
  // 包成功后的回调函数
  async onSuccess() {
    await fs.renameSync(path.resolve(__dirname, 'dist/main.js'), path.resolve(__dirname, 'dist/main.cjs'))
    console.log('Build Success')
  },
},)