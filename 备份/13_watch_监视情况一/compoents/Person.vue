<template>
  <div class="person">
    <h1>情况1：监测【ref】定义的【基本类型】</h1>
    <h2>求和值为：{{ sum }}</h2>
    <button @click="changeSum">点我sum+1</button>
  </div>
</template>

<script setup lang="ts" name="Person">
  import { ref, watch } from "vue";

  //情况1：监测【ref】定义的【基本类型】
  //数据
  let sum = ref(0);
  function changeSum() {
    sum.value += 1;
  }
  //监视
  // watch(谁？,回调函数)
  const stopWatch = watch(sum, (newValue, oldValue) => {
    console.log("sum变化了", newValue, oldValue);
    //如何解除监视
    if (newValue >= 10) {
      //内部如何调用外部返回值的呢？
      stopWatch();
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
