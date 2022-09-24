import { PluginOption } from 'vite';
type patternItem = {
  from: string,
  to: string
}
export interface ViteCopyPlugin {
  patterns: Array<patternItem>
}

export default function viteCopyPlugin(options: ViteCopyPlugin):PluginOption[];