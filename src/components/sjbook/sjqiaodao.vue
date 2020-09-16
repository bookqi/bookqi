<!--
 * @Descripttion: 书架签到
 * @version: v1.0.0
 * @Author: 范钊
 * @Date: 2020-09-12 10:05:41
 * @LastEditors: 范钊
 * @LastEditTime: 2020-09-14 15:26:22
-->
<template>
  <div class="box">
    <div class="qiaodao">
      <div class="img1">
        <div class="wenzi">
          <h3>新▪福利中心</h3>
          <p>每日签到领金币</p>
        </div>
      </div>
      <div class="img2">
        <div class="wenzi">
          <h3>返校季福利</h3>
          <p>抢手机撒金币</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"sjqiaodao",
  data(){
    return{
    }
  },
}
</script>

<style scoped>
  .box{
    width: 100%;
    margin-top:0.17rem;
    margin-bottom: 0.12rem;
  }
  .qiaodao{
    width:94%;
    margin:0 auto;
    display:flex;
    justify-content:space-between;
  }
  .img1{
    width:56%;
    height: 1rem;
    background: url("../../assets/imgs/qiandao.png") no-repeat;
    background-size:100% 100%;
    border-radius: 10px;
    display: flex;
    align-items: center;
  }
  .wenzi{
    margin-left: 0.12rem;
  }
  .img2{
    width:42%;
    height: 1rem;
    background: url("../../assets/imgs/qiandao1.png") no-repeat;
    background-size:100% 100%;
    border-radius: 10px;
    display: flex;
    align-items: center;
  }
</style>