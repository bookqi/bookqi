<!--
 * @Descripttion: 书架页面
 * @version: v1.0.0
 * @Author: 范钊
 * @Date: 2020-09-12 10:05:59
 * @LastEditors: 范钊
 * @LastEditTime: 2020-09-15 17:05:33
-->
<template>
  <div class="box">
    <searchtop></searchtop>
  </div>
</template>

<script>
import searchtop from "../components/search/searchtop"
export default {
  name:"search",
  data(){
    return{

    }
  },
  components:{
    searchtop,
  }
}
</script>

<style scoped>
 .box{
   background: white;
 }
</style>