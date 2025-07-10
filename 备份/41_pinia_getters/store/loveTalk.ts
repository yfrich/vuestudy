import { defineStore } from "pinia";
import axios from "axios";
import { nanoid } from "nanoid";
//命名
export const useTalkstore = defineStore("talk", {
  actions: {
    async getATalk() {
      // 发请求，下面这行的写法是：连续解构赋值+重命名
      let {
        data: { content: title },
      } = await axios.get("https://api.uomg.com/api/rand.qinghua?format=json"); //会有跨域问题，开始可以后续不行
      //把请求回来的字符串包装成对象
      let obj = { id: nanoid(), title };
      //放到数组中
      this.talkList.unshift(obj);
    },
  },
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
