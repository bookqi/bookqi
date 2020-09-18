<template>
  <div class="inter">
    <div class="soar">
      <h4 style="border-left: 4px solid #4fdcc9;padding-left:0.05rem;margin-bottom: 0.1rem;">热门飙升</h4>
      <p>
        换一换
        <span class="iconfont icon-jiazai"></span>
      </p>
    </div>
    <!-- 1 -->
    <router-link tag="ul" class="inter-bot1" v-for="(book,index) in books" :key="index" :to="'/Xiangqing/'+book.b_id">
      <li>
        <img :src="book.b_picture" />
      </li>
      <li>
        <h4>{{book.b_name}}</h4>
        <p>{{book.b_content}}</p>
        <div>
          <p>{{book.b_author}}</p>
          <p>
            <span>{{book.b_schedule}}</span>&nbsp;&nbsp;
            <span>{{book.b_read}}</span>
          </p>
        </div>
      </li>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "soaring",
  props: ["type"],
  data() {
    return {
      books: [],
    };
  },
  created() {
    let str = "/api/books/all11/7";
    this.$axios
      .get(str)
      .then((res) => {
        res.data.forEach((item, index) => {
          if (index < 4) {
            this.books.push(item);
            console.log("热门飙升", res.data);
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
.inter .soar {
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
.inter ul li div {
  display: flex;
  justify-content: space-between;
}
.inter ul li div p span {
  border: 1px solid #e9e9e9;
  padding: 0.025rem;
}

.inter img {
  width: 0.8rem;
  height: 1rem;
  margin-right: 0.15rem;
}
.inter-bot1 {
  display: flex;
  justify-content: space-between;
  padding-top: 0.05rem;
  padding-bottom: 0.2rem;
}

.inter-bot1 li p {
  font-size: 12px;
  line-height: 20px;
  margin-top: 0.1rem;
}
.inter-bot1 li p {
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
/* 第二个 */
.inter-bot2 {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #eaebed;
  padding-top: 0.15rem;
  padding-bottom: 0.2rem;
}
.inter-bot2 li p {
  font-size: 12px;
  line-height: 20px;
  margin-top: 0.1rem;
}
.inter-bot2 li p {
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
/* 第三个 */
.inter-bot3 {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #eaebed;
  padding-top: 0.15rem;
  padding-bottom: 0.2rem;
}

.inter-bot3 li p {
  font-size: 12px;
  line-height: 20px;
  margin-top: 0.1rem;
}
.inter-bot3 li p {
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
</style>