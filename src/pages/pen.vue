<template>
  <div>
    <van-tabs :swipeable="sdrdtufygiu">
      <van-tab title="选项 1">
        <pppp />
      </van-tab>
      <van-tab title="选项 2">
        <goodsp />
      </van-tab>
      <van-tab title="选项 3">
        <goodsp />
      </van-tab>
    </van-tabs>
    <goodsp />
  </div>
</template>

<script>
import pppp from "../components/index/pppp";
import goodsp from "../components/index/goodsp";
export default {
  name: "pen",
  data() {
    return {
      sdrdtufygiu: true,
    };
  },
  components: {
    pppp,
    goodsp,
  },
};
</script>

<style scoped>
</style>