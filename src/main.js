import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/display.css'
// 导入全局样式表
import './assets/css/global.css'
import axios from 'axios'
import { isEmpty } from 'element-ui/src/utils/util'

// 配置请求的根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888'
// axios对请求进行拦截，进行预处理
axios.interceptors.request.use(config => {
  if (!isEmpty(window.sessionStorage.getItem('token'))) {
    config.headers.Authorization = window.sessionStorage.getItem('token')
  }
  return config
})
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
