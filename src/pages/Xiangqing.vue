<!--
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: 范钊
 * @Date: 2020-09-18 01:21:39
 * @LastEditors: 范钊
 * @LastEditTime: 2020-09-18 05:39:26
-->
<template>
<div>
    <Xtop :iddata="id"></Xtop>
    <Xtops :iddata="id"></Xtops>
</div>
</template>

<script>
import Xtop from "../components/xiangqing/Xtop"
import Xtops from "../components/xiangqing/Xtops"
export default {
name: "Xiangqing",
data(){
    return{
        id:""
    }
},
components: {
    Xtop,Xtops
},
created(){
    this.id=this.$route.params.id;
    console.log(this.id)
}
}
</script>

<style scoped>

</style>