<template>
  <div>
    <itop class="top-box" />
    <div class="center-box">
      <noveltop type="1" :type2="hot" />
      <novel type="2" :type2="man" />
      <interest :type="type" />
    </div>
    <foot class="bot-box" />
  </div>
</template>

<script>
import itop from "../components/index/itop";
import noveltop from "../components/index/noveltop";
import novel from "../components/index/novel";
// import quase from "../components/index/quase";
import interest from "../components/index/interest";
import foot from "../components/index/foot";
export default {
  name: "index",
  data() {
    return {
      hot: "热门",
      man: "男生爆款",
      type: "",
    };
  },
  components: {
    itop,
    noveltop,
    novel,
    interest,
    foot,
  },
  created() {
    console.log(this.$route.params.type);
    this.type = this.$route.params.type;
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
body {
  background-color: #f8f8f8;
}
.top-box {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 100;
}
.center-box {
  margin-top: 0.5rem;
  margin-bottom: 0.7rem;
}

.bot-box {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>