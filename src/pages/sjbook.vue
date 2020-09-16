<!--
 * @Descripttion: 书架页面
 * @version: v1.0.0
 * @Author: 范钊
 * @Date: 2020-09-12 10:05:59
 * @LastEditors: 范钊
 * @LastEditTime: 2020-09-14 15:27:34
-->
<template>
<div class="box">
  <sjtop></sjtop>
  <sjqiaodao></sjqiaodao>
  <sjcontent></sjcontent>
</div>
</template>

<script>
import sjtop from "../components/sjbook/sjtop"
import sjqiaodao from "../components/sjbook/sjqiaodao"
import sjcontent from "../components/sjbook/sjcontent"
export default {
  name:"sjbook",
  data(){
    return{

    }
  },
  components:{
    sjtop,
    sjqiaodao,
    sjcontent,
  }
}
</script>

<style scoped>
 .box{
   padding-top:0.12rem;
 } 
</style>