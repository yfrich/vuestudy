<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>地址：{{ address }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>
<script setup lang="ts" name="Person">
  import { ref } from "vue";

  //数据 原来是写在data中的，此时的 name、age、tel都不是响应式的数据
  let name = ref("张三"); //refimpl对象
  let age = ref(18);
  let tel = 13888888888;
  let address = "北京XXX";
  console.log(1, name);
  console.log(2, age);
  console.log(3, tel);
  console.log(4, address);

  //方法
  function changeName() {
    name.value = "张李三"; //注意：这样修改name，页面是没有变化的
    console.log(name.value); //name确实改了，但name不是响应式的
  }
  function changeAge() {
    age.value += 1;
    console.log(age.value);
  }
  function showTel() {
    alert(tel);
  }
</script>
<style scoped>
  .person {
    background-color: brown;
    padding: 20px;
  }
  button {
    margin: 0 5px;
  }
</style>
