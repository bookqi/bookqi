<!--
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: 范钊
 * @Date: 2020-09-18 01:55:13
 * @LastEditors: 范钊
 * @LastEditTime: 2020-09-18 06:51:44
-->
<template>
  <div class="box">
    <div class="select">
      <ul>
        <li>
          <p>我的书籍</p>
          <h6>></h6>
        </li>
        <li>
          <p>我要写作</p>
          <h6>></h6>
        </li>
        <li>
          <p>书旗小游戏，千款游戏即点即玩！</p>
          <h6>></h6>
        </li>
        <li>
          <p>绑兑换码</p>
          <h6>></h6>
        </li>
        <li>
          <p>阅读喜好</p>
          <h6>></h6>
        </li>
        <li>
          <p>意见反馈</p>
          <h6>></h6>
        </li>
        <li>
          <p>礼品中心</p>
          <h6>></h6>
        </li>
        <li>
          <p>公益3小时</p>
          <h6>></h6>
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
  li{list-style: none;}
  .box{
    margin-top: 0.1rem;
  }
  .select{
    background-color: white;
    width: 90%;
    margin: 0 auto;
    border-radius: 0.1rem;
    padding-top: 0.079rem;
  }
  ul{

  width: 90%;
  
  margin: 0 auto;
  }
  li{
    height: 0.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
  }
  p{
    font-size: 0.08rem;
    color: black;
    font-weight: bold;
  }
  h6{
    font-size: 0.08rem;
    color: #999;
  }
</style>
