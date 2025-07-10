<template>
  <div class="person">
    <h2>{{ a }}</h2>
    <ul>
      <li v-for="p in list" :key="p.id">{{ p.name }} -- {{ p.age }}</li>
    </ul>
    <button @click="changeParentData">我是子类修改父类数据</button>
  </div>
</template>

<script setup lang="ts" name="Person">
  import type { Persons } from "@/types";
  //宏 函数不需要引用 直接用
  // import { defineProps, withDefaults } from "vue";

  //只接收list,且父类必须传
  // defineProps(["list"]);

  //接收list +限制类型
  // defineProps<{ list: Persons }>();

  //接收list +限制类型 + 限制必要性(是必须要还是可有可无 ?)+指定默认值
  let y = withDefaults(defineProps<{ list?: Persons; a: string }>(), {
    list: () => {
      return [{ id: "xxx", name: "康师傅", age: 19 }];
    },
  });
  function changeParentData() {
    y.list[0].name = "我是子类修改父类的数";
  }

  //接收list同时将props保存起来
  // let x = defineProps(["list"]);
  // console.log(x.a);
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
