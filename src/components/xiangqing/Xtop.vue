<template>
  <div class=xqy>
      <div class=xqy1>
          &lt;
          <span>
               <img src="../../assets/3.png">
               <img src="../../assets/2.png">
               
          </span>
      </div>
      <template v-if="xiangqing[0]">
      <div class="xqy2">
          <img :src="xiangqing[0].imgs">
          <div>
              <h3>{{xiangqing[0].age}}</h3>
              <p>{{xiangqing[0].names}}<span style="color:#999999">></span></p>
              <p style="color:#999999">{{xiangqing[0].lty}}<span>|</span>{{xiangqing[0].ltys}}</p>
          </div>
      </div>
      <div class="xqy3">
          <ul>
              <li>
                  <h4>{{xiangqing[0].score}}<span><img src="../../assets/5.png"></span></h4>
                  <p>小编评分></p>
              </li>
              <li>
                  <h4>{{xiangqing[0].reab}}</h4>
                  <p>阅读过</p>
              </li>
              <li>
                   <h4>{{xiangqing[0].moods}}</h4>
                  <p>人气值</p>
              </li>
              <li>
                   <h4>{{xiangqing[0].words}}</h4>
                  <p>字数</p>
              </li>
          </ul>
      </div>
      <div class="xqy4">
          <p>{{xiangqing[0].wordage}}</p>
      </div>
      <div class="xqy5">
          <div>
              <h4 style="font-size:1.5rem">目录</h4>
          <span style="color:#999999;  margin-top:0.3125rem;margin-left:0.3875rem;">{{xiangqing[0].aqw}}</span>
          </div>
          <p style="color:#999999; margin-top:0.3125rem;" >{{xiangqing[0].app}}></p>
      </div>
      </template>
  </div>
</template>

<script>
export default {
name: "Xtop",
    data(){
        return{
           xiangqing:[] 
        }
    },
    created(){
        this.$axios
        .get("http://localhost:3000/books")
        .then((res)=>{
            console.log(res.data);
            this.xiangqing=res.data;
        })
        .catch((err)=>{
            console.log(err);
        })
    }
}
</script>

<style scoped>
    .xqy{
        width: 100%;
    }
    .xqy1{
        width: 90%;
        margin: 0 auto;
        font-size:40px;
        display:flex;
        justify-content:space-between;
    }
    .xqy2{
         width: 90%;
        margin: 0 auto;
        display:flex;
        margin-top:1rem;
    }
    .xqy2 div{
      font-size:1.25rem;
      margin-left: 1.125rem;
      line-height: 2rem;
    } 
    .xqy3 {
         width: 90%;
        margin: 0 auto;
    }
    .xqy3 ul{
       display:flex;
        justify-content:space-around;
        list-style: none; 
        margin-top:1rem; 
        font-size:1.3rem
    }
     .xqy3 ul li p{
         color:#999;
         font-size:1rem
     }

     .xqy4{
        width: 90%;
        margin: 0 auto;
        margin-top:1rem;
        font-size:1.2rem;
        

     }
     .xqy5{
         width: 90%;
        margin: 0 auto;
        display:flex;
        justify-content:space-between;
        margin-top:1rem;
        font-size:1.125rem
    }
    .xqy5 div {
         display:flex;
    }
</style>