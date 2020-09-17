<!--
 * @Descripttion: 书架页面
 * @version: v1.0.0
 * @Author: 范钊
 * @Date: 2020-09-12 10:05:59
 * @LastEditors: 范钊
 * @LastEditTime: 2020-09-17 14:39:56
-->
<template>
  <div class="box">
    <searchtop></searchtop>
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
      content:"",
    }
  },
  components:{
    searchtop,
    historical,
    resou
  },
  created(){
    
  },
  methods:{
   
  }
}
</script>

<style scoped>
 .box{
   background: white;
 }
</style>