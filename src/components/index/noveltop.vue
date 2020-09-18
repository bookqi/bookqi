<!--
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: 范钊
 * @Date: 2020-09-18 02:05:32
 * @LastEditors: 范钊
 * @LastEditTime: 2020-09-18 04:24:20
-->
<template>
  <div class="hot">
    <h4 style="border-left: 4px solid #4fdcc9;padding-left:0.05rem;margin-bottom: 0.1rem">{{type2}}</h4>
    <router-link class="hot-top" v-for="(book,index) in books" :key="index" tag="ul" :to="'/Xiangqing/'+book.b_id">
    <!-- <ul class="hot-top" v-for="(book,index) in books" :key="index"> -->
      <li>
        <img :src="book.b_picture" />
      </li>
      <li>
        <h4>{{book.b_name}}</h4>
        <p
          style="word-break: break-all;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;"
        >{{book.b_content}}</p>
        <div>
          <p>{{book.b_author}}</p>
          <p>
            <span>{{book.b_schedule}}</span>&nbsp;&nbsp;
            <span>{{book.b_read}}</span>
          </p>
        </div>
      </li>
    <!-- </ul> -->
    </router-link>
  </div>
</template>

<script>
export default {
  name: "noveltop",
  props: ["type", "type2"],

  data() {
    return {
      books: [],
    };
  },
  created() {
    let str = "/api/books/all11/" + this.type;
    console.log(this.type);
    this.$axios
      .get(str)
      .then((res) => {
        // console.log("dasdias", res.data);
        this.books = res.data;
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
</style>