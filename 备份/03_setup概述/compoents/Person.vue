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
    beforeCreate() {
      //生命周期钩子
    },
    setup() {
      //setup函数中里面不能使用this、返回值为undefined，VUE3已经弱化this了
      //setup生命周期比beforeCreate 靠前，优先级更高
      //console.log(`@@${this}`);
      //数据 原来是写在data中的，此时的 name、age、tel都不是响应式的数据
      let name = "张三";
      let age = 18;
      let tel = 13888888888;

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

      //需返回值才能实际使用，返回的也是一个key value的形式，
      //将数据交、方法交出去，模板才能使用
      return { name, age, changeName, changeAge, showTel };

      //return 后写的内容无效
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
