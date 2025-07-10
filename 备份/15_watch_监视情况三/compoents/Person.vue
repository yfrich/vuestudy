<template>
  <div class="person">
    <h1>情况3：监测【reactive】定义的【对象类型】</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改人</button>
    <hr />
    <h2>测试{{ obj.a.b.c }}</h2>
    <button @click="Test">修改obj.a.b.c</button>
  </div>
</template>

<script setup lang="ts" name="Person">
  import { watch, reactive } from "vue";

  //情况3：监测【reactive】定义的【对象类型】
  //数据
  let person = reactive({
    name: "张三",
    age: 18,
  });

  let obj = reactive({
    a: {
      b: {
        c: 6,
      },
    },
  });

  //方法
  function changeName() {
    person.name += "~";
  }
  function changeAge() {
    person.age += 1;
  }
  function changePerson() {
    Object.assign(person, { name: "李四", age: 90 });
  }
  function Test() {
    obj.a.b.c = 888;
  }
  //监测 情况3：监测【reactive】定义的【对象类型】数据，且默认是开启深度监视的,是不可以关闭的。
  //reactive 默认隐式创建了深层的监听
  watch(person, (newValue, oldValue) => {
    console.log("person变化了", newValue, oldValue);
  });
  watch(obj, (newValue, oldValue) => {
    console.log("obj变化了", newValue, oldValue);
  });
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
