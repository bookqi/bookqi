<!--
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: 范钊
 * @Date: 2020-09-18 01:55:13
 * @LastEditors: 范钊
 * @LastEditTime: 2020-09-18 06:36:48
-->
<template>
  <div class="box">
      <div class="btn" @click="cleare">
         <!-- @click="cleare" -->
        退出账号
      </div>
  </div>
</template>

<script>
  export default{
    name:"lback",
    data(){
      return{

      }
    }
    ,
    methods:{
      cleare(){
        localStorage.removeItem("phone");
        this.$router.push("/mine");
      }
    }
  }
</script>

<style scoped>
  .box{
    position: relative;
  }
  .btn{
    width: 100%;
    height: 0.25rem;
    margin-top: 0.5rem;
    background-color: white;
    position: absolute;
    top: 1.5rem;
    line-height: 0.25rem;
    text-align: center;
    background-color: #999;
  }
</style>
