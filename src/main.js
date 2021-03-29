import Vue from 'vue'
import App from './App.vue'

// 导入路由
import router from './router/index'

// element组件库
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/display.css'
import { isEmpty } from 'element-ui/src/utils/util'

// 添加图标
import './assets/fonts/iconfont.css'

// 导入全局样式表
import './assets/css/global.css'
import './assets/css/markdowm.css'

// 导入对axios的支持
import axios from 'axios'
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
