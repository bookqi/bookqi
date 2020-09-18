<!--
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: 范钊
 * @Date: 2020-09-18 01:55:13
 * @LastEditors: 范钊
 * @LastEditTime: 2020-09-18 09:48:08
-->
<template>
  <div class="box">
    <div class="button">
      <van-divider class="three">第三方账号快速登录</van-divider>


      <ul>
        <li>
          <i class="iconfont icon-sign_qq xx"></i>
        </li>
        <li>
          <i class="iconfont icon-weixin-copy xx"></i>
        </li>
        <li>
          <i class="iconfont icon-qunfengxinlangweibo xx"></i>
        </li>
        <li>
          <i class="iconfont icon-zhifubao xx"></i>
        </li>
        <li>
          <i class="iconfont icon-taobao xx"></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default{
    name:"lthree",
    data(){
      return{

      }
    }
  }
</script>

<style scoped>
  @import url("../../assets/font/iconfont.css");
   @import url("../../assets/font2/iconfont.css");

.box{
      margin-bottom: 0.42rem;
      margin-top: 1rem;
    }
   .button{
     width: 75%;
     height: 0.6rem;

     margin: 0 auto;
   }
   .three{
     font-size: 0.08rem;
     color: black;
   }
   .button ul{
     display: flex;
     justify-content: space-between;
     margin-top:0.17rem ;
   }
   .xx{
     font-size: 0.21rem;
   }
   .button ul li:nth-child(1) .xx{
     color: #5accfe;
     border-radius: 50%;
   }
   .button ul li:nth-child(2) .xx{
     color: #88da58;
     border-radius: 50%;
   }
   .button ul li:nth-child(3) .xx{
     color: #f75e60;
     border-radius: 50%;
   }
   .button ul li:nth-child(4) .xx{
     color: #30b6e4;
     border-radius: 50%;
   }
   .button ul li:nth-child(5) .xx{
     color: #f67647;
     border-radius: 50%;
   }

</style>
