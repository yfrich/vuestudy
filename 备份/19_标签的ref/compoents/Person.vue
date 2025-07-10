<template>
  <div class="person">
    <h1>中国</h1>
    <h2 ref="title2">北京</h2>
    <h3>朝阳区</h3>
    <button @click="showlog">点击我输出H2这个元素</button>
    <h2>我是子类初始化的数据{{ a }}</h2>
  </div>
</template>

<script setup lang="ts" name="Person">
  import { ref } from "vue";
  //创建一个title2 用于存储ref标记的内容
  let title2 = ref();
  let a = ref(0);
  let b = ref(1);
  let c = ref(2);
  function showlog() {
    // console.log(document.getElementById("title2"));
    console.log(title2.value);
  }
  //父组件需要获取子组件时，子组件需要暴漏
  defineExpose({
    a,
    b,
  });
</script>
<style scoped>
  .person {
    background-color: rgb(42, 165, 69);
    padding: 20px;
  }
  button {
    margin: 0 5px;
  }
  li {
    font-size: 20px;
  }
  .item {
    margin: 0 0 100px 0px;
    padding: 10px;
    background-color: bisque;
  }
</style>
