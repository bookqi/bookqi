<template>
  <div>
    <itop class="top-box" />
    <div class="center-box">
      <mybanner :type="type" />
      <required :type="type" />
      <requier :type="type" />
      <soaring :type="type" />
      <interest :type="type" />
    </div>
    <foot class="bot-box" />
  </div>
</template>

<script>
import itop from "../components/index/itop";
import mybanner from "../components/index/mybanner";
import required from "../components/index/required";
import requier from "../components/index/requier";
import soaring from "../components/index/soaring";
import interest from "../components/index/interest";
import foot from "../components/index/foot";
export default {
  name: "weman",
  data() {
    return {
      type: "",
    };
  },
  components: {
    itop,
    mybanner,
    required,
    requier,
    foot,
    soaring,
    interest,
  },
  created() {
    console.log(this.$route.params.type);
    this.type = this.$route.params.type;
  },
};
</script>

<style scoped>
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