<!--
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: 范钊
 * @Date: 2020-09-18 02:05:32
 * @LastEditors: 范钊
 * @LastEditTime: 2020-09-18 05:13:38
-->
<template>
  <div class="inter">
    <div class="faxian">
      <h4 style="border-left: 4px solid #4fdcc9;padding-left:0.05rem;margin-bottom: 0.1rem;">今日必读</h4>
      <p>
        换一换
        <span class="iconfont icon-jiazai"></span>
      </p>
    </div>
    <ul class="inter-top">
      <router-link tag="li" :to="'/Xiangqing/'+fax.b_id" v-for="(fax,index) in faxs" :key="index">
          <img :src="fax.b_picture" />
          <h5>{{fax.b_name}}</h5>
          <p>{{fax.b_author}}</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "faxian",
  data() {
    return {
      faxs: [],
    };
  },
  created() {
    // let str = "http://localhost:3000/faxian";
    let str = "/api/books/all11/2";
    this.$axios
      .get(str)
      .then((res) => {
        res.data.forEach((item, index) => {
          if (index < 4) {
            this.faxs.push(item);
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.inter {
  width: 100%;
  padding-left: 0.225rem;
  padding-right: 0.225rem;
  box-sizing: border-box;
  background-color: #ffffff;
  padding-top: 0.1rem;
  margin-top: 0.1rem;
}
.faxian {
  display: flex;
  justify-content: space-between;
}
.inter h5 {
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.inter-top {
  display: flex;
  flex-wrap: wrap;

  padding-bottom: 0.2rem;
}
.inter-top img {
  width: 100%;
  height: 1rem;
  margin-right: 0.15rem;
}
.inter-top li {
  width: 23%;
  margin-left: 0.06rem;
  padding-bottom: 0.1rem;
}
.inter-top li h5 {
  font-size: 12px;
  color: #3d3d3d;
}
.inter-top li p {
  font-size: 12px;
  color: #abaaaf;
}
</style>