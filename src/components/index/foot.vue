<template>
  <div class="under">
    <ul>
      <router-link class="Oli" tag="li" to="/sjbook">
        <span class="iconfont icon-shouyeiconfenleibeifen10"></span>
        <p>书架</p>
      </router-link>

      <router-link class="Oli" tag="li" :to="'/tuijian/'+'5'">
        <span class="iconfont icon-shuchengxuanzhong"></span>
        <p>书城</p>
      </router-link>

      <router-link class="Oli" tag="li" :to="'/faxians/'+'4'">
        <span class="iconfont icon-faxian"></span>
        <p>发现</p>
      </router-link>

      <router-link class="Oli" tag="li" to="/aaa">
        <span class="iconfont icon-home"></span>
        <p>我的</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "foot",
  data() {
    return {};
  },
};
</script>

<style scoped>
.Oli.router-link-active {
  color: red;
}
.under {
  width: 100%;
  height: 0.75rem;
  padding-left: 0.225rem;
  padding-right: 0.225rem;
  box-sizing: border-box;
  background-color: #ffffff;
}
.under ul {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 0.15rem;
}
.icon-shuchengxuanzhong，.icon-shuchengxuanzhong,
.icon-faxian，.icon-home {
  font-size: 24px;
  color: #9f9ea3;
}
.Oli {
  width: 24%;
  text-align: center;
}
</style>