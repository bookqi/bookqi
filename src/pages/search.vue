<!--
 * @Descripttion: 书架页面
 * @version: v1.0.0
 * @Author: 范钊
 * @Date: 2020-09-12 10:05:59
 * @LastEditors: 范钊
 * @LastEditTime: 2020-09-15 21:02:31
-->
<template>
  <div class="box">
    <searchtop @fun="test"></searchtop>
    <historical></historical>
    <resou></resou>
  </div>
</template>

<script>
import searchtop from "../components/search/searchtop"
import historical from "../components/search/historical"
import resou from "../components/search/resou"
export default {
  name:"search",
  data(){
    return{
      guanjianzi:""
    }
  },
  components:{
    searchtop,
    historical,
    resou
  },
  methods:{
    test(data){
      this.guanjianzi=data;
      console.log(this.guanjianzi);
    }
  }
}
</script>

<style scoped>
 .box{
   background: white;
 }
</style>