<template>
  <div class="person">
    <h2>{{ a }}</h2>
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>地址：{{ address }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>
<!-- <script lang="ts">
  //配置组件
  export default {
    name: "Person234", //组件名
  };
</script> -->
<script setup lang="ts" name="Person234">
  //配置setup
  // 标签<script setup lang="ts"> 与 组件的<script lang="ts">标签 不能进行合并，不能省略组件标签
  //合并写法<script setup lang="ts" name="Person234"> 需要安装插件
  //npm i vite-plugin-vue-setup-extend -D
  //安装后需要修改vite.config.ts
  //标签给定setup 则相当于写setup函数的内容，而且会自动return
  let a = 666;
  //等同于↓
  // setup(){
  //   let a=666;
  //   return {a}
  // }

  //数据 原来是写在data中的，此时的 name、age、tel都不是响应式的数据
  let name = "张三";
  let age = 18;
  let tel = 13888888888;
  let address = "北京XXX";

  //方法
  function changeName() {
    name = "张李三"; //注意：这样修改name，页面是没有变化的
    console.log(name); //name确实改了，但name不是响应式的
  }
  function changeAge() {
    age += 1;
    console.log(age);
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
