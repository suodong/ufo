import Vue from 'vue'
import Router from 'vue-router'
import Admin from '../views/admin'

// import Login from '../views/login'
// import Headers from '../components/headers'
import Lunbo from '../components/lunbo'

import A from '../views/xiaomi/a'
import B from '../views/xiaomi/b'
import C from '../views/xiaomi/c'
import D from '../views/xiaomi/d'
import E from '../views/xiaomi/e'





Vue.use(Router)

const router = new Router({
  mode:'hash',
  routes: [
    {
      path: '/',
      name: 'admin',
      component: Admin
    },
    {
      path: '/a',
      name: 'a',
      component: A
    },
    {
      path: '/b',
      name: 'b',
      component: B
    },
    {
      path: '/c',
      name: 'c',
      component: C
    },



    
]

})

export default router;