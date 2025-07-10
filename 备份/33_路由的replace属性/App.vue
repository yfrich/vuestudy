<template>
  <div class="app">
    <!-- 头部区域 -->
    <Header />
    <!-- 导航区 -->
    <div class="navigate">
      <!-- 字符串写法 -->
      <router-link to="/home" active-class="active">首页</router-link>
      <!-- 对象写法 名字跳转-->
      <router-link :to="{ name: 'xinwen' }" active-class="active">
        新闻
      </router-link>
      <!-- 对象写法 path跳转-->
      <router-link replace :to="{ path: '/about' }" active-class="active">
        关于
      </router-link>
    </div>
    <!-- 展示区 -->
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts" setup name="App">
  //可以不用引用如下
  // import { RouterView, RouterLink } from "vue-router";
  import Header from "./components/Header.vue";
</script>
<style>
  /* App */
  .title {
    text-align: center;
    word-spacing: 5px;
    margin: 30px 0;
    height: 70px;
    line-height: 70px;
    background-image: linear-gradient(45deg, gray, white);
    border-radius: 10px;
    box-shadow: 0 0 2px;
    font-size: 30px;
  }
  .navigate {
    display: flex;
    justify-content: space-around;
    margin: 0 100px;
  }
  .navigate a {
    display: block;
    text-align: center;
    width: 90px;
    height: 40px;
    line-height: 40px;
    border-radius: 10px;
    background-color: gray;
    text-decoration: none;
    color: white;
    font-size: 18px;
    letter-spacing: 5px;
  }
  .navigate a.active {
    background-color: #64967e;
    color: #ffc268;
    font-weight: 900;
    text-shadow: 0 0 1px black;
    font-family: 微软雅黑;
  }
  .main-content {
    margin: 0 auto;
    margin-top: 30px;
    border-radius: 10px;
    width: 90%;
    height: 400px;
    border: 1px solid;
  }
</style>
