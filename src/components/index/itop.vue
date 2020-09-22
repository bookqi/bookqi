<template>
  <div>
    <div class="top">
      <ul>
        <router-link class="Oli" tag="li" :to="'/index/'+'1'">新人必读</router-link>
        <router-link class="Oli" tag="li" :to="'/man/'+'2'">男人</router-link>
        <router-link class="Oli" tag="li" :to="'/weman/'+'3'">女人</router-link>
        <router-link class="Oli" tag="li" :to="'/tuijian/'+'4'">推荐</router-link>
      </ul>
      <span class="iconfont icon-chazhao"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "itop",
  data() {
    return {};
  },
};
</script>

<style scoped>
body {
  background-color: #f8f8f8;
}
.Oli.router-link-active {
  color: black;
}
/* 头部 */
.top {
  width: 100%;
  height: 0.5rem;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  line-height: 0.5rem;
  padding-left: 0.225rem;
  padding-right: 0.225rem;
  box-sizing: border-box;
}
.top ul {
  width: 80%;
}
.Oli {
  margin-right: 0.1rem;
  float: left;
  color: #abaaaf;
}
</style>