<template>
  <div class="person">
    <h2>一辆{{ car.brand }},价值{{ car.price }}万</h2>
    <button @click="changeBrand">修改汽车品牌</button>
    <button @click="changePrice">修改汽车价格</button>
    <button @click="changeCar">修改汽车</button>
    <hr />
    <h2>当前求和为{{ sum }}</h2>
    <button @click="changeSum">点我sun+1</button>
  </div>
</template>

<script setup lang="ts" name="Person">
  import { ref, reactive } from "vue";

  //数据
  let car = reactive({ brand: "BM", price: 100 }); //Proxy对象
  // let car = ref({ brand: "BM", price: 100 }); //Proxy对象
  let sum = ref(0);

  //方法
  function changePrice() {
    car.price += 10;
  }
  function changeBrand() {
    car.brand = "BC";
  }
  function changeCar() {
    //reactive重新分配一个新对象，会失去响应式（可以使用Object.assign去整体替换）。
    // car = { brand: "奥拓", price: 1 }; //不更新
    // car = reactive({ brand: "奥拓", price: 1 }); //不更新
    //下面这个写法更新
    Object.assign(car, reactive({ brand: "奥拓", price: 1 }));
    //ref定义形式，此种方式修改了地址的
    // car.value = { brand: "奥拓", price: 1 };
  }
  function changeSum() {
    //sum.value += 1;
    //ref 也不可以越过.value ，下代码无响应
    sum = ref(9);
  }
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
</style>
