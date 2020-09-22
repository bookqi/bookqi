<template>
  <div class="inter">
    <div class="soar">
      <h4 style="border-left: 4px solid #4fdcc9;padding-left:0.05rem;margin-bottom: 0.1rem;">今日必读</h4>
      <p>查看更多&nbsp;&nbsp;></p>
    </div>
    <!-- 1 -->
    <ul class="inter-bot1">
      <li>
        <img :src="books[0].b_picture" />
      </li>
      <li>
        <h4>{{books[0].b_name}}</h4>
        <p>{{books[0].b_content}}</p>
        <div>
          <p>{{books[0].b_author}}</p>
          <p>
            <span>{{books[0].b_read}}</span>&nbsp;&nbsp;
            <span>{{books[0].b_schedule}}</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "required",
  props: ["type"],
  data() {
    return {
      books: [],
    };
  },
  created() {
    let str = "/api/books/all11/" + this.type;
    this.$axios
      .get(str)
      .then((res) => {
        res.data.forEach((item, index) => {
          if (index < 1) {
            // console.log("今日必读", item);
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

.inter ul li div {
  display: flex;
  justify-content: space-between;
}
.inter ul li div p span {
  border: 1px solid #e9e9e9;
  padding: 0.025rem;
}
</style>