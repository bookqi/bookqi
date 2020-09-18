<!--
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: 范钊
 * @Date: 2020-09-18 01:55:13
 * @LastEditors: 范钊
 * @LastEditTime: 2020-09-18 06:40:05
-->
<template>
  <div class="box">
    <div class="update">
      <ul>
        <li>密码</li>
        <li>
          <input type="text" placeholder="设置新的登录密码" v-model="mima">
        </li>
        <li>123</li>
      </ul>
    </div>
    <span>请输入8-16位字母与数字</span>


    <div class="suc" @click="finsh">
      完成
    </div>
  </div>
</template>

<script>
  export default{
    name:"lupdate",
    data(){
      return{
        mima:"",
        up:""
      }
    },
    created(){
       this.up=localStorage.getItem("phone");
       console.log(typeof this.up)
    },
    methods:{
      finsh(){
        this.$axios({
           url:"/user/update",
           params:{
             phone:this.up,
             upass:this.mima,

           },
        }).then(res=>{
          console.log(res);
          if(res.data.code==0){
             this.$router.push("set")
               console.log(this.up);
          }
          else{
            Toast.fail('修改失败');
          }
        })
      }
    }
  }
</script>

<style scoped>
   .update{
    width: 85%;
    height: 0.25rem;
    /* background-color: #0077AA; */
    margin-top: 0.25rem;
    margin: 0 auto;
    border-bottom: 1px solid #999;
  }
  .update ul{
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height:0.25rem ;
  }
  .update ul li input{
    display: block;
    height: 0.18rem;
    border: none;
  }
  span{
    display: block;
    margin-top: 0.1rem;
    margin-left:0.9rem ;
  }
 .suc{
      width: 80%;
      height: 0.25rem;
      margin: 0 auto;
      background-color: #22b185;
      border-radius: 0.07rem;
      margin-top: 0.41rem;
      line-height: 0.25rem;
      text-align: center;
      color: white;
      font-size: 0.125rem;
    }
</style>
