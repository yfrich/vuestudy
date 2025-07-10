<template>
  <div class="app">
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="person.age += 1">修改年龄</button>
    <br />
    <br />
    <h2>姓名：{{ person2.name }}</h2>
    <h2>年龄：{{ person2.age }}</h2>
    <button @click="person2.age += 1">修改年龄</button>
    <br />
    <br />
    <h2>{{ car2 }}</h2>
    <button @click="car2.price += 10">点我价格+10</button>
  </div>
</template>

<script setup lang="ts" name="App">
  import { reactive, toRaw, markRaw } from "vue";
  import mockjs from "mockjs";
  import { ModuleDetectionKind } from "typescript";
  /* toRaw */
  let person = reactive({
    name: "tony",
    age: 18,
  });
  let person2 = toRaw(person);
  // console.log("响应式数据", person);
  // console.log("原始数据", person2);

  // function showPerson(p) {
  //   p.age += 10;
  //   p.name += "~";
  //   console.log(p);
  // }

  /* markRaw */
  let car = markRaw({ brand: "奔驰", price: 100 });
  let car2 = reactive(car);
  console.log(car);
  console.log(car2);
  console.log(mockjs);
  let mockjs2 = markRaw(mockjs);
  console.log(mockjs2);
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
