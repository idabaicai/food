import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入element
import './plugin/element'
// 引入全局样式
import './style/index.less'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
