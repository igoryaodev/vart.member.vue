// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import Mint from 'mint-ui' 
import filter from '@/utility/filter'
import LazyLoad from '@/components/lazyload'
import '@/assets/css/common.css'
import 'mint-ui/lib/style.css'


// localStorage["token"] = `Bearer XhEHKQv8q8/FVJ6boFZ1pc915xA3lrwsTjl/g6TuMbZNreJI0gpkvugXK2ln/cCbzb0UUxtP1F/bZACZNbEup+GucQN05Ukr/7B8spw0PmJn00YjkFF+0Z8Nm3lXZlpJp7tE9rOBvMFB3lc1N0Xw2pTSDe/zWf7PWCLsLnmN0EXIRCziUoIAuUlxoMAAtcAUUmh/cJtnj2bA0XECO+QOXReDEAz1/QeXuaoWK8o21yc=`
localStorage["token"] = `Bearer k4JCfxOW5Uk1qwdt9I4Up/Y6jl0bDqGa0qNjs/RB/WMVW2KB649QxzLJaS0y7+fWU13YEkNdpK0XeCygnNa3ZoL0aK6aMcWBoPNmAHPk3/hGx34EBWz4z7OJqj+7/iwfplIchdV0v1xhM92zernodk6re+RVIW3JJ9usBLXVe59GnJQPGdQaqrpsXtieGLFtTKn+zLFPdQWdR7hqT5uu+UWqQcAN46E4qjitlFfeZSE=`
// axios.defaults.baseURL = 'http://member.vip.vart.cc:8081/'
axios.defaults.baseURL = 'http://vartone.vart.cc/member/vartone/memberapi/'
axios.defaults.headers.common['Authorization'] = localStorage["token"]
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

Vue.use(Mint)
Vue.use(LazyLoad)

Vue.config.productionTip = false
Vue.prototype.axios = axios
Object.keys(filter).forEach(k => Vue.filter(k, filter[k]))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
