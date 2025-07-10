import { createApp } from "vue";
import App from "./App.vue";
import Hello1 from "./Hello1.vue";
// 创建应用
const app = createApp(App);
//全局组件注册 对比vue2的`app.component`
app.component("Hello1", Hello1);

//不推荐使用，对比vue2的：`app.config`
app.config.globalProperties.x = 99;
//解决全局变量导致ts检查不过问题
declare module "vue" {
  interface ComponentCustomProperties {
    x: number;
    $translate: (key: string) => string;
  }
}
//全局指令，对比vue2的`app.directive`
app.directive("beauty", (element, { value }) => {
  element.innerText += value;
  element.style.color = "green";
  element.style.backgroundColor = "yellow";
});
// 挂载应用
app.mount("#app");

// setTimeout(() => {
//   //卸载组件
//   app.unmount();
// }, 3000);
