<template>
  <div id="app">
    <img src="./assets/logo.png">

    <ul>
      <li>
        <router-link to="/first">第一页</router-link>
      </li>
      <li>
        <router-link to="/second">第二页</router-link>
      </li>
      <li>
        <router-link to="/father">第三页</router-link>
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
