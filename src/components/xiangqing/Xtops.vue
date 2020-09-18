<template>
<div class=xsw>
   <div class=zaq>
  <h3>书籍评论</h3>
  <h4><img src="../../assets/6.png"><p>写评论</p></h4>
  </div>
  <div class=zaq1>
    <div class=zaq2>
      <p>
        <img src="../../assets/7.png" style="margin-left:0.026rem; ">
        <p style="margin-left:0.026rem;">
          我书荒了求好书啊
      </p>
        <img src="../../assets/10.png" style="margin-left:0.026rem; height: 0.1rem; margin-top:0.058rem;">
    </div>
    <div class=zaq3>
      
        看了简介，让我眼前一亮，看了内容让我无法自拔，简直爱不释手。然后看了还想看，完全被你的小说给吸引了...
    </div>
    <div class=zaq4>
      <p>9月7日</p>
      <div class=zaq5>
        <img src="../../assets/8.png">
        <p>0</p>
        <img src="../../assets/9.png">
        <p>0</p>
      </div>
    </div>
  </div>
  <div class=zaq6>
    <input type="button" value="加书架" @click="add"> 

    <router-link :to="'/yuedu/'+this.iddata" tag="div" class="divbox">
        <input type="button" value="开始阅读" style="background-color: #23B382;">
    </router-link>
  </div>
</div>
 
</template>

<script>
export default {
props: ["iddata"],
name: "Xtops",
data(){
    return{
      books: []
    }
},
methods:{
  add(){

  }
},
created() {
  console.log("xtop",this.iddata)
  // console.log("asihdi9ahda9ijd",this.iddata)
  // let str="/api/books/all?"+this.iddata
    // this.$axios
    // .get(str)
    // .then((res) =>{
    //     console.log("asihfiahsf",res.data.data)
    //     this.books=res.data.data;
    // })
    // .catch((err) => {
    //     console.log(err);
    // })
}
}
</script>

<style scoped>
  .xsw{
    width: 100%;
    
  }
   .zaq {
    width: 90%;
    margin: 0 auto;
    font-size:0.096rem;
    display:flex;
    justify-content:space-between;
    margin-top: 0.1rem;
    box-sizing: border-box;
   }
   .zaq h4{
     display:flex;
      box-sizing: border-box;
   }
   .zaq1{
     width: 90%;
    margin: 0 auto;
    background-color: #F3F6FD;
    border-radius: 10px;
    margin-top: 0.1rem;
     box-sizing: border-box;
   }
   .zaq2{
      width: 88%;
    margin: 0 auto;
    font-size:0.09rem;
    color:#999999;
     display:flex;
     line-height: 0.21rem;
      box-sizing: border-box;
   }
   .zaq3{
     margin-left:0.1rem;
      box-sizing: border-box;
   }
   .zaq4{
      margin-left:0.1rem;
       display:flex;
    justify-content:space-between;
    color:#999999;
     box-sizing: border-box;
   }
   .zaq5{
       display:flex;
        box-sizing: border-box;
   }
   .zaq6{
      width: 88%;
    margin: 0 auto;
     display:flex;
    justify-content:space-between;
     box-sizing: border-box;
     margin-top:0.15rem;
   }
   .divbox{
     width:100%;
      box-sizing: border-box;
   }
   .zaq6 input{
     width: 100%;
     height: 0.24rem; 
     margin-top:0.02rem;
     font-size:0.104rem;
     border:none;
     outline: none;
      border-radius: 10px;
      margin:0 auto;
       box-sizing: border-box;
   }
   a{
     font-size:0.104rem;
     width:100%;
     color: #000;
      box-sizing: border-box;
   }
</style>