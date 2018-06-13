// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './element-ui'
import commonComponents from './components/common/index'
import router from './router'
import store from './vuex/index'
import App from './App'

Vue.use(commonComponents)

Vue.config.productionTip = process.env.NODE_ENV !== 'production'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
