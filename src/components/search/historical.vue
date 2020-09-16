<!--
 * @Descripttion: 搜索页面
 * @version: v1.0.0
 * @Author: 范钊
 * @Date: 2020-09-12 10:05:41
 * @LastEditors: 范钊
 * @LastEditTime: 2020-09-15 14:45:52
-->
<template>
  <div class="box">
    <p class="lishitop">
      <i>搜索历史</i>
      <i @click="clear">清空</i>
    </p>
    <ul class="Oul">
      <li class="Oli" v-for="(Record,index) in Records" :key="index">{{Record}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name:"historical",
  data(){
    return{
      Records:["三点水","代码是你的","大梅沙你到哪","打算看你","没到","hello"]
    }
  },
  methods:{
    clear(){
      this.Records="";
    }
  }
}
</script>

<style scoped>
  .box{
    width: 100%;
  }
  .lishitop{
    width: 94%;
    display: flex;
    justify-content:space-between;
    margin: 0 auto;
  }
  .lishitop i{
    font-style:normal;
  }
  .Oul{
    width: 100%;
    margin-top:0.15rem;
    overflow: hidden;
  }
  .Oli{
    max-width: 0.9rem;
    height: 0.25rem;
    line-height: 0.25rem;
    border-radius: 0.1rem;
    text-align: center;
    margin:0.1rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    float: left;
    background:#f4f7fc;
  }
</style>