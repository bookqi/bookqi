<!--
 * @Descripttion: 热搜
 * @version: v1.0.0
 * @Author: 范钊
 * @Date: 2020-09-12 10:05:41
 * @LastEditors: 范钊
 * @LastEditTime: 2020-09-18 07:22:18
-->
<template>
  <div class="box">
    <p class="rssj">热搜书籍</p>
    <ul class="Oul">
      <router-link tag="li" class="Oli" v-for="(hot,index) in hots" :key="index" :to="'/Xiangqing/'+hot.b_id">
          <i class="xuhao">{{hot.b_id}}</i>
          <div class="imgBox">
            <img class="Oimg" :src="hot.b_picture" alt="" srcset="">
          </div>
          <div class="cont">
            <p class="sname">{{hot.b_name}}</p><span class="remen">热门</span>
            <p class="jianj">{{hot.b_content}}</p>
          </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name:"resou",
  data(){
    return{
      hots:[]
    }
  },
  created(){
    this.$axios
    .get("/api/books/all")
    .then((res)=>{
      res.data.data.forEach((item,index)=>{
        if(index<4){
          this.hots.push(item);
        }
      })
    })
    .catch((err)=>{
      console.log(err);
    })
  }
}
</script>

<style scoped>
  .box{
    width: 100%;
  }
  .rssj{
    color: #dadada;
    margin-left:10px;
  }
  .Oul{
    width: 94%;
    margin: 0.2rem auto;
    /* border: 1px solid gray; */
  }
  .Oli{
    width: 100%;
    height: 1rem;
    display: flex;
    margin: 0.1rem 0rem;
  }
  .xuhao{
    width: 0.4rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color:#e3654f;
    font-size: 0.25rem;
    font-weight: bold;
  }
  .imgBox{
    width: 20%;
    height: 100%;
    border-radius:5px;
  }
  .Oimg{
    width: 100%;
    height: 100%;
    border-radius:5px;
  }
  .cont{
    margin-left: 5%;
    width:62% ;
  }
  .sname{
    display: inline-block;
    margin-top: 0.2rem;
    color:#626262;
  }
  .jianj{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-top: 0.2rem;
    color:#cdccd1;
  }
  .remen{
    margin-left:0.1rem;
    width: 0.4rem;
    height: 0.18rem;
    font-size:14px;
    border-radius:5px;
    background:#ffe3d6;
    color:#de8a7e;
  }
</style>