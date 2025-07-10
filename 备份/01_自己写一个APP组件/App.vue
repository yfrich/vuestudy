<template>
    <!-- html -->
     <div class="app">
        <h1>你好啊</h1>
     </div>
</template>
<script lang="ts">
//组件需要暴漏 可以是默认、分别、统一，不爆露的话外部无法引用组件
 //js或ts
 export default {
    name:'App' //组件名字
 }
</script>
<style>
/* 样式 */
.app{
    background-color: aqua;
}
</style>