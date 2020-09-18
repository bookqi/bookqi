<template>
  <div class="box">
    <!-- 手机号和验证码 -->
    <div class="iphone1">
      <div class="iphone-t1">
        <span>账号</span>
        <input type="search" placeholder="手机号/邮箱 " v-model="msgReg1">
      </div>
      <div class="yan1">
        <span>密码</span>
        <input type="text" placeholder="请输入密码" v-model="msgPsd1">
        <h6>{{erronl}}</h6>
      </div>
    </div>


    <!-- 登录按钮 -->
    <div class="btn1">
      <button class="abc" @click="btns1">登录</button>


    </div>

    <div class="mi">
      <p>手机号注册</p>
      <p>忘记密码</p>
    </div>

  </div>
</template>

<script>
  import axios from "axios";
  export default{
    name:"laccount",
    data(){
      return{
          msgReg1:"",
          msgPsd1:"",
          erronl:""
      }
    },
    methods:{
      btns1(){
        let reg1=/^1(3|5|8|9|7)\d{9}$/;
        let psd1=/^[a-z0-9_-]{6,18}$/;
        if(reg1.test(this.msgReg1)){
          if(psd1.test(this.msgPsd1)){


              // 下面是用post方法
              // params是post方法中的，get中没有
              // var params=new URLSearchParams();
              // params.append("username1",this.msgReg1);

              // params.append("yan1",this.msgPsd1);

              // axios({
              //   url:"/login1",
              //   methods:"post",
              //   // params 地址栏携带的数据
              //   data:params
              // }).then(res=>{
              //   console.log(res);
              //   // localStorage.username1="";
              //   // localStorage.username1=res.data.username1;
              // }).catch(err=>{
              //   console.log(err);
              // })

                // 下面是get方法
                axios({
                  url:"/login1",
                  methods:"get",
                  // params 地址栏携带的数据
                  params:{
                    u_phone:this.msgReg1,
                    u_pass:this.msgPsd1
                  }
                }).then(res=>{
                  console.log(res);
                  localStorage.u_phone="";
                  localStorage.username=res.data.u_phone;
                })
          }else{
            this.erronl="验证码格式不正确";
          }

        }else{
          this.erronl="请输入正确的手机号";
        }

      }
    }
  }
</script>

<style scoped>

   .box{
      margin-top: 0.42rem;
    }
    .iphone1{
      width: 85%;
      height: 1rem;
      /* background-color: red; */
      margin: 0 auto;
    }
    .iphone1 .iphone-t1{
      width: 2.5rem;
      height: 0.15rem;
      line-height:0.15rem ;
      margin-top: 0.3rem;
      margin-bottom: 0.1rem;
      padding-bottom: 0.186rem;
      /* border-bottom: 1px solid #969896; */
      margin:0 auto;
    }
    .iphone1 .iphone-t1 input{
      border: none;
      width: 1.8rem;
       height: 0.2rem;

    }
    .iphone1 .iphone-t1 span{
      font-size: 0.08rem;
      color: black;
      margin-right: 0.05rem;
      /* margin-top: 1rem; */
    }
    .iphone1 .yan1{
      width: 2.5rem;
      height:0.15rem ;
      /* margin-bottom: 0.1rem; */
      /* padding-bottom: 0.186rem; */
      /* border-bottom: 0.005rem solid #969896; */
      margin: 0 auto;
    }
    .iphone1 .yan1 span{
      font-size: 0.08rem;
      color: black;
      margin-right: 0.08rem;
    }
    .iphone1 .yan1 span{
      font-size: 0.08rem;
      color: black;
      margin-right: 0.05rem;
    }
    .iphone1 .yan1 button{
      border-radius: 0.035rem;
       background-color: #22b185;
    }
    .iphone1 .yan1 input{
      width: 1.8rem;
      border: none;
      height: 0.2rem;
    }
    .iphone1  h6{
      font-size: 0.07rem;
      color: red;
      margin-top: 0.1rem;
    }
    /* 登录按钮 */
    .btn1{
      width:95% ;
      margin: 0 auto;
      height: 0.2rem;
      margin-bottom: 0.3rem;
      margin-top: 0.1rem;
    }
    .btn1 .abc{
      width: 2.6rem;
      height: 0.4rem;
      font-size: 0.08rem;
      margin-left: 0.5rem;
      border-radius: 0.03rem;
       background-color: #22b185;
       border: none;
    }

    .mi{
        width: 2.6rem;
        height: 0.09rem;
        margin: 0 auto;
        /* background-color: red; */
        display: flex;
        justify-content: space-between;
    }
    p{
      /* margin-left: 1.65rem; */
      color: #999;
      margin-bottom: 0.25rem;
    }
</style>
