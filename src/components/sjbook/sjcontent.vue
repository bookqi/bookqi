<!--
 * @Descripttion: 书架头部
 * @version: v1.0.0
 * @Author: 范钊
 * @Date: 2020-09-12 10:05:41
 * @LastEditors: 范钊
 * @LastEditTime: 2020-09-15 19:17:01
-->
<template>
  <div class="box">
    <ul class="Oul">
      <li v-for="(book,index) in books" :key="index">
        <div class="bgc" :style="{backgroundImage:'url(' + book.bgc+ ')'}">
          <!-- <p class="tuijian">推荐</p> -->
        </div>
        <p class="bookName">{{book.name}}</p>
        <p class="jindu">{{book.speedProgress}}</p>
      </li>
      <div class="addsj">+</div>
    </ul>
  </div>
</template>
<script>
export default {
  name:"sjcontent",
  data(){
    return{
      books:[]
    }
  },
  methods:{
   
  },
  created(){
    this.$axios.get("http://localhost:3000/bookshelf")
    // this.$axios.get("/api/bookshelf")
    .then((res)=>{
      console.log(res.data);
      this.books=res.data;
    })
    .catch((err)=>{
      console.log(err)
    })
  }
}
</script>

<style scoped>
.box{
  background: white;
  width:94%;
  margin: 0 auto;
  border-radius: 10px;
  padding:0.1rem;
  box-sizing: border-box;
}
.Oul{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.Oul li{
  width: 1rem;
  margin:0.1rem 0.05rem;
  border-radius: 5px;
}
.bgc{
  width: 100%;
  height: 1.5rem;
  background-size:100% 100%;
  border-radius: 5px;
  position: relative;
}
.bookName{
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: bold;
}
.jindu{
  width: 100%;
  color:gray;
  font-size:14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.tuijian{
  width: 0.28rem;
  height: 0.15rem;
  background: #121212;
  color:#848484;
  font-size: 12px;
  line-height: 0.15rem;
  text-align: center;
  border-radius: 3px;
  position:absolute;
  left: 5px;
  bottom:5px;
}
.addsj{
  width: 1rem;
  margin:0.1rem 0.05rem;
  border-radius: 5px;
  background:#f7f7f7;
  font-size: 0.45rem;
  display:flex;
  align-items: center;
  justify-content:center;
  color: #dddddd;
}
</style>