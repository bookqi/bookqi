<!--
 * @Descripttion: 搜索结果
 * @version: v1.0.0
 * @Author: 范钊
 * @Date: 2020-09-12 10:05:41
 * @LastEditors: 范钊
 * @LastEditTime: 2020-09-17 14:22:44
-->
<template>
  <div class="box">
    <ul class="Oul">
      <li class="Oli" v-for="(sourelut,index) in soureluts" :key="index">
        <div class="imgBox">
          <img :src="sourelut">
        </div>
        <div class="xinxi">
          <p class="name">{{sourelut.b_name}}</p>
          <p class="zuozhe">{{sourelut.b_author}}</p>
          <div class="jianjie">{{sourelut.b_content}}</div>
          <div class="biaoqian">
            <span class="lianzai">&nbsp;连载&nbsp;</span>
            <span class="lianzai">&nbsp;401万&nbsp;</span>
            <span class="lianzai">&nbsp;现代言情&nbsp;</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name:"sousuolist",
  props:["valuedata","valuelishi"],
  data(){
    return{
      soureluts:[],
    }
  },
  created(){
    console.log(this.valuedata)
    this.$axios
    .get("http://localhost:3000/sousuo",{
      params:{
        "name":this.valuedata,
        "name":this.valuelishi
      }
    })
    // .get("/api/books/all2",{
    //   params:{
    //     b_name:this.valuedata,
    //     b_name:this.valuelishi
    //   }
    // })
    .then((res)=>{
      // console.log(res.data.data);
      this.soureluts= res.data.data;
    })
    .catch((err)=>{
      console.log(err);
    })
  }
}
</script>

<style scoped>
.box{
  width:94%;
  margin:0 auto;
}
.Oul{
  width: 100%;
}
.Oli{
  margin-top: 0.2rem;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}
.imgBox{
  width: 25%;
  height:1.2rem;
  float: left;
}
.imgBox img{
  width: 100%;
  height: 100%;
}
.xinxi{
  width: 68%;
  float: left;
  margin-left: 0.2rem;
}
.name{
  color: #F07C67;
  font-size: 0.18rem;
  margin-top:0.02rem;
}
.zuozhe{
  color: #B1B0B5;
  margin-top:0.04rem;
  font-size: 0.14rem;
}
.jianjie{
  width: 100%;
  height: 0.4rem;
  color: #B1B0B5;
  overflow: hidden;
  display: -webkit-box;    
  -webkit-box-orient: vertical;    
  -webkit-line-clamp: 2;    
  overflow: hidden;
  font-size: 0.14rem;
  margin-top:0.06rem;
}
.biaoqian{
  font-size: 0.12rem;
  margin-top:0.04rem;
  color: #B1B0B5;
}
.lianzai{
  border: 1px solid #B1B0B5;
}
</style>