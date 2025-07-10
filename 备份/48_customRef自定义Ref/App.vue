<template>
  <div class="app">
    <h2>{{ msg }}</h2>
    <input type="text" v-model="msg" />
  </div>
</template>

<script setup lang="ts" name="App">
  import { ref } from "vue";
  import useMsgRef from "./hooks/useMsgRef";
  //使用Vue默认提供的ref定义响应式数据，数据一变化，页面及试图进行刷新
  // let msg = ref("你好");
  //需求 当我在你好后面添加数字6 后 显示内容等待1s后再更新
  let { msg } = useMsgRef("你好", 1000);
</script>

<style scoped>
  .app {
    background-color: skyblue;
    border-radius: 10px;
    box-shadow: 0 0 10px;
    padding: 10px;
  }
  button {
    margin: 0 5px;
  }
</style>
