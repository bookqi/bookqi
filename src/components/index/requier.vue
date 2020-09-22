<template>
  <div class="inter">
    <ul class="inter-top">
      <li v-for="(book,index) in books" :key="index">
        <img :src="book.b_picture" />
        <h5>{{book.b_name}}</h5>
        <p>{{book.b_author}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "requier",
  props: ["type"], //this.type
  data() {
    return {
      books: [],
    };
  },
  created() {
    let str = "/api/books/all11/4";
    // console.log("dasfafvegv", this.type);
    this.$axios
      .get(str)
      .then((res) => {
        res.data.forEach((item, index) => {
          if (index < 4) {
            this.books.push(item);
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
  margin-top: 0.2rem;

  padding-bottom: 0.4rem;
}
.inter-top img {
  width: 100%;
  height: 1rem;
  margin-right: 0.15rem;
}
.inter-top li {
  width: 23%;
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