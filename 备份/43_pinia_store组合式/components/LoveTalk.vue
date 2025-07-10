<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句土味情况</button>
    <ul>
      <li v-for="(talk, index) in talkList" :key="index">
        {{ talk.title }}
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts" name="LoveTalk">
  import { useTalkstore } from "@/store/loveTalk";
  import { storeToRefs } from "pinia";
  //数据
  const talkStore = useTalkstore();
  let { talkList } = storeToRefs(talkStore);
  //订阅
  talkStore.$subscribe((mutate, state) => {
    console.log("talkStore里面保存的数据发生了变化", mutate, state);
    localStorage.setItem("talkList", JSON.stringify(state.talkList));
  });
  //方法
  function getLoveTalk() {
    talkStore.getATalk();
  }
</script>
<style scoped>
  .talk {
    background-color: orange;
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
