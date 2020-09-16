<template>
<div class=xsw>
   <div class=zaq>
  <h3>书籍评论</h3>
  <h4><img src="../../assets/6.png"><p>写评论</p></h4>
  </div>
  <div class=zaq1>
    <div class=zaq2>
      <p>
        <img src="../../assets/7.png" style="margin-left:0.325rem; ">
        <p style="margin-left:0.325rem;">
          我书荒了求好书啊
      </p>
        <img src="../../assets/10.png" style="margin-left:0.325rem; height: 1.25rem; margin-top:0.725rem;">
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
    <input type="button" value="加书架">
    <input type="button" value="开始阅读" style="background-color: #23B382;">
  </div>
</div>
 
</template>

<script>
export default {
name: "Xtops",
data(){
    return{
    
    }
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
    font-size:1.2rem;
    display:flex;
    justify-content:space-between;
    margin-top: 1.25rem;
   }
   .zaq h4{
     display:flex;
   }
   .zaq1{
     width: 90%;
    margin: 0 auto;
    background-color: #F3F6FD;
    border-radius: 10px;
    margin-top: 1.25rem;
   }
   .zaq2{
      width: 88%;
    margin: 0 auto;
    font-size:1.125rem;
    color:#999999;
     display:flex;
     line-height: 2.625rem;
   }
   .zaq3{
     margin-left:1.25rem;
   }
   .zaq4{
      margin-left:1.25rem;
       display:flex;
    justify-content:space-between;
    color:#999999;
   }
   .zaq5{
       display:flex;
   }
   .zaq6{
    
      width: 88%;
    margin: 0 auto;
     display:flex;
    justify-content:space-between;
   }
   .zaq6 input{
     width: 50%;
     height: 3rem; 
     margin-top:0.25rem;
     font-size:1.3rem;
     border:none;
     outline: none;
      border-radius: 10px;
   }
</style>