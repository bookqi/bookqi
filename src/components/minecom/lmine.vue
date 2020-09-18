<!--
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: 范钊
 * @Date: 2020-09-18 01:55:13
 * @LastEditors: 范钊
 * @LastEditTime: 2020-09-18 06:46:29
-->
<template>
  <div class="box">
    <!-- 设置和月亮 -->

    <div class="top">
      <ul>
        <li><i class="iconfont icon-yueliang aa"></i></li>
        <li><i class="iconfont icon-icon-test aa"></i></li>
      </ul>
    </div>


  </div>
</template>

<script>
  export default{
    name:"llogintop",
    data(){
      return{

      }
    }
  }
</script>

<style scoped>
  @import url("../../assets/font/iconfont.css");
  .box{
    width: 90%;
    height: 0.25rem;
    /* background-color: red; */
    margin: 0 auto;

  }
  .top{
    width: 90%;
    height: 0.25rem;
    /* background-color: red; */
    position: fixed;
  }
  li{
    list-style: none;

  }
  ul{
    width: 20%;
    display: flex;
    text-align: center;
    line-height:0.25rem ;
    margin-left: 80%;
  }
  li{
    list-style: none;
   padding-left: 0.05rem;
  }
 li .aa{

    font-size: 0.12rem;
  }
</style>
