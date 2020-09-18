<!--
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: 范钊
 * @Date: 2020-09-18 02:05:32
 * @LastEditors: 范钊
 * @LastEditTime: 2020-09-18 05:01:09
-->
<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(bgc,index) in bgcs" :key="index">
        <img :src="bgc.sd_picture" />
      </div>
      <!-- <div class="swiper-slide">
        <img :src="bgc.sd_picture" />
      </div>
      <div class="swiper-slide">
        <img :src="bgcs.sd_picture" />
      </div>
      <div class="swiper-slide">
        <img :src="bgcs.sd_picture" />
      </div> -->
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  props: ["type"],
  name: "Banner",
  data() {
    return {
      bgcs: [],
    };
  },
  methods: {
    showSwiper() {
      new Swiper(".swiper-container", {
        loop: true, // 循环模式选项
        // autoplay:true,
        autoplay: {
          delay: 1000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
        },
      });
    },
  },
  created() {
    let str = "/api/books/all13/" + this.type;
    this.$axios
      .get(str)
      .then((res) => {
        this.bgcs = res.data;
        console.log("dasidiasbfiafi ",res.data)
        this.$nextTick(() => {
          console.log(this);
          this.showSwiper();
        });
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log("我是接收的type", this.type);
  },
};
</script>

<style scoped>
@import url(../../assets/css/swiper.css);
.swiper-container {
  width: 95%;
  height: 1.5rem;
  margin: 0 auto;
}
img {
  width: 100%;
  height: 100%;
}
</style>>
