import { defineStore } from "pinia";
import axios from "axios";
import { nanoid } from "nanoid";
import { reactive } from "vue";
//命名
// export const useTalkstore = defineStore("talk", {
//   actions: {
//     async getATalk() {
//       // 发请求，下面这行的写法是：连续解构赋值+重命名
//       try {
//         console.log("无异常时的this：", this);

//         let {
//           data: { content: title },
//         } = await axios.get(
//           "https://api.uomg.com/api/rand.qinghua?format=json"
//         ); //会有跨域问题，开始可以后续不行
//         //把请求回来的字符串包装成对象
//         let obj = { id: nanoid(), title };
//         //放到数组中
//         this.talkList.unshift(obj);
//       } catch (error) {
//         console.log("异常时的this：", this);

//         this.talkList.unshift({ id: nanoid(), title: `我失败了${new Date()}` });
//       }
//     },
//   },
//   //状态,真正存储数据的地方
//   state() {
//     return {
//       //|| 判断，
//       talkList: JSON.parse(localStorage.getItem("talkList") as string) || [],
//     };
//   },
// });

export const useTalkstore = defineStore("talk", () => {
  //此写法类似于setup
  //talkList就是state
  const talkList = reactive(
    JSON.parse(localStorage.getItem("talkList") as string) || []
  );
  //getATalk函数相当于action
  async function getATalk() {
    // 发请求，下面这行的写法是：连续解构赋值+重命名
    try {
      let {
        data: { content: title },
      } = await axios.get("https://api.uomg.com/api/rand.qinghua?format=json"); //会有跨域问题，开始可以后续不行
      //把请求回来的字符串包装成对象
      let obj = { id: nanoid(), title };
      //放到数组中
      talkList.unshift(obj);
    } catch (error) {
      talkList.unshift({ id: nanoid(), title: `我失败了${new Date()}` });
    }
  }
  return { talkList, getATalk };
});
