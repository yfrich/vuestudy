<template>
  <div class="person">？？</div>
</template>

<script setup lang="ts" name="Person">
  import { type PersonInter, type Persons } from "@/types";
  // let person: PersonInter = {
  //   id: "xasdasdas",
  //   name: "张三",
  //   age: 18,
  // };

  let personList: Persons = [
    {
      id: "01",
      name: "张三",
      age: 18,
    },
    {
      id: "02",
      name: "李四",
      age: 28,
    },
    {
      id: "03",
      name: "王五",
      age: 38,
    },
  ];
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
