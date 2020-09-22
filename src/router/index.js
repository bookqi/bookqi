import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index'
import man from '../pages/man'
import weman from '../pages/weman'
import tuijian from '../pages/tuijian'
import faxians from '../pages/faxians'
import pen from '../pages/pen'
import pen1 from '../pages/pen1'
import chuan from '../pages/chuan'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'chuan',
      component: chuan
    },
    {
      path: '/index/:type',
      name: 'index',
      component: index
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
    },
    {
      path: '/pen',
      name: 'pen',
      component: pen
    },
    {
      path: '/pen1',
      name: 'pen1',
      component: pen1
    },
    {
      path: '/chuan',
      name: 'chuan',
      component: chuan
    }
  ]
})
