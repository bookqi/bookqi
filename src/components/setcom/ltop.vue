<!--
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: 范钊
 * @Date: 2020-09-18 01:55:13
 * @LastEditors: 范钊
 * @LastEditTime: 2020-09-18 06:37:23
-->
<template>
  <div class="box">
    <div class="top">
      <ul>
        <li @click="pre"><</li>
        <li>我的账号</li>
        <li>保存</li>
      </ul>
    </div>

  </div>
</template>

<script>
  export default{
    name:"ltop",
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
    .top{
      width: 85%;
      height: 0.8rem;
     /* background-color: red; */
      margin: 0 auto;
    }
    .box ul{
      display: flex;
      justify-content: space-between;
      line-height: 0.8rem;
    }
    .box ul li{
      font-size: 0.15rem;
    }
</style>
