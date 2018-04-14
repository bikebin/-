import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home'
import fenlei from '../components/fenlei'
import one from '../components/fenlei/one'
import vee from '../components/vee/vee'
import gouwu from '../components/gouwu'
import mine from '../components/mine'
import login from '../components/login'
import foot from '../components/foot/foot'
Vue.use(Router);

export default new Router({
  routes: [
  	{
  	  path: '*', redirect: '/home'
  	},
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/fenlei',
      name: 'fenlei',
      component: fenlei,
      children:[
      	{path: '/fenlei/:id', component:one},
      
      ]

    },
    {
      path: '/gouwu',
      name: 'gouwu',
      component: gouwu
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/vee',
      name: 'vee',
      component: vee
    }
  ]
})
