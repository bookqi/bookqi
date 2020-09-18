<template>
  <div class="quality">
    <h4 style="border-left: 4px solid #4fdcc9;padding-left:0.05rem;margin-bottom: 0.1rem">优质榜单</h4>
    <button style="background:#36beba;color:#e0ffff">男频人气好文</button>
    <button>女频人气好文</button>
    <ul>
      <li v-for="(big,index) in bigs" :key="index">
        <img :src="big.b_picture" />
        <div>
          <h3>{{big.b_name}}</h3>
          <p>{{big.b_read}} &nbsp;&nbsp;人在读</p>
        </div>
      </li>
    </ul>
    <!-- </div> -->
    <p
      style="text-align: center;margin-top:0.3rem;border-top:1px solid #fafafa;height: 0.5rem; line-height: 0.5rem;"
    >更多男频榜单好文</p>
  </div>
</template>

<script>
export default {
  name: "quase",
  data() {
    return {
      bigs: [],
    };
  },
  created() {
    let str = "http://localhost:3000/youzhi";
    this.$axios
      .get(str)
      .then((res) => {
        console.log(res.data);
        this.bigs = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.quality {
  width: 100%;
  padding-left: 0.225rem;
  padding-right: 0.225rem;
  box-sizing: border-box;
  background-color: #ffffff;
}
.quality button {
  width: 49%;
  height: 0.3rem;
  border-radius: 0.025rem;
  border: none;
}
.quality ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  overflow: hidden;
}
.quality ul li img {
  width: 0.45rem;
  height: 0.65rem;
  margin-right: 0.1rem;
}
.quality ul li {
  display: flex;
  height: 0.65rem;
  margin-top: 0.2rem;
  margin-right: 0.05rem;
}
.quality ul li div h3 {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-top: 0.125rem;
  margin-bottom: 0.1rem;
  width: 1rem;
  font-size: 14px;
}
</style>