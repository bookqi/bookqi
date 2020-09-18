<template>
  <div class="box">

    <!-- 手机验证码  账户密码 -->
    <div class="next">
      <ul>
        <li><router-link to="/Login/ltwo">手机验证码</router-link></li>

        <li><router-link to="/Login/laccount">账户密码</router-link></li>

      </ul>
    </div>
    <router-view></router-view>

    <!-- 手机号和验证码 -->
    <!-- <div class="iphone">
      <div class="iphone-t">
        <span>手机号</span>
        <input type="search" placeholder="手机号">
      </div>
      <div class="yan">
        <span>验证码</span>
        <input type="text" placeholder="输入验证码">
        <button>获取验证码</button>
      </div>
    </div> -->

    <!-- 登录按钮 -->
    <!-- <div class="btn">
      <button class="abc">登录</button>


    </div> -->

    <!-- 手机号注册 -->
    <!-- <p>手机号注册</p> -->




    <!-- 第三方 -->
    <!-- <div class="button">
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
    </div> -->

  </div>
</template>

<script>
  export default{
    name:"liphone",
    data(){
      return{

      }
    }
  }
</script>

<style scoped>
   @import url("../../assets/font/iconfont.css");
    @import url("../../assets/font2/iconfont.css");
  .next{
    width: 100%;
    height: 0.25rem;
    /* background-color: #42B983; */
  }
  .next ul{
    display: flex;
    justify-content: space-around;
    align-items: center;

  }
  .next li{
    width: 50%;
    list-style: none;
    line-height:0.25rem ;
    text-align: center;
    font-size: 0.08rem;
    
  }
  .next li a{
    color: black;
  }
</style>
