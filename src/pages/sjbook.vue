<!--
 * @Descripttion: 书架页面
 * @version: v1.0.0
 * @Author: 范钊
 * @Date: 2020-09-12 10:05:59
 * @LastEditors: 范钊
 * @LastEditTime: 2020-09-18 02:24:22
-->
<template>
<div class="box">
  <sjtop></sjtop>
  <sjqiaodao></sjqiaodao>
  <sjcontent></sjcontent>
  <foot class="foot"></foot>
</div>
</template>

<script>
import sjtop from "../components/sjbook/sjtop"
import sjqiaodao from "../components/sjbook/sjqiaodao"
import sjcontent from "../components/sjbook/sjcontent"
import foot from "../components/index/foot"
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
    foot
  }
}
</script>

<style scoped>
 .box{
   padding-top:0.12rem;
   position: relative;
 } 
 .foot{
   position:fixed;
   bottom:0;
   left:0;
 }
</style>