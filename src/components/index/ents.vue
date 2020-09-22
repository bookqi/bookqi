<template>
  <div>
    <!-- {{this.que}} -->
    {{$store.state.age}}
  </div>
</template>

<script>
export default {
  name: "ents",
  props: ["que"],
  data() {
    return {};
  },
  created() {},
};
</script>

<style>
</style>