import Vue from 'vue'
import App from './App'
import router from './router'
// 启用ElementUI
import Element from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
import '../static/style.css'
import '../static/normalize.min.css'

Vue.config.productionTip = false
Vue.use(Element)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  render: h => h(App)
})
