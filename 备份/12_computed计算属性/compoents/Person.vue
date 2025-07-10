<template>
  <div class="person">
    姓：<input type="text" v-model="firName" /> <br />
    名：<input type="text" v-model="lastName" /><br />
    <button @click="changeFullName">将全名改为li-si</button> <br />
    <!-- 尽量让模板简单 违背VUE原则 -->
    <!-- 姓名：<span
      >{{ firName.slice(0, 1).toUpperCase() + firName.slice(1) }}-{{
        lastName
      }}</span> -->
    姓名：<span>{{ fullName }}</span> <br />
    姓名：<span>{{ fullName }}</span> <br />
    姓名：<span>{{ fullName }}</span> <br />
  </div>
</template>

<script setup lang="ts" name="Person">
  import { ref, computed } from "vue";
  //:value="firName"  单项绑定，只能由数据流回页面，无法从页面流回数据
  //v-model="firName" 双向绑定
  let firName = ref("zhang");
  let lastName = ref("san");
  //计算属性 方法参数为箭头函数
  //计算属性是有缓存的，函数是没有缓存的
  // //这么定义的fullName是只读的，不能修改
  // let fullName = computed(() => {
  //   console.log(1);
  //   return (
  //     firName.value.slice(0, 1).toUpperCase() +
  //     firName.value.slice(1) +
  //     "-" +
  //     lastName.value
  //   );
  // });
  //这么定义的fullName是可读可写
  let fullName = computed({
    get() {
      return (
        firName.value.slice(0, 1).toUpperCase() +
        firName.value.slice(1) +
        "-" +
        lastName.value
      );
    },
    set(val) {
      const [str1, str2] = val.split("-");
      firName.value = str1;
      lastName.value = str2;
      console.log("set" + val);
    },
  });
  //方法无缓存
  function fullName2() {
    console.log(2);
    return (
      firName.value.slice(0, 1).toUpperCase() +
      firName.value.slice(1) +
      "-" +
      lastName.value
    );
  }

  function changeFullName() {
    // console.log(fullName);
    fullName.value = "li-si";
  }
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
</style>
