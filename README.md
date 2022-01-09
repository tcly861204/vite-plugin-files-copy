# vite-plugin-files-copy
复制静态资源到指定的文件夹

## 安装
> npm i vite-plugin-files-copy -D

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