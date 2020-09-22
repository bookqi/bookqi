<template>
  <div class="box">
    <ul class="box1">
      <li @click="fu">{{this.canshu}}</li>
      <li @click="fu1">接参</li>
    </ul>
    <p class="box2">我是学习传参{{this.asc}}</p>
  </div>
</template>

<script>
export default {
  name: "chuancai",
  props: ["canshu", "asc"],
  data() {
    return {};
  },
  methods: {
    fu() {
      this.$emit("myclicks", "我是你爸爸");
    },
    fu1() {
      this.$emit("myset", "我是你爹地");
    },
  },

  created() {
    console.log(this.canshu);
  },
};
</script>

<style scoped>
.box {
  width: 100%;
  margin-left: 0.05rem;
  margin-right: 0.05rem;
}
ul {
  display: flex;
  margin-bottom: 0.3rem;
}
li {
  text-align: center;
  width: 50%;
  background-color: pink;
  height: 0.5rem;
}
</style>