import { defineStore } from "pinia";
//命名
export const useCountstore = defineStore("count", {
  //里面放置的是一个一个的方法，用于响应组件中的“动作”。
  actions: {
    increment(value: number) {
      console.log("increment被调用了", value);
      if (this.sum < 10) {
        //如何修改数据
        //   console.log(this);
        this.sum += value;
      }
    },
  },
  //状态,真正存储数据的地方
  state() {
    return {
      sum: 2,
      school: "sanxiao",
      address: "黑龙江",
    };
  },
});
