<template>
  <div>
    <ul>
      <router-link to="/pen/" tag="li">添加</router-link>

      <router-link to="/pen1/" tag="li">我的</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "pppp",
  data() {
    return {};
  },
};
</script>

<style scoped>
ul {
  width: 100%;
  height: 0.25rem;
  display: flex;
}
li {
  width: 50%;
  line-height: 0.25rem;
  background-color: red;
  text-align: center;
  border: 1px solid black;
}
</style>