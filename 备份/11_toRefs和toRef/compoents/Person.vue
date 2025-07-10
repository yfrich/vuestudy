<template>
  <div class="person">
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>年龄：{{ nl }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
  </div>
</template>

<script setup lang="ts" name="Person">
  import { reactive, toRefs, toRef } from "vue";

  //数据
  let person = reactive({
    name: "张三",
    age: 18,
  });
  //解构出来的对象不是响应式的,使用toRefs变成ref响应式数据
  //toRefs 接收一个reactive定义的响应式对象，并且把响应式对象每一次keyvalue 形成一个新的ref对象。
  let { name, age } = toRefs(person);
  //console.log(toRefs(person));
  //toRef 只针对于一个次keyvalue 形成一个新的ref对象
  let nl = toRef(person, "age");
  console.log(nl);

  //方法
  function changeName() {
    name.value += "~";
    console.log(name.value, person.name);
  }
  function changeAge() {
    age.value += 1;
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
