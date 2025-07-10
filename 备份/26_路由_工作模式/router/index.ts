//创建一个路由器，并暴露出去
//第一步 引入
import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
//引入一个一个可能要呈献的组件
import Home from "@/pages/Home.vue";
import News from "@/pages/News.vue";
import About from "@/pages/About.vue";

//第二步 创建路由器
//制定路由的时候，要设定好工作模式
const router = createRouter({
  history: createWebHashHistory(), //路由器的工作模式稍后讲解
  routes: [
    //一个一个的路由规则
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/news",
      component: News,
    },
    {
      path: "/about",
      component: About,
    },
  ],
});

//第三步 暴露出去router
export default router;
