/*
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: 范钊
 * @Date: 2020-09-12 09:56:09
 * @LastEditors: 范钊
 * @LastEditTime: 2020-09-15 21:07:38
 */
import Vue from 'vue'
import Router from 'vue-router'
import sjbook from '@/pages/sjbook'
import search from '@/pages/search'
import searchresult from '@/pages/searchresult'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'search',
      component: search
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
    }
  ]
})
