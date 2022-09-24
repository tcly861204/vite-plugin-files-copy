# vite-plugin-files-copy
复制静态资源到指定的文件夹

## 说明
vite2 使用 2.**版本
vite3 使用 3.**版本

## 安装
> npm i vite-plugin-files-copy@2 -D
或者
> npm i vite-plugin-files-copy@3 -D

## 示例
```
import CopyPlugin from 'vite-plugin-files-copy'
{
  ...
  plugins: [
    CopyPlugin({
      patterns: [
        {
          from: 'sourcePath', // string 相对项目下相对路径
          to: 'sourcePath', // string 相对项目下相对路径
        },
      ],
    }),
  ],
  ...
}
```