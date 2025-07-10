<template>
  <div class="child">
    <Hello1 />
    <h2>我是Child组件{{ x }}</h2>
    <h2>当前求和数据为：{{ sum }}</h2>
    <!-- <h2>情话：{{ content }}</h2> -->
    <h4 v-beauty="sum">好开心</h4>
  </div>
</template>
<script setup lang="ts" name="Child">
  import { ref } from "vue";
  import axios from "axios";
  let sum = ref(0);
  // let {
  //   data: { content },
  // } = await axios.get("https://api.uomg.com/api/rand.qinghua?format=json");
  // console.log(content);
</script>

<style scoped>
  .child {
    background-color: skyblue;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 0 10px;
  }
</style>
