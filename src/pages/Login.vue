<template>
    <div class="box">
      <llogintop></llogintop>
      <liphone></liphone>
      <!-- <ltwo></ltwo> -->
      <!-- <laccount></laccount> -->
      <lthree></lthree>
    </div>


</template>

<script>
	import llogintop from "../components/logincom/llogintop.vue"
  import liphone from "../components/logincom/liphone.vue"
  // import ltwo from "../components/logincom/ltwo.vue"
  // import laccount from "../components/logincom/laccount.vue"
  import lthree from "../components/logincom/lthree.vue"
	export default{
		name:"Login",
		data(){
			return{

			}
		},
		components:{
			llogintop,liphone,lthree
		}
	}

</script>

<style scoped>

</style>
