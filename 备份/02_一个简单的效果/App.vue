<template>
  <!-- html -->
  <div class="app">
    <h1>你好啊</h1>
    <!-- 使用组件 -->
    <Person></Person>
  </div>
</template>
<script lang="ts">
  //引入组件包
  import Person from "./compoents/Person.vue";
  //组件需要暴漏 可以是默认、分别、统一，不爆露的话外部无法引用组件
  //js或ts
  export default {
    name: "App", //组件名字
    components: { Person }, //注册组件
  };
</script>
<style>
  /* 样式 */
  .app {
    background-color: aqua;
    padding: 30px;
  }
</style>
