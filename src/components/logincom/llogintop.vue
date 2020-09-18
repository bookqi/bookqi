<!--
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: 范钊
 * @Date: 2020-09-18 01:55:13
 * @LastEditors: 范钊
 * @LastEditTime: 2020-09-18 05:28:36
-->
<template>
  <div class="box">
    <div class="top">
      <span @click="dian"><</span>
     <span>登录</span>

    </div>
  </div>
</template>

<script>
  export default{
    name:"llogintop",
    data(){
      return{

      }
    },
    methods:{
      dian(){
         this.$router.push("/mine");
      }

    }
  }
</script>

<style scoped>

   .top{
    width: 50%;
    height: 0.3rem;
    /* background-color: red; */
    margin-left: 0.1rem;
    line-height:0.3rem ;
    display: flex;
    justify-content: space-between;
  }
  .top span{
    font-size: 0.1rem;
  }

</style>
