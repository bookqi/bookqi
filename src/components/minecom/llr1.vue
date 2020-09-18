<template>
  <div class="box">
  <!-- 登录注册 -->
  <div class="llogin">
    <div class="login">
      <div class="login1" @click="dian">
        <img src="../../assets/100.jpg">
      </div>

      <h2>傻妞</h2>
    </div>


    <!-- 赚钱 -->
      <div class="money">
        <ul>
          <li>
            <p>0</p>
            <h6>金币余额（币）</h6>
          </li>
          <li>
            <p>0</p>
            <h6>今日收益（币）</h6>
          </li>
        </ul>

        <button>去赚钱</button>
      </div>

    </div>
  </div>
</template>

<script>
  export default{
    name:"llr1",
    data(){
      return{

      }
    },
    methods:{
      dian(){
        this.$router.push("/set");
      }
    }
  }
</script>

<style scoped>
   @import url("../../assets/font/iconfont.css");
   li{list-style: none;}
   .llogin{
     width: 90%;
     height: 0.6rem;
     /* background-color: #0077AA; */
     margin: 0 auto;
   }
   .login1{
     width: 0.32rem;
     height: 0.32rem;
     background-color: yellow;
     border-radius: 50%;
     float: left;
   }
   h2{
     font-size: 0.11rem;
     margin-left: 0.13rem;
    float: left;
    line-height:0.32rem ;
   }
   .login{
     width: 100%;
     height: 0.32rem;
   }
   p{
     /* float: left; */
    margin-left: 0.09rem;
    /* line-height:4rem ; */
   }
   .money{
     /* padding-top: 0.625rem; */
     width:100% ;
     /* background-color: yellowgreen; */
     height: 0.28rem;
   }
   ul{
     float: left;
     display: flex;
     width: 80%;

     margin-top:0.05rem
   }
   li{
     width: 100%;
   }
   ul li h6{
    font-size: 0.05rem;

   }
   button{
     float: right;
    height: 0.16rem;
    line-height: 0.16rem;
    border-radius: 0.04rem;
    background-color: #fe924a;
    margin-top: 0.06rem;
    font-size: 0.07rem;
    color: white;
   }
   img{
     width: 0.32rem;
     height: 0.32rem;
     border-radius: 50%;
   }
</style>
