import { customRef } from "vue";
//使用Vue默认提供的ref定义响应式数据，数据一变化，页面及试图进行刷新
// let msg = ref("你好");
//使用Vue提供的customRef定义响应式数据
//需求 当我在你好后面添加数字6 后 显示内容等待1s后再更新
export default function (initValue: string, dealy: number) {
  //   let initValue = "你好";
  let timer: number;
  //track:跟踪;trigger:触发
  let msg = customRef((track, trigger) => {
    return {
      //get 何时调用，msg被读取时
      get() {
        track(); //告诉Vue数据msg很重要，你要对msg进行持续关注。一旦msg变化就去更新
        return initValue;
      },
      //set 何时调用，msg被修改时
      set(value) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          initValue = value;
          trigger(); //通知Vue一下数据msg变化了
        }, dealy);
      },
    };
  });
  return { msg };
}
