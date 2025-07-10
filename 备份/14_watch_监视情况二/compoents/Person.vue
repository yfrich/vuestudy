<template>
  <div class="person">
    <h1>情况2：监测【ref】定义的【对象类型】</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改人</button>
  </div>
</template>

<script setup lang="ts" name="Person">
  import { ref, watch } from "vue";

  //情况2：监测【ref】定义的【对象类型】
  //数据
  let person = ref({
    name: "张三",
    age: 18,
  });
  //方法
  function changeName() {
    person.value.name += "~";
  }
  function changeAge() {
    person.value.age += 1;
  }
  function changePerson() {
    person.value = { name: "李四", age: 90 };
  }
  //监视，情况2：监测【ref】定义的【对象类型】，监视的是对象的地址，若想监视对象内部属性的变化，需要手动添加深度监视
  /*watch参数1：被监视的数据
  watch参数2：监视的回调
  watch参数3：配置对象（deep、immediate等等...）
  函数接收参数看顺序
  */
  watch(
    person,
    (value) => {
      console.log("person变化了", value);
    },
    //deep是否开启深度监视
    //immediate 是否开启立即监视，新值为当前对象，旧值为undefined
    {
      deep: true,
      //  immediate: true
    }
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
