<template>
  <div class="inter">
    <h4 style="border-left: 4px solid #4fdcc9;padding-left:0.05rem;margin-bottom: 0.1rem;">全网热门小说</h4>
    <ul class="inter-top">
      <router-link v-for="(book,index) in books1" :key="index" tag="li" :to="'/Xiangqing/'+book.b_id">
      <!-- <li v-for="(book,index) in books1" :key="index"> -->
        <img :src="book.b_picture" />
        <h5>{{book.b_name}}</h5>
        <p>{{book.b_author}}</p>
      <!-- </li> -->
      </router-link>
    </ul>

    <!-- 1 -->
    <router-link class="inter-bot" v-for="(book,index) in books1" :key="index" tag="ul" :to="'/Xiangqing/'+book.b_id">
      <li>
        <img :src="book.b_picture" />
      </li>
      <li>
        <h4>{{book.b_name}}</h4>
        <p>{{book.b_content}}</p>
        <div>
          <p>{{book.b_author}}</p>
          <p>
            <span>{{book.jindu}}</span>&nbsp;&nbsp;
            <span>{{book.b_read}}</span>
          </p>
        </div>
      </li>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "interest",
  props: ["type"],
  data() {
    return {
      books1: [],
      books: [],
    };
  },
  created() {
    let str = "/api/books/all11/" + this.type;
    this.$axios
      .get(str)
      .then((res) => {
        console.log("insert", res.data);
        res.data.forEach((item, index) => {
          if (index < 4) {
            this.books1.push(item);
          } else {
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
  padding-top: 0.1rem;
}
.inter h5 {
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.inter ul li div {
  display: flex;
  justify-content: space-between;
}
.inter ul li div p span {
  border: 1px solid #e9e9e9;
  padding: 0.025rem;
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

.inter-bot img {
  width: 0.8rem;
  height: 1rem;
  margin-right: 0.15rem;
}
.inter-bot {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #eaebed;
  padding-top: 0.15rem;
  padding-bottom: 0.2rem;
}

.inter-bot li p {
  font-size: 12px;
  line-height: 20px;
  margin-top: 0.1rem;
}
.inter ul li div {
  display: flex;
  justify-content: space-between;
}
.inter ul li div p span {
  border: 1px solid #e9e9e9;
  padding: 0.025rem;
}
.inter-bot li p {
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>