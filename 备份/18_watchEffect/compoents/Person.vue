<template>
  <div class="person">
    <h2>需求：当水温达到60度，或水位达到80cm时，给服务器发个请求</h2>
    <h2>当前水温：{{ temp }}℃</h2>
    <h2>当前水位：{{ height }}cm</h2>
    <button @click="changeTemp">水温+10</button>
    <button @click="changeHeight">水温+10</button>
  </div>
</template>

<script setup lang="ts" name="Person">
  import { ref, watch, watchEffect } from "vue";

  //数据
  let temp = ref(10);
  let height = ref(0);

  //方法
  function changeTemp() {
    temp.value += 10;
  }
  function changeHeight() {
    height.value += 10;
  }
  //监视
  /*
  watch([temp, height], (value) => {
    //从value中获取最新的水温（newTemp）、水位（newHeight）
    let [newTemp, newHeight] = value;
    //逻辑
    if (newTemp >= 60 || newHeight >= 80) {
      console.log("给服务器发请求");
    }
  });
  */
  //监视 -watchEffect
  watchEffect(() => {
    //首次加载会执行
    // console.log(1);
    if (temp.value >= 60 || height.value >= 80) {
      console.log("给服务器发请求");
    }
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
