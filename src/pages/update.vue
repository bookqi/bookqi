<template>
  <div class="box">
    <lltop></lltop>
    <lupdate></lupdate>
     
  </div>

</template>

<script>
  import lltop from "../components/updatecom/lltop.vue"
  import lupdate from "../components/updatecom/lupdate.vue"


  export default{
  	name:"update",
  	data(){
  		return{

  		}
  	},
  	components:{
  		lltop,lupdate
  	}
  }
</script>

<style scoped>
</style>
