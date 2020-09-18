<template>
  <div class="box">

    <!-- 手机号和验证码 -->
    <div class="iphone">
      <div class="iphone-t">
        <span>手机号:</span>
        <input type="search" placeholder="手机号" v-model="msgReg">
      </div>
      <div class="yan">
        <span>验证码:</span>
        <input type="text" placeholder="输入验证码" v-model="msgPsd">
        <button @click="huo">获取验证码</button>
      </div>
      <h6>{{erron}}</h6>
    </div>


    <!-- 登录按钮 -->
    <div class="btn">
      <button class="abc" @click="btns">登录</button>


    </div>

    <p>手机号注册</p>
  </div>
</template>

<script>
  import axios from "axios";
  export default{
    name:"ltwo",
    data(){
      return{
          msgReg:"",
          msgPsd:"",
          erron:""
      }
    },
    methods:{
      btns(){
        let reg=/^1(3|5|8|9|7)\d{9}$/;
        let psd=/^\d{4}$/;
        if(reg.test(this.msgReg)){
          if(psd.test(this.msgPsd)){


              // 下面是用post方法
              // params是post方法中的，get中没有


              //这是登录的接口
              // var params=new URLSearchParams();
              // params.append("username",this.msgReg);

              // params.append("yan",this.msgPsd);

              // axios({
              //   url:"/login",
              //   methods:"post",
              //   // params 地址栏携带的数据
              //   data:params
              // }).then(res=>{
              //   console.log(res);
              //   // localStorage.username="";
              //   // localStorage.username=res.data.username;
              // }).catch(err=>{
              //   console.log(err);
              // })


                // 下面是get方法
                axios({
                  url:"/checkCode",

                  // params 地址栏携带的数据
                  params:{
                    phone:this.msgReg,
                    checkSmsCode:this.msgPsd
                  }
                }).then(res=>{
                  console.log(res);
                  if(res.data.code==0){//成功的时候返回0
                    localStorage.phone="";
                    localStorage.phone=res.data.data;
                    this.$router.push("/mine")
                    // localStorage.code="";
                    // localStorage.code=res.data.code;
                  }
                  else{
                    Toast('验证码错误');
                  }

                })
          }else{
            this.erron="验证码格式不正确";
          }

        }else{
          this.erron="请输入正确的手机号";
        }

      },
      // 这个是验证码的接口
      huo(){

        // var params=new URLSearchParams();
        // params.append("phone",this.msgReg);

        axios({
          url:"/sendsms",
          // params 地址栏携带的数据
          params:{
            // phone:this.msgReg,
            "phone":this.msgReg
          }
        })
      }
    }
  }
</script>

<style scoped>
  .iphone{
    width: 85%;
    height: 0.8rem;
    /* background-color:red; */
    margin: 0 auto;
  }
  .iphone .iphone-t{
    width: 85%;
    height: 0.15rem;
    line-height:0.15rem ;
    margin-top: 0.2rem;
    margin-bottom: 0.1rem;
    padding-bottom: 0.186rem;
    border-bottom: 1px solid #999;
    padding-bottom: 0.3rem;
    /* margin:0 auto; */
    margin-left: 0.2rem;
  }
  .iphone .iphone-t input{
    border: none;
    width: 1.5rem;
     height: 0.3rem;

  }
  .iphone .iphone-t span{
    font-size: 0.16rem;
    color: black;
    margin-right: 0.05rem;
  }
  .iphone .yan{
    width: 85%;
    height:0.6rem ;
    margin-bottom: 0.1rem;
    margin-left: 0.2rem;
    /* padding-bottom: 0.005rem; */
    border-bottom: 1px solid #969896;
    /* background-color:yellow; */
    margin-top: 0.5rem;
  }
  .iphone .yan span{
    font-size: 0.2rem;
    color: black;
    margin-right: 0.08rem;
    
  }
  .iphone .yan span{
    font-size: 0.15rem;
    color: black;
    margin-right: 0.05rem;
  }
  .iphone .yan button{
    border-radius: 0.035rem;
     background-color: #22b185;
  }
  .iphone .yan input{
    width: 1rem;
    border: none;
    height: 0.3rem;
    /* margin-left: 0.5rem; */
  }
  .iphone  h6{
    font-size: 0.1rem;
    /* color: red; */
  }
  /* 登录按钮 */
  .btn{
    width:85% ;
    margin: 0 auto;
    height: 0.8rem;
    margin-bottom: 0.12rem;
    margin-top: 1rem;
  }
  .btn .abc{
    width: 2.7rem;
    height: 0.4rem;
    font-size: 0.15rem;
    margin:0 auto;
margin-left: 0.3rem;
    border-radius: 0.03rem;
     background-color: #22b185;
     border: none;
  }
  p{
    margin-left: 0.5rem;
    color: #999;
    margin-bottom: 0.25rem;
  }

</style>
