const path = require('path')
const fs = require('fs')
const fse = require('fs-extra')

const checkDirExist = function (dir) {
  try {
    return fs.statSync(dir).isDirectory()
  } catch (e) {
    if (e.code === 'ENOENT') {
      return false
    }
  }
}
const copy = function (from, dist) {
  console.log('当前根路径: ' + path.resolve('./'))
  console.log('from dir: ' + from + '; ' + 'to dir: ' + dist)
  if (!checkDirExist(from)) {
    console.error('可复制的文件或者目录不存在')
    return false
  }
  if (!checkDirExist(dist)) {
    fse.mkdirSync(dist)
  }
  const dir = fs.readdirSync(from)
  dir.forEach((file) => {
    const filePath = path.resolve(from, file)
    fs.stat(filePath, (_, stat) => {
      if (stat.isFile()) {
        // 创建读取流
        const readStream = fs.createReadStream(filePath)
        // 创建写入流
        const writeStream = fs.createWriteStream(path.resolve(dist, file))
        // 复制写入文件
        readStream.pipe(writeStream)
      } else if (stat.isDirectory()) {
        copy(filePath, path.resolve(dist, file))
      }
    })
  })
}

let viteConfig = null

module.exports = function (options) {
  return {
    name: 'vite-plugin-files-copy',
    apply: 'build',
    configResolved(resolvedConfig) {
      viteConfig = resolvedConfig
    },
    async writeBundle() {
      const root = viteConfig.root
      try {
        options.patterns.forEach((item) => {
          if (item.from && item.to) {
            const fromdir = path.resolve(root, item.from)
            const distDir = path.resolve(root, item.to)
            copy(fromdir, distDir)
          }
        })
      } catch (_) {}
    },
  }
}
