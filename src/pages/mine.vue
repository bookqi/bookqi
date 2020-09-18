<!--
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: 范钊
 * @Date: 2020-09-18 01:55:27
 * @LastEditors: 范钊
 * @LastEditTime: 2020-09-18 02:29:49
-->
<template>
  <div class="box">
    <lmine></lmine>
    <llr v-show="show"></llr>
     <llr1 v-show="show1"></llr1>
    <linform></linform>
    <lselect></lselect>
    <foot class="foot"></foot>
  </div>
</template>

<script>
  import lmine from "../components/minecom/lmine.vue"
  import llr1 from "../components/minecom/llr1.vue"
  import llr from "../components/minecom/llr.vue"
  import linform from "../components/minecom/linform.vue"
  import lselect from "../components/minecom/lselect.vue"
  import foot from "../components/index/foot.vue"

  export default{
  	name:"Login",
  	data(){
  		return{
          show:true,
          show1:false
  		}
  	},
  	components:{
  		lmine,llr,linform,lselect,llr1,foot
  	},
    created(){
      // 判断localstronge是否有值，然后切换show
      if(localStorage.getItem("phone")==""||localStorage.getItem("phone")==undefined){
			this.show=true;
			this.show1=false;
      }else{
		  
      
      this.show=false;
      this.show1=true;
	  }
    }
  }
</script>

<style scoped>
  .box{
    background-color: #f7f7f7;
    position: relative;
  }
  .foot{
    position: fixed;
    bottom: 0;
    left: 0;
  }
</style>
