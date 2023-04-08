import fs from 'fs'
import path from 'path'
import fse from 'fs-extra'

export const checkDirExist = (dir: string):boolean => {
  try {
    return fs.statSync(dir).isDirectory()
  } catch (e: any) {
    if (e.code === 'ENOENT') {
      return false
    }
  }
  return false
}

export const copy = function (from: string, dist: string) {
  if (!checkDirExist(from)) {
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