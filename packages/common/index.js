import Ac from './src/index.vue'

Ac.install = (app) => {
  app.component(Ac.name, Ac)
}

export default Ac