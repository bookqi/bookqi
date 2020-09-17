import Vue from "vue";
import vueX from "vuex";

Vue.use(vueX);

export default new vueX.Store({
    state:{
       count:1
    },
    getters:{
     
    },
    // mutation：修改state里的数据，跟跟踪状态有关系
    // mutation里只能写同步代码。
    mutations:{
        
    },
    // action里可以包含异步代码
    actions:{
     
    },
});