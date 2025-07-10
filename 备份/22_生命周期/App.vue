<template>
  <Person v-if="isShow" />
</template>
<script lang="ts" setup name="App">
  //引入组件包
  import Person from "./compoents/Person.vue";
  import { ref, onMounted, onBeforeMount } from "vue";
  let isShow = ref(true);
  //挂载前
  onBeforeMount(() => {
    console.log("父挂载前");
  });
  //挂在完毕
  onMounted(() => {
    console.log("父挂载完毕");
  });
</script>
