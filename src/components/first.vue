<template>
  <div id="first">
    <h1>I am the first component</h1>
    <a v-on:click="doSomething">written by {{author}}</a>
    <p v-if="seen">现在你看到我了</p>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      author: "Jinkey",
      seen: true
    };
  },

  methods: {
    doSomething() {
      alert("你点击我");
    }

  }
}
</script>

<style>
</style>
