import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)


import home from './views/home.vue'
import assort from './views/assort.vue'
import self from './views/self.vue'
import shopcar from './views/shopcar.vue'
import login from './views/login.vue'
import res from './views/res.vue'
import error from './views/error.vue'

/* 小的跳转 */
import goorder from './components/go-order'
import datum from './components/datum'
import integral from './components/integral'
import list from './components/list'
import mycollect from './components/mycollect'
import detail from './components/detail'
import addres from './components/addres'

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/assort',
      component: assort
    },
    {
      path: '/self',
     
      component: self
    },
    {
      path: '/shopcar',
      component: shopcar
    },
    {
      path: '/login',
      name: 'login',
      component:login
    },
    {
      path: '/res',
      name: 'res',
      component:res
    },
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/goorder',
      name: 'goorder',
      component:goorder
    },
    {
      path: '/datum',
      name: 'datum',
      component:datum
    },
    {
      path: '/integral',
      name: 'integral',
      component:integral
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/mycollect',
      name: 'mycollect',
      component: mycollect
    },
    {
      path: '/detail/:id',
      name: 'detail',
      
      component: detail
    },
    {
      path: '/addres',
      name: 'addres',
      component: addres
    },

    {
      path: '*',
      
      component: error
    },

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/about.vue')
    // }
  ]
})
