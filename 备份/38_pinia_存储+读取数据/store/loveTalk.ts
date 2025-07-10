import { defineStore } from "pinia";
//命名
export const useTalkstore = defineStore("talk", {
  //状态,真正存储数据的地方
  state() {
    return {
      talkList: [
        { id: "01", title: "你今天有点怪" },
        { id: "02", title: "蓝莓、草莓" },
        { id: "03", title: "一块地" },
      ],
    };
  },
});
