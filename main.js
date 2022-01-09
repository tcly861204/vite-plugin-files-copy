const path = require('path')
const fse = require('fs-extra')
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
            fse.copy(fromdir, distDir)
          }
        })
      } catch (_) {}
    },
  }
}
