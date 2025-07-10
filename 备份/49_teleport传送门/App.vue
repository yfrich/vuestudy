<template>
  <div class="outer">
    <h2>我是APP组件</h2>
    <img
      src="http://tanjianpai-dev.ibit01.com/assets/princess-min-D3N6Cqtg.png"
      alt=""
    />
    <br />
    <Modal />
  </div>
</template>
<script setup lang="ts" name="App">
  import Modal from "@/Modal.vue";
</script>
<style>
  .outer {
    background-color: skyblue;
    border-radius: 10px;
    padding: 5px;
    box-shadow: 0 0 10px;
    width: 400px;
    height: 400px;
    filter: saturate(200%);
  }
  img {
    width: 150px;
  }
</style>
