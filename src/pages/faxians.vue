<template>
  <div class="box">
    <mybanner :type="type" />
    <faxian />
    <good />
    <list />
    <interest :type="type"></interest>
    <foot class="bot-box" />
  </div>
</template>

<script>
import mybanner from "../components/index/mybanner";
import faxian from "../components/index/faxian";
import list from "../components/index/list";
import good from "../components/index/good";
import interest from "../components/index/interest";
import foot from "../components/index/foot";

export default {
  name: "faxians",
  data() {
    return {
      type: "",
    };
  },

  components: {
    mybanner,
    faxian,
    good,
    list,
    interest,
    foot,
  },
  created() {
    console.log(this.$route.params.type);
    this.type = this.$route.params.type;
  },
};
</script>

<style scoped>
.box {
  padding-top: 15px;
  padding-bottom: 60px;
}
.bot-box {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>