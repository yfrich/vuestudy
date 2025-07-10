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
import Detail from "@/pages/Detail.vue";

//第二步 创建路由器
//制定路由的时候，要设定好工作模式
const router = createRouter({
  history: createWebHistory(), //路由器的工作模式稍后讲解
  routes: [
    //一个一个的路由规则
    {
      name: "zhuye",
      path: "/home",
      component: Home,
    },
    {
      name: "xinwen",
      path: "/news",
      component: News,
      children: [
        {
          name: "xiangqing",
          path: "detail",
          component: Detail,
          //第一种写法，将路由收到的所有的params参数 作为props传给路由组件
          // props: true,
          //第二种写法，函数写法 可以自己决定将什么作为props给路由组件 多数是使用query方式，params使用第一种
          props(qwe) {
            return qwe.query;
          },
          //第三种写法，对象写法， 很少用
          // props: {
          //   a: 100,
          //   b: 200,
          //   c: 300,
          // },
        },
      ],
    },
    {
      name: "guanyu",
      path: "/about",
      component: About,
    },
  ],
});

//第三步 暴露出去router
export default router;
