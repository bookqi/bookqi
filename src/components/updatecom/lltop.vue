<!--
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: 范钊
 * @Date: 2020-09-18 01:55:13
 * @LastEditors: 范钊
 * @LastEditTime: 2020-09-18 05:02:32
-->
<template>
  <div class="box">
    <div class="up">
      <ul>
        <li @click="pre">＜</li>
        <li>设置密码</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default{
    name:"lltop",
    data(){
      return{

      }
    },
    methods:{
      pre(){
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped>
   .up{
    width: 85%;
    height: 0.33rem;
    /* background-color: #0077AA; */
    margin: 0 auto;
  }
  .up ul{
    display: flex;
    width: 70%;
    height:0.33rem ;
    /* background-color: red; */
    justify-content: space-between;
    text-align: center;
    line-height: 0.33rem;
  }
  .up ul li{
    font-size: 0.09rem;
    color: black;
  }
</style>
