<template>
  <!-- 务必看懂下一行代码 -->
  <h2>我是父类数据：{{ personList[0].name }}</h2>
  <h2 a="1+1" :b="1 + 1" c="x" :d="x" ref="qwe">测试</h2>
  <Person a="哈哈" :list="personList" />
</template>
<script lang="ts" setup name="App">
  //引入组件包
  import Person from "./compoents/Person.vue";
  import { reactive } from "vue";
  import { type Persons } from "./types";
  let personList = reactive<Persons>([
    { id: "01", name: "张三", age: 18 },
    { id: "02", name: "李四", age: 28 },
    { id: "03", name: "王五", age: 38, x: 5 },
  ]);
  let x = 9;
</script>
