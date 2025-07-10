<template>
  <div class="person">
    <h2>当前求和为：{{ sum }},放大10被后{{ bigSum }}</h2>
    <button @click="add">点我Sum+1</button>
    <hr />
    <img v-for="(dog, index) in dogList" :src="dog" :key="index" />
    <br />
    <button @click="getDog">再来一只狗</button>
  </div>
</template>

<script setup lang="ts" name="Person">
  import useDog from "@/hooks/useDog";
  import useSum from "@/hooks/useSum";

  const { sum, bigSum, add } = useSum();
  const { dogList, getDog } = useDog();
</script>
<style scoped>
  .person {
    background-color: skyblue;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }
  button {
    margin: 0 10px;
  }
  img {
    height: 100px;
    margin-right: 10px;
  }
</style>
