import { PluginOption } from 'vite'
import { copy } from './utils/index'
import path from 'path'
type patternItem = {
  from: string,
  to: string
}
interface ViteCopyPlugin {
  patterns: Array<patternItem>
}
let viteConfig: any = null
const PluginCopy = (options: ViteCopyPlugin): PluginOption => {
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

export default PluginCopy