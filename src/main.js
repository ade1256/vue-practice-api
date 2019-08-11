import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMaterial from './plugins/VueMaterial'
import Axios from './plugins/Axios'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  VueMaterial,
  Axios,
  render: h => h(App)
}).$mount('#app')
