import { defineStore } from "pinia";
//命名
export const useCountstore = defineStore("count", {
  //状态,真正存储数据的地方
  state() {
    return {
      sum: 6,
    };
  },
});
