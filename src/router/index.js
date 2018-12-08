import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import DApp from '@/pages/DApp'
import DApps from '@/pages/DApps'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/my-dapp',
      name: 'DApp',
      component: DApp
    },
    {
      path: '/dapps',
      name: 'DApps',
      component: DApps
    }
  ]
})
