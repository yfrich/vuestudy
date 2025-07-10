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
  import { reactive } from "vue";
  import axios from "axios";
  import { nanoid } from "nanoid";
  //数据
  let talkList = reactive([
    { id: "01", title: "你今天有点怪" },
    { id: "02", title: "蓝莓、草莓" },
    { id: "03", title: "一块地" },
  ]);
  //方法
  async function getLoveTalk() {
    // 发请求，下面这行的写法是：连续解构赋值+重命名
    let {
      data: { content: title },
    } = await axios.get("https://api.uomg.com/api/rand.qinghua?format=json");
    //把请求回来的字符串包装成对象
    let obj = { id: nanoid(), title };
    //放到数组中
    talkList.unshift(obj);
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
