<!--
 * @Descripttion: 搜索页面
 * @version: v1.0.0
 * @Author: 范钊
 * @Date: 2020-09-12 10:05:41
 * @LastEditors: 范钊
 * @LastEditTime: 2020-09-15 21:30:38
-->
<template>
  <div class="box">
    <div class="searchBox">
      <input type="search" :value="valuetext" :placeholder="searchtext">&nbsp;
      <span @click="quxiao">取消</span>
      <span @click="sousuo" class="iconfont icon-sousuo"></span>
    </div>
  </div>
</template>
<script>
export default {
  name:"searchtop",
  data(){
    return{
      valuetext:'',
      searchtext:"文字"
    }
  },
  methods:{
    sousuo(){
      this.$emit("fun",this.valuetext);
      this.$router.push("/searchtop")
    },
    quxiao(){
      this.$router.go(-1)
    }
  },
}
</script>

<style scoped>
.box{
  width:100%;
  height: 0.9rem;
  background: white;
}
.searchBox{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center
}
.searchBox input{
  width: 80%;
  height: 0.4rem;
  border-radius: 20px;
  position: relative;
  background:#eaecf1;
  border:none;
  text-indent: 45px;
}
.icon-sousuo{
  font-size: 22px;
  position:absolute;
  top:33px;
  left:30px;
}
</style>