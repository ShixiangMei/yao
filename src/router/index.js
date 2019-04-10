import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Mei from '@/components/Mei'
import Rabbit from '@/components/Rabbit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/yao',
      name: 'HelloWorld',
      component: HelloWorld
    } ,
      {
          path: '/mei',
          name: 'Mei',
          component: Mei
      },
      {
        path: '/yaoTing',
          name: 'yaoTing',
          component: Rabbit
      }
  ]
})
