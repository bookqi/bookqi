import Vue from 'vue'
//引入vueX
import Vuex from 'vuex'
//把vueX安装到Vue里
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    age: 12,
    isAdult: "未成年",
    isAllowMarry: false
  },
  getters: {},
  mutations: {},
  actions: {}
})