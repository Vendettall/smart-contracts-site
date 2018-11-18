import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import DApp from '@/pages/DApp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/dapp',
      name: 'DApp',
      component: DApp
    }
  ]
})
