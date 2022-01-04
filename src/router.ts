import Home from "../src/views/Home.vue";
import Doc from "./views/Doc.vue";
import SwitchDemo from "./components/SwitchDemo.vue";
import ButtonDemo from "./components/ButtonDemo.vue";
import DialogDemo from "./components/DialogDemo.vue";
import TabsDemo from "./components/TabsDemo.vue";

import Intro from "./markdown/intro.vue";
import Install from "./markdown/install.vue";
import Start from "./markdown/start.vue";

import { createRouter, createWebHashHistory } from "vue-router";
//@ts-ignore
import { h } from 'vue';
import MarkDownWrap from './components/MarkDownWrap.vue';
const history = createWebHashHistory();
// 用于动态渲染md文件
const md = (fileName: String) => h(MarkDownWrap, { key: fileName, path: `../markdown/${fileName}.md` });
export const router = createRouter({
  history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc',
      component: Doc,
      redirect: '/doc/intro',
      children: [
        // 介绍 - 安装 - 开始
        // { path: 'intro', component: ) },
        // { path: 'install', component: md('intro') },
        // { path: 'start', component: md('intro') },

        { path: 'intro', component: Intro },
        { path: 'install', component: Install },
        { path: 'start', component: Start },

        { path: 'switch', component: SwitchDemo },
        { path: 'button', component: ButtonDemo },
        { path: 'dialog', component: DialogDemo },
        { path: 'tabs', component: TabsDemo },
      ],
    }
  ]
})
// router.afterEach(() => {
// })