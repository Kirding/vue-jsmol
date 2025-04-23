import JSmolViewer from './components/JSmolViewer.vue'

// 命名导出组件
export { JSmolViewer }

export default {
  install: (app) => {
    app.component('JSmolViewer', JSmolViewer)
  }
}