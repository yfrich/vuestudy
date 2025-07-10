<template>
  <div class="app">
    <h2>我是APP组件{{ x }}</h2>
    <Hello1 />
    <Child />
  </div>
</template>
<script setup lang="ts" name="App">
  import Child from "./Child.vue";
  import { Suspense } from "vue";
</script>

<style scoped>
  .app {
    background-color: antiquewhite;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 0 10px;
  }
</style>
