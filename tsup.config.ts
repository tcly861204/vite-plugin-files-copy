import { defineConfig } from 'tsup'

export default defineConfig ([
  {
    // 入口文件
    entry: ['src/main.ts'],
    // 是否生成对应的调试源文件
    sourcemap: false,
    // 打包之前是否先清空dist文件
    clean: true,
    // 是否生成dts文件
    dts: true,
    // 是否压缩代码
    minify: true,
    // 输出格式
    format: "esm"
  },
  {
    // 入口文件
    entry: ['src/main.ts'],
    // 是否生成对应的调试源文件
    sourcemap: false,
    // 打包之前是否先清空dist文件
    clean: true,
    // 是否生成dts文件
    dts: true,
    // 是否压缩代码
    minify: true,
    // 输出格式
    format: "cjs"
  }
])