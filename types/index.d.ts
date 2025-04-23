declare module 'vue-jsmol' {
  import { Ref, DefineComponent } from 'vue'

  export interface JSmolAPI {
    rotate: (degrees: number) => void
    resetView: () => void
    getStatus: () => Record<string, any>
  }

  // 定义组件类型
  export const JSmolViewer: DefineComponent<{
    src: string
    width?: string
    height?: string
    j2sPath?: string
    use?: 'HTML5' | 'WebGL'
  }> & {
    $refs: {
      jmol: Ref<JSmolAPI>
      container: Ref<HTMLElement>
    }
  }

  // 定义插件类型
  const plugin: {
    install: (app: any) => void
  }
  export default plugin
}