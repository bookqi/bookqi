/*
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: 范钊
 * @Date: 2020-09-12 09:56:09
 * @LastEditors: 范钊
 * @LastEditTime: 2020-09-18 07:18:36
 */
import Vue from 'vue'
import Router from 'vue-router'
import sjbook from '@/pages/sjbook'
import search from '@/pages/search'
import searchresult from '@/pages/searchresult'
import Login from '../pages/Login.vue'
import mine from '../pages/mine.vue'
import set from '../pages/set.vue'
import update from '../pages/update.vue'
import ltwo from '../components/logincom/ltwo.vue'
import laccount from '../components/logincom/laccount.vue'
import xinren from '../pages/xinren.vue'
import man from '../pages/man'
import weman from '../pages/weman'
import tuijian from '../pages/tuijian'
import faxians from '../pages/faxians'

//lei
import Xiangqing from '../pages/Xiangqing'
import yuedu from '../pages/yuedu'
import mulu from '../pages/mulu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'xinren',
      component: xinren
      // redirect:"/sjbook"
    },
    {
      path: '/sjbook',
      name: 'sjbook',
      component: sjbook
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/searchresult',
      name: 'searchresult',
      component: searchresult
    },
    {
      path: '/Xiangqing/:id',
      name: 'Xiangqing',
      component: Xiangqing
    },
    {
      path: '/yuedu/:shuid',
      name: 'yuedu',
      component: yuedu
    },
    {
      path: '/mulu',
      name: 'mulu',
      component: mulu
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      redirect:"/Login/ltwo",
      children:[
        {
          path:"ltwo",
          name:"ltwo",
          component:ltwo
        },
        {
          path:"laccount",
          name:"laccount",
          component:laccount
        }
      ]
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/set',
      name: 'set',
      component: set
    },
    {
      path: '/update',
      name: 'update',
      component: update
    },
    {
      path: '/xinren/:type',
      name: 'xinren',
      component: xinren
    },
    {
      path: '/man/:type',
      name: 'man',
      component: man
    },
    {
      path: '/weman/:type',
      name: 'weman',
      component: weman
    },
    {
      path: '/tuijian/:type',
      name: 'tuijian',
      component: tuijian
    },
    {
      path: '/faxians/:type',
      name: 'faxians',
      component: faxians
    }
  ]
})

