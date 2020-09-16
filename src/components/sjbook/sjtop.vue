<!--
 * @Descripttion: 书架头部
 * @version: v1.0.0
 * @Author: 范钊
 * @Date: 2020-09-12 10:05:41
 * @LastEditors: 范钊
 * @LastEditTime: 2020-09-14 15:21:07
-->
<template>
  <div class="box">
    <div class="boxtop">
      <span class="spantext">让阅读成为习惯</span>
      <span class="iconfont icon-sousuo"></span>
      <span class="iconfont icon-19" @click="gengduo"></span>
    </div>
   <ul class="more" v-show="isShow">
     <li>
       <span class="iconfont icon-gengxinshijian"></span>&nbsp;&nbsp;更新连载书
     </li>
     <li>
       <span class="iconfont icon-download"></span>&nbsp;&nbsp;下载管理
     </li> 
      <li>
       <span class="iconfont icon-daoru"></span>&nbsp;&nbsp;本地导入
     </li> 
     <li>
       <span class="iconfont icon-wifi"></span>&nbsp;&nbsp;wifi传书
     </li>
     <li>
       <span class="iconfont icon-bianji"></span>&nbsp;&nbsp;书籍管理
     </li>
   </ul>
  </div>
</template>

<script>
export default {
  name:"sjtop",
  data(){
    return{
      isShow:false,
    }
  },
  methods:{
    gengduo(){
      this.isShow =!this.isShow
    }
  }
}
</script>

<style scoped>
  .box{
    width: 100%;
    position: relative;
  }
  .boxtop{
    width: 94%;
    margin: 0 auto;
    display:flex;
    align-items: center;
    justify-content:space-between;
  }
  .spantext {
    display: block;
    width:70%;
    font-size: 0.24rem;
    font-weight: bold;
  }
  .icon-sousuo{
    font-size:0.2rem;
  }
  .icon-19{
   font-size:0.25rem;
  }
  .more{
    position:absolute;
    right:0.1rem;
    top: 0.35rem;
    background:white;
    font-size: 0.15rem;
  }
  .more li{
    height: 0.5rem;
    line-height: 0.5rem;
    list-style: none;
  }
</style>