import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home.vue'
import Standard from '../components/calculators/standard.vue'
import Science from '../components/calculators/science.vue'

Vue.use(Router)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: '/standard',
    children: [{
      //标准计算器
      path: '/standard',
      component: Standard,
      name: 'standard'
    }, {
      //科学计算器
      path: '/science',
      component: Science,
      name: 'science'
    }
    ]
  }
];

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
