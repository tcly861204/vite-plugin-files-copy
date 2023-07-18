# vite-plugin-files-copy <a href="https://npmjs.com/package/vite-plugin-files-copy" target="_blank"><img src="https://badgen.net/npm/v/vite-plugin-files-copy" alt="npm package"></a>
复制静态资源到指定的文件夹<br />



## 说明
vite2 使用 2.**版本

vite3+ 使用 3.**版本

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
## 赞助 | Sponsored

开源不易, 有了您的赞助, 我们会做的更好 👋

<img style="display: block;" src="https://tcly861204.github.io/static/wepay.jpg" width="240px" />

## 技术反馈和交流群 | Technical feedback and communication

微信：cobill2008

## License

[MIT](http://opensource.org/licenses/MIT)
