<!--
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: 范钊
 * @Date: 2020-09-18 01:21:39
 * @LastEditors: 范钊
 * @LastEditTime: 2020-09-18 04:58:21
-->
<template>
    <div class="box">
        <p v-for="(value,key) in books" :key="key">{{value.s_name}}</p>
        
    </div>
</template>

<script>
export default {
    name: "yuedu",
    data(){
        return {
            books:{}
        }
    },
      created(){
        this.$axios
        .get(" /api/books/all12/2")
        .then((res)=>{
            console.log(res.data);
            this.books=res.data
        })
        .catch((err)=>{
            console.log(err);
        })
    }
}
</script>

<style scoped>
.box{
    background: #ebe3e3;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-left:0.08rem;
    padding-right:0.08rem;
}
p{
    font-size:0.103rem;
    color: #757373;
    border-bottom:1px solid #999999;
    line-height:0.24rem;
     box-sizing: border-box;
}


</style>