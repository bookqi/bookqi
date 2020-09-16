/*
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: 范钊
 * @Date: 2020-09-12 09:56:09
 * @LastEditors: 范钊
 * @LastEditTime: 2020-09-14 20:34:51
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
 //引入axios 
import axios from "axios";
Vue.prototype.$axios = axios;
//阿里小图标
import "./assets/font/iconfont.css"
//引入vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
