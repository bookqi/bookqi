<!--
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: 范钊
 * @Date: 2020-09-18 01:55:12
 * @LastEditors: 范钊
 * @LastEditTime: 2020-09-18 06:50:52
-->
<template>
  <div class="box">

    <!-- 消息 -->
    <div class="inform">
      <ul>
        <li>
          <i class="iconfont icon-huabanfuben  bb"></i>
          <p>消息</p>
        </li>
        <li>
          <i class="iconfont icon-shoucang  bb"></i>
          <p>收藏</p>
        </li>
        <li>
          <i class="iconfont icon-dibudaohanglan-  bb"></i>
          <p>书评</p>
        </li>
        <li>
          <i class="iconfont icon-shijian  bb"></i>
          <p>阅历</p>
        </li>
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
  li{
    list-style: none;
  }
  .box{
    margin-top: 0.3rem;
  }
  .inform{
    width: 90%;
    height: 0.5rem;
    background-color: white;
    margin: 0 auto;
    border-radius: 0.075rem;
  }
  ul{
    display: flex;
    width: 80%;
    height:0.5rem ;
    margin: 0 auto;
    /* background-color: #666666; */
    justify-content: space-between;
    align-items: center;
   
  }
  .bb{
    font-size: 0.12rem;
  }
  p{
    font-size: 0.06rem;
    color: #999999;
    margin-top: 0.05rem;
  }
</style>
