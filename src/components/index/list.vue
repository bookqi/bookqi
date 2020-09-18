<template>
  <div class="inter">
    <div class="list">
      <h4 style="border-left: 4px solid #4fdcc9;padding-left:0.05rem;margin-bottom: 0.1rem;">精品听书</h4>
      <p>查看更多&nbsp;&nbsp;></p>
    </div>
    <ul class="inter-top">
      <li v-for="(seed,index) in seeds" :key="index">
        <img :src="seed.b_picture" />
        <h5>{{seed.b_name}}</h5>
        <p>{{seed.b_author}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "good",
  data() {
    return {
      seeds: [],
      t_id: "1",
    };
  },
  created() {
    let str = "/api/books/all11/1";
    this.$axios
      .get(str)
      .then((res) => {
        res.data.forEach((item, index) => {
          if (index < 3) {
            this.seeds.push(item);
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
  padding-top: 0.05rem;
  margin-top: 0.075rem;
}
.list {
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
  justify-content: space-between;
  margin-top: 0.1rem;

  padding-bottom: 0.2rem;
}
.inter-top img {
  width: 100%;
  height: 1rem;
  margin-right: 0.15rem;
}
.inter-top li {
  width: 30%;
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