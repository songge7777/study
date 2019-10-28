// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import  axios from './axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { sync } from 'vuex-router-sync'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.aixo = axios
// Vue.prototype.aixo = axios.create({
//   baseURL: '/api',
// })
/* eslint-disable no-new */


// router & store 同步 
// store 里可以直接获取router信息
// moduleName 起别名
// store要放前面 router后面 不然报错
sync( store, router,{ moduleName: 'RouteModule1111'} )
// console.log(store.state.RouteModule)

new Vue({
  el: '#app',
  components: { App },
  router,
  template: '<App/>',
  store
})
