declare module 'vue-jsmol' {
  import { DefineComponent } from 'vue'
  const JSmolViewer: DefineComponent<{
    src: string
    width?: string
    height?: string
    j2sPath?: string
    use?: 'HTML5' | 'WebGL'
  }>
  export { JSmolViewer }
}