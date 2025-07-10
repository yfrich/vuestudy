<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>
<script lang="ts">
  export default {
    name: "Person", //组件名
    data() {
      return { name: "张三", age: 18, tel: 1388888888 };
    },
    methods: {
      showTel() {
        alert(this.tel);
      },
      changeName() {
        this.name = "张李三";
      },
      changeAge() {
        this.age += 1;
      },
    },
  };
</script>
<style>
  .person {
    background-color: brown;
    padding: 20px;
  }
  button {
    margin: 0 5px;
  }
</style>
