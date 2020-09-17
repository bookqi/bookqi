<!--
 * @Descripttion: 书架页面
 * @version: v1.0.0
 * @Author: 范钊
 * @Date: 2020-09-12 10:05:59
 * @LastEditors: 范钊
 * @LastEditTime: 2020-09-16 21:35:27
-->
<template>
  <div class="box">
    <searchtop :sousuocon="value"></searchtop>
    <sousuolist :valuedata="value" :valuelishi="value2"></sousuolist>
  </div>
</template>

<script>
import searchtop from "../components/search/searchtop"
import sousuolist from "../components/searchresult/sousuolist"
export default {
  name:"search",
  data(){
    return{
      value:"",
      value2:"",
    }
  },
  components:{
    searchtop,
    sousuolist
  },
  created(){
    this.value=this.$route.query.value;
    this.value2=this.$route.query.valuelishi;
  }
}
</script>

<style scoped>
 .box{
   background: white;
 }
</style>