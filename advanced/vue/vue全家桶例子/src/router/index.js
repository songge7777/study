import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/login'

import HomePage from '@/components/homePage'
import Message from '@/components/message'
import Main from '@/components/main'

import Drinks from '@/components/drinks'
import FruitTray from '@/components/fruitTray'
import HotPot from '@/components/hotPot'
import StapleFood from '@/components/stapleFood'

import Order from '@/components/order'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: HomePage,
      children:[
        {
          path: '/',
          name: 'main',
          component: Main,
        },
        {
          path: '/message',
          name: 'message',
          component: Message,
        },
        {
          path: '/drinks',
          name: 'drinks',
          component: Drinks,
        },
        {
          path: '/fruitTray',
          name: 'fruitTray',
          component: FruitTray,
        },
        {
          path: '/hotPot',
          name: 'hotPot',
          component: HotPot,
        },
        {
          path: '/stapleFood',
          name: 'stapleFood',
          component: StapleFood,
        },
        {
          path: '/order',
          name: 'order',
          component: Order,
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    }
  ]
})
