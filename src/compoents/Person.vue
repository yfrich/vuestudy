<template>
  <div class="person">
    <h2>一辆{{ car.brand }},价值{{ car.price }}万</h2>
    <button @click="changePrice">修改汽车价格</button>
    <h2>游戏列表</h2>
    <ul>
      <!-- <li v-for="g in games" v-bind:key="g.id"></li> -->
      <li v-for="g in games" :key="g.id">{{ g.name }}</li>
    </ul>
    <button @click="changeFirstGame">修改第一个游戏的名字</button>
    <h2>测试：{{ obj2.a.b.c.d }}</h2>
    <button @click="test">测试</button>
  </div>
</template>

<script setup lang="ts" name="Person">
  import { ref, reactive } from "vue";
  //reactive 深层次的，不管数据藏得多深都能够变成响应式的
  //数据
  let car = ref({ brand: "BM", price: 100 }); //Proxy对象

  let games = ref([
    { id: "asd1", name: "游戏A" },
    { id: "asd2", name: "游戏B" },
    { id: "asd3", name: "游戏C" },
  ]);

  let obj = reactive({ x: 999 });
  console.log(car);
  console.log(obj);
  let obj2 = ref({
    a: {
      b: {
        c: {
          d: 666,
        },
      },
    },
  });
  //方法
  function changePrice() {
    car.value.price += 10;
  }

  function changeFirstGame() {
    games.value[0].name = "游戏A-修改了";
  }
  function test() {
    obj2.value.a.b.c.d = 999;
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
