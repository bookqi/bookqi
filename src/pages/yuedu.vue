<!--
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: 范钊
 * @Date: 2020-09-18 01:21:39
 * @LastEditors: 范钊
 * @LastEditTime: 2020-09-18 06:07:20
-->
<template>
    <div class="box">
        <div v-for="(value,key) in du" :key="key">
            <p class="aqwe">{{value.s_name}}</p>
            <p >{{value.s_context}}</p>
        </div>
        
    </div>
</template>

<script>
export default {
    name: "yuedu",
    data(){
        return {
            du:{},
            shuid:""
        }
    },
      created(){
        this.shuid=this.$route.params.shuid;
        console.log("faufhai",this.shuid);
        let str = "/api/books/all12/"+this.shuid
        this.$axios
        .get(str)
        .then((res)=>{
            console.log(res.data);
            this.du=res.data;
        })
        .catch((err)=>{
            console.log(err);
        })
    }
}
</script>

<style scoped>
p{
    font-size:0.104rem;
    line-height:0.24rem;
    color:#000;  
     box-sizing: border-box; 
}
.box{
    background: #f7e4916c;
    padding-left:0.12rem;
    padding-right:0.12rem;
     padding-top:0.08rem;
      box-sizing: border-box;
}
.aqwe{
    color:#000;
    font-weight:bold;
     box-sizing: border-box;
}
</style>