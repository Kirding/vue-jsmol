import JSmolViewer from './components/JSmolViewer.vue'

export default {
  install: (app, options = {}) => {
    app.component(options.componentName || 'JSmolViewer', JSmolViewer)
  }
}