<template>
  <div class="box">
    <!-- <div class="suc" @click="gai">
      完成
    </div> -->
  </div>
</template>

<script>
  export default{
    name:"lsuccess",
    data(){
      return{

      }
    },
	// methods:{
	// 	gai(){
	// 		let up=localStorage.getItem("phone");

	// 		axios({
	// 		  url:"/user/updata",

	// 		  // params 地址栏携带的数据
	// 		  params:{
	// 		    phone:this.up,
	// 		    // checkSmsCode:this.msgPsd
	// 		  }
	// 		}).then(res=>{
	// 		  console.log(res);
	// 		  if(res.data.code==0){//成功的时候返回0
	// 		    localStorage.phone="";
	// 		    localStorage.phone=res.data.data;
	// 		    this.$router.push("/mine")
	// 		    // localStorage.code="";
	// 		    // localStorage.code=res.data.code;
	// 		  }
	// 		  // else{
	// 		  //   "用户密码不正确"
	// 		  // }

	// 		})
		}
	}
  }
</script>

<style scoped>
  /*  .suc{
      width: 80%;
      height: 3.125rem;
      margin: 0 auto;
      background-color: #22b185;
      border-radius: 0.875rem;
      margin-top: 5.125rem;
      line-height: 3.125rem;
      text-align: center;
      color: white;
      font-size: 1.5rem;
    } */
</style>
