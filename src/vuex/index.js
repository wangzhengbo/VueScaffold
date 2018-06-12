import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.config.debug = process.env.NODE_ENV !== 'production'

const modules = {}
const controllers = require.context('./modules', false, /\.js$/)
controllers.keys().forEach(fileName => {
  let moduleName = fileName
  console.log('fileName', fileName)
  const index = fileName.lastIndexOf('/')
  if (index >= 0) {
    moduleName = fileName.substring(index + 1)
  }
  moduleName = moduleName.replace(/\.js$/, '')

  let controllerConfig = controllers(fileName)
  controllerConfig = controllerConfig.default || controllerConfig
  modules[moduleName] = controllerConfig
})

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules
})
