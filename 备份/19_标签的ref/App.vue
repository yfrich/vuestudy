<template>
  <h2 ref="title2">你好</h2>
  <button @click="showlog">测试</button>
  <Person ref="ren" />
</template>
<script lang="ts" setup name="App">
  //引入组件包
  import Person from "./compoents/Person.vue";
  import { ref } from "vue";
  let title2 = ref();
  let ren = ref();
  function showlog() {
    // console.log(title2.value);
    console.log(ren.value);
    console.log(ren.value.a);
    ren.value.a = "我是父类修改子类数据";
  }
</script>
