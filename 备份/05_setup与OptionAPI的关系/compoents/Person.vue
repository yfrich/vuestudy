<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
    <hr />
    <h2>测试1：{{ a }}</h2>
    <h2>测试2：{{ c }}</h2>
    <h2>测试3：{{ d }}</h2>
    <button @click="b">测试</button>
  </div>
</template>
<script lang="ts">
  export default {
    name: "Person", //组件名
    beforeCreate() {
      //生命周期钩子
    },
    data() {
      return {
        a: 100,
        c: this.name,
        d: 900,
      };
    },
    methods: {
      b() {
        console.log("b");
      },
    },
    setup() {
      //数据 原来是写在data中的，此时的 name、age、tel都不是响应式的数据
      let name = "张三";
      let age = 18;
      let tel = 13888888888;
      //let x = d; //无法使用data中的数据
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

      //将数据交、方法交出去，模板才能使用
      return { name, age, changeName, changeAge, showTel };
    },
  };
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
