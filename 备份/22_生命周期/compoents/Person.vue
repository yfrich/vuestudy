<template>
  <div class="person">
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="add">点我Sum+1</button>
  </div>
</template>

<script setup lang="ts" name="Person">
  import {
    ref,
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted,
  } from "vue";
  //数据
  let sum = ref(0);
  //方法
  function add() {
    sum.value += 1;
  }
  // 创建 beforeCreate created Vue2
  console.log("子创建");

  //挂载前
  onBeforeMount(() => {
    console.log("子挂载前");
  });
  //挂在完毕
  onMounted(() => {
    console.log("子挂载完毕");
  });
  //更新前
  onBeforeUpdate(() => {
    console.log("更新前");
  });
  onUpdated(() => {
    console.log("更新完毕");
  });
  //卸载前
  onBeforeUnmount(() => {
    console.log("卸载前");
  });
  //卸载完毕
  onUnmounted(() => {
    console.log("卸载完毕");
  });
</script>
<style scoped>
  .person {
    background-color: skyblue;
    padding: 20px;
    margin: 0 10px;
  }
</style>
