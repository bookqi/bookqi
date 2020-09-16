import Vue from 'vue'
import Router from 'vue-router'
import Xiangqing from '../pages/Xiangqing'
import Faxian from '../pages/Faxian'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Xiangqing',
      component: Xiangqing
    },
    {
      path: '/Xiangqing',
      name: 'Xiangqing',
      component: Xiangqing
    },
    {
      path: '/Faxian',
      name: 'Faxian',
      component: Faxian
    }
  ]
})
