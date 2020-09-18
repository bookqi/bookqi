<template>
  <div class="hot">
    <ul class="hot-bot">
      <router-link tag="li" v-for="(list,index) in lists" :key="index" :to="'/Xiangqing/'+list.b_id">
        <img :src="list.b_picture" />
        <h5>{{list.b_name}}</h5>
        <p>{{list.b_author}}</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "novel",
  props: ["type"],

  data() {
    return {
      lists: [],
    };
  },
  created() {
    let str = "/api/books/all11/" + this.type;
    this.$axios
      .get(str)
      .then((res) => {
        console.log(res.data);
        this.lists = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.hot {
  width: 100%;
  padding-left: 0.225rem;
  padding-right: 0.225rem;
  box-sizing: border-box;
  background-color: #ffffff;
  padding-top: 0.1rem;
}

.hot-top img {
  width: 0.8rem;
  height: 1rem;
  margin-right: 0.15rem;
}
.hot-top {
  display: flex;
  justify-content: space-between;
  /* box-sizing: border-box; */
}
.hot-top ul li h5 {
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.hot-top li p {
  font-size: 12px;
  line-height: 20px;
  margin-top: 0.1rem;
}
.hot ul li div {
  display: flex;
  justify-content: space-between;
}
.hot ul li div p span {
  border: 1px solid #e9e9e9;
  padding: 0.025rem;
}
.hot-bot {
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  margin-bottom: 0.1rem;
  padding-bottom: 0.4rem;
}
.hot-bot img {
  width: 100%;
  height: 1rem;
  margin-right: 0.15rem;
}
.hot-bot li {
  width: 23%;
}
.hot-bot li h5 {
  font-size: 12px;
  color: #3d3d3d;
}
.hot-bot li p {
  font-size: 12px;
  color: #abaaaf;
}
.hot-bot h5 {
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>