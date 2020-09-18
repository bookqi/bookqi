<template>
  <div class=xqy>
      <div class=xqy1>
          <span @click="back">&lt;</span>
          <span>
               <img src="../../assets/3.png">
               <img src="../../assets/2.png">
          </span>
      </div>
      <template v-if="xiangqing">
      <div class="xqy2">
          <img :src="xiangqing.b_picture">
          <div>
              <h3>{{xiangqing.b_name}}</h3>
              <p>{{xiangqing.b_author}}<span style="color:#999999">></span></p>
              <p style="color:#999999">{{xiangqing.type.t_name}}<span>|</span>{{xiangqing.b_schedule}}</p>
          </div>
      </div>
      <div class="xqy3">
          <ul>
              <li>
                  <h4>{{xiangqing.b_score}}<span><img src="../../assets/5.png"></span></h4>
                  <p>小编评分></p>
              </li>
              <li>
                  <h4>{{xiangqing.b_read}}</h4>
                  <p>阅读过</p>
              </li>
              <li>
                   <h4>{{xiangqing.b_popularity}}</h4>
                  <p>人气值</p>
              </li>
              <li>
                   <h4>{{xiangqing.b_number}}</h4>
                  <p>字数</p>
              </li>
          </ul>
      </div>
      <div class="xqy4">
          <p>{{xiangqing.b_content}}</p>
      </div>
      <div class="xqy5">
          <div>
              <router-link to="/mulu"><h4 style="font-size:0.14rem">目录</h4> </router-link>
          <span style="color:#999999;  margin-top:0.025rem;margin-left:0.31rem;">{{xiangqing.s_name}}</span>
          </div>
          <p style="color:#999999; margin-top:0.025rem;" >{{xiangqing.app}}></p>
      </div>
      </template>
  </div>
</template>

<script>
export default {
props: ["iddata"],
name: "Xtop",
    data(){
        return{
           xiangqing:[] 
        }
    },
    created(){
    let str="/api/books/all3/"+this.iddata
    this.$axios
    .get(str)
    .then((res) =>{
        console.log("asihfiahsf",res.data)
        this.xiangqing=res.data;
    })
    .catch((err) => {
        console.log(err);
    })
    },
    methods:{
        back(){
            this.$router.go(-1)
        }
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
        font-size:3.2px;
        display:flex;
        justify-content:space-between;
    }
    .xqy2{
        width: 90%;
        margin: 0 auto;
        display:flex;
        margin-top:0.08rem;
    }
    .xqy2 img{
        width: 30%;
        height: 80%;
    }
    .xqy2 div{
      font-size:0.1rem;
      margin-left: 0.09rem;
      line-height: 0.16rem;
    } 
    .xqy3 {
         width: 90%;
        margin: 0 auto;
    }
    .xqy3 ul{
       display:flex;
        justify-content:space-around;
        list-style: none; 
        margin-top:0.08rem; 
        font-size:0.104rem
    }
     .xqy3 ul li p{
         color:#999;
         font-size:0.08rem
     }

     .xqy4{
        width: 90%;
        margin: 0 auto;
        margin-top:0.08rem;
        font-size:0.096rem;
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;

     }
     .xqy5{
         width: 90%;
        margin: 0 auto;
        display:flex;
        justify-content:space-between;
        margin-top:0.08rem;
        font-size:0.09rem
    }
    .xqy5 div {
         display:flex;
    }
</style>