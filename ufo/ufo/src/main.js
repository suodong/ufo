import Vue from 'vue'
import App from './App'
import router from './router'
import axiosInstance from './https'

Vue.config.productionTip = false
Vue.prototype.$http = axiosInstance;
new Vue({
  el: '#app',
  router,
  axiosInstance,
  render: h => h(App)
})
