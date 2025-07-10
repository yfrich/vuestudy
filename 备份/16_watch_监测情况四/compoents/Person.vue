<template>
  <div class="person">
    <h1>情况4：监视【ref】或【reactive】定义的【对象类型】数据中的某个属性</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>汽车：{{ person.car.c1 }}、{{ person.car.c2 }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeC1">修改第一台车</button>
    <button @click="changeC2">修改第二台车</button>
    <button @click="changeCar">修改整个车</button>
  </div>
</template>

<script setup lang="ts" name="Person">
  import { reactive, watch } from "vue";

  //数据
  let person = reactive({
    name: "张三",
    age: 18,
    car: {
      c1: "奔驰",
      c2: "宝马",
    },
  });
  //方法
  function changeName() {
    person.name += "~";
  }
  function changeAge() {
    person.age += 1;
  }
  function changeC1() {
    person.car.c1 = "奥迪";
  }
  function changeC2() {
    person.car.c2 = "大众";
  }
  function changeCar() {
    person.car = { c1: "雅迪", c2: "爱玛" };
  }
  //监视 情况4：监视响应式对象中的某个属性，且该属性是基本类型的，要写成函数
  //要求1 修改名称的时候进行你监视
  //getter函数 返回一个值的函数
  watch(
    () => person.name,
    (newValue, oldValue) => {
      console.log("person变化了", newValue, oldValue);
    }
  );

  //监视 情况4：监视响应式对象中的某个属性，且该属性是对象类型的，可以直接写，也能写函数，推荐写函数。
  //要求2 修改车的时候进行监视
  //person.car 依旧是reactive响应式对象，所以可以直接监视
  //此方式写 只能监听内部属性变化，无法监听到具体的car对象变化
  // watch(person.car, (newValue, oldValue) => {
  //   console.log("person.car变化了", newValue, oldValue);
  // });
  //用函数方式，则监视地址值
  watch(
    () => person.car,
    (newValue, oldValue) => {
      console.log("person.car变化了", newValue, oldValue);
    },
    { deep: true }
  );
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
