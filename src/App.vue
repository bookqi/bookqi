<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: #000;
}
img {
  vertical-align: middle;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
}
ul li {
  list-style: none;
}
html,
body {
  height: 100%;
  background-color: #f8f8f8;
}
html {
  font-size: 26.667vw;
}
body {
  font-size: 16px;
}
</style>
