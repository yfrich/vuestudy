<template>
  <div class="count">
    <h2>当前求和为：{{ countStore.sum }}</h2>
    <h3>欢迎来到{{ countStore.school }},坐落于：{{ countStore.address }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>
<script setup lang="ts" name="Count">
  import { ref, reactive } from "vue";
  //引入useCountstore
  import { useCountstore } from "@/store/count";
  //数据
  let n = ref(1); //用户选择的数据
  //使用useCountstore，得到一个专门保存count相关的store
  const countStore = useCountstore();

  //方法
  function add() {
    //需求。点击加号，修改 school及address
    //第一种修改方式 //此方式会触发三次事件
    // countStore.sum += n.value;
    //第二种方式 $patch  碎片方式的修改，多数据需要同时修改的情况下
    // countStore.$patch({
    //   sum: 888,
    //   school: "三小",
    //   address: "东北",
    // });
    //第三种 actions 动作。
    countStore.increment(n.value);
  }
  function minus() {}
</script>

<style scoped>
  .count {
    background-color: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }
  select,
  button {
    margin: 0 5px;
    height: 25px;
  }
</style>
