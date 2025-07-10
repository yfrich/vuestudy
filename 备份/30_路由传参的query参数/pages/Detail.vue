<template>
  <ul class="news-list">
    <li>标题：{{ query.title }}</li>
    <li>内容：{{ query.content }}</li>
    <li>编号：{{ query.id }}</li>
  </ul>
</template>

<script setup lang="ts" name="About">
  import { useRoute } from "vue-router";
  import { toRefs } from "vue";
  //接收数据
  let route = useRoute();
  //直接解构会导致数据变为非响应式。
  // let { query } = route;
  let { query } = toRefs(route);
</script>

<style scoped>
  .news-list {
    list-style: none;
    padding-left: 20px;
  }

  .news-list > li {
    line-height: 30px;
  }
</style>
