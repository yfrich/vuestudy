//引入createApp 用于创建应用
import { createApp } from "vue";
//引入根组件
import App from "./App.vue";
//创建一个应用基于根组件，并且放置到#app元素中
createApp(App).mount("#app");
