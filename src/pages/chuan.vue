<template>
  <div>
    <chuancai :canshu="aaa" @myclicks="fun1" @myset="fun2" />
    <ents :que="bbb" :asc="str" />
  </div>
</template>

<script>
import chuancai from "../components/index/chuancai";
import ents from "../components/index/ents";
export default {
  name: "chuan",
  data() {
    return {
      aaa: "我是参数",
      bbb: "xsdzfxgchvjkhgfzd",
      str: "",
    };
  },
  methods: {
    fun1(str) {
      console.log(str);
      this.aaa = str;
    },
    fun2(stq) {
      console.log(stq);
    },
  },
  components: {
    chuancai,
    ents,
  },
};
</script>

<style scoped>
</style>