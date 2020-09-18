<template>
  <div class="box">
      <div class="next">
        <div class="one">
          <ul>
            <li>头像</li>
            <li>
              <div class="head">
                  <img src="../../assets/100.jpg">
              </div>

            </li>
            <li> ＞ </li>
          </ul>
        </div>

        <div class="two">
          <ul>
            <li>昵称</li>
            <li>傻妞</li>
            <li> ＞ </li>
          </ul>
        </div>


        <div class="three">
          <ul>
            <li>手机</li>

            <li> {{ipone}}</li>
            <!-- {{ipone}} -->
          </ul>
        </div>


        <div class="four">
          <ul>
            <li>性别</li>

            <li>
              男
           <!-- <van-overlay :show="show" @click="show = false">
              <div class="wrapper" @click.stop>
                <div class="block">
                  <van-radio-group v-model="radio">
                    <van-radio name="1"> 男</van-radio>
                    <van-radio name="2">女</van-radio>
                  </van-radio-group>
                </div>
              </div>
            </van-overlay> -->
            </li>
            <li>＞</li>
          </ul>
        </div>



        <div class="five" @click="dian">
          <ul>
            <li>修改密码</li>

            <li> ＞ </li>
          </ul>
        </div>






      </div>

  </div>
</template>

<script>
  export default{
    name:"lmy",
    data(){
      return{
        ipone:"",
          // ipone:localStorage.phone.replace(/localStorage.phone.slice(2,6)/,"****")
           // radio: '1',
           // show:false
      }
    },
    methods:{
      dian(){
        this.$router.push("/update");
      }
      // ,
      // sex(){
      //   this.show=true
      // }

    },
    // created(){
    //   axios({
    //     url:"/login",
    //     methods:"get",
    //     // params 地址栏携带的数据
    //     params:{
    //       username:this.msgReg,
    //       yan:this.msgPsd
    //     }
    //   }).then(res=>{
    //     console.log(res);

    //     // localStorage.username="";
    //     // localStorage.username=res.data.username;
    //   })
    // }


    // created(){

    // }
  }

</script>

<style scoped>
  .one{
    width: 93%;
    height: 0.35rem;

    float: right;
  }
  .one .head{
    width: 0.2rem;
    height: 0.2rem;
    background-color: #0077AA;
    border-radius: 50%;
    margin-top: 0.08rem;
  }
  .one ul {
    width: 92%;
    height:  0.35rem;
    display: flex;
    justify-content: space-between;
    line-height:  0.35rem;

  }
  .one ul li{
    font-size: 0.08rem;
    color: #969896;
  }
  .head img{
    width: 0.2rem;
    height: 0.2rem;
    border-radius: 50%;
  }
  .one ul li:nth-child(2){
    margin-left: 2rem;
   /* margin-right: 1.875rem; */
  }

  /* two */
  .two{
    width: 93%;
    height: 0.35rem;

    float: right;
  }
  .two ul {
    width: 92%;
    height:  0.35rem;
    display: flex;
    justify-content: space-between;
    line-height:  0.35rem;

  }
  .two ul li{
    font-size: 0.12rem;
    color: #969896;
  }
  .two ul li:nth-child(2){
    margin-left: 2rem;
  }

  /* three */
  .three{
    width: 93%;
    height: 0.35rem;

    float: right;
  }
  .three ul {
    width: 92%;
    height:  0.35rem;
    display: flex;
    justify-content: space-between;
    line-height:  0.35rem;

  }
  .three ul li{
    font-size: 0.12rem;
    color: #969896;
  }


/* four */
  .four{
    width: 93%;
    height: 0.35rem;

    float: right;
  }
  .four ul {
    width: 92%;
    height:  0.35rem;
    display: flex;
    justify-content: space-between;
    line-height:  0.35rem;

  }
  .four ul li{
    font-size: 0.12rem;
    color: #969896;
  }
  .four ul li:nth-child(2){
    margin-left: 2rem;
  }

  /* five */
  .five{
    width: 93%;
    height: 0.35rem;

    float: right;
  }
  .five ul {
    width: 92%;
    height:  0.35rem;
    display: flex;
    justify-content: space-between;
    line-height:  0.35rem;

  }
  .five ul li{
    font-size: 0.12rem;
    color: #969896;
  }


/* 男女插件 */


</style>
