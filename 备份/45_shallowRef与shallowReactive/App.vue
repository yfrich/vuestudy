<template>
  <div class="app">
    <h2>求和为：{{ sum }}</h2>
    <h2>名字为：{{ person.name }}</h2>
    <h2>年龄为：{{ person.age }}</h2>
    <h2>汽车为：{{ car }}</h2>
    <button @click="add">SUM+1</button>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改整个人</button>
    <br />
    <br />
    <button @click="changeBarnd">修改品牌</button>
    <button @click="changeColor">修改颜色</button>
    <button @click="changeEngine">修改发动机</button>
    <!-- <button @click="changeCar">修改整个车</button> -->
  </div>
</template>

<script setup lang="ts" name="App">
  import { ref, shallowRef, reactive, shallowReactive } from "vue";
  //数据
  let sum = shallowRef(0);
  let person = shallowRef({
    name: "张三",
    age: 18,
  });
  let car = shallowReactive({
    barnd: "奔驰",
    options: {
      color: "red",
      engine: "v8",
    },
  });
  //方法
  function add() {
    sum.value += 1;
  }
  function changeName() {
    person.value.name = "李四";
  }
  function changeAge() {
    person.value.age += 1;
  }
  function changePerson() {
    person.value = { name: "tony", age: 100 };
  }
  //车 方法
  function changeBarnd() {
    car.barnd = "宝马";
  }
  function changeColor() {
    car.options.color = "green";
  }
  function changeEngine() {
    car.options.engine = "v12";
  }
  function changeCar() {
    //  Object.assign(car,{})
  }
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
