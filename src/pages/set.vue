<template>
  <div class="box">
    <ltop></ltop>
    <lmy></lmy>
    <lback></lback>

  </div>
</template>

<script>
  import ltop from "../components/setcom/ltop.vue"
  import lmy from "../components/setcom/lmy.vue"
  import lback from "../components/setcom/lback.vue"

  export default{
  	name:"set",
  	data(){
  		return{

  		}
  	},
  	components:{
  		ltop,lmy,lback
  	}
  }
</script>

<style scoped>
  /* .box{
    background-color: ;
  } */
</style>
