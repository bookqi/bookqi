<!--
 * @Descripttion: 搜索页面
 * @version: v1.0.0
 * @Author: 范钊
 * @Date: 2020-09-12 10:05:41
 * @LastEditors: 范钊
 * @LastEditTime: 2020-09-17 20:18:22
-->
<template>
  <div class="box">
    <div class="searchBox">
      <input type="search" v-model="valuetext" :placeholder="searchtext">&nbsp;
      <router-link tag="span" to="/sjbook">取消</router-link>
      <span @click="sousuo" class="iconfont icon-sousuo"></span>
    </div>
  </div>
</template>
<script>
export default {
  props:["sousuocon"],
  name:"searchtop",
  data(){
    return{
      valuetext:'',
      searchtext:"请输入搜索内容",
    }
  },
  methods:{
    sousuo(){
      // dispatch()是派发action。
      // this.$store.dispatch("incAge",this.valuetext);
      // this.$store.commit("incAge",this.valuetext)
      this.$router.push({
        path:"searchresult",
        query:{
          value:this.valuetext,
        }
      })
    }
  },
  created(){
    this.valuetext=this.sousuocon
  }
}
</script>

<style scoped>
.box{
  width:100%;
  height: 0.9rem;
  background: white;
}
.searchBox{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center
}
.searchBox input{
  width: 80%;
  height: 0.4rem;
  border-radius: 20px;
  position: relative;
  background:#eaecf1;
  border:none;
  text-indent: 45px;
}
.icon-sousuo{
  font-size: 22px;
  position:absolute;
  top:33px;
  left:30px;
}
</style>