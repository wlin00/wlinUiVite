import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import SwitchDemo from "./components/SwitchDemo.vue";
import ButtonDemo from "./components/ButtonDemo.vue";
import DialogDemo from "./components/DialogDemo.vue";
import TabsDemo from "./components/TabsDemo.vue";
import { createRouter, createWebHashHistory } from "vue-router";
//@ts-ignore
import { h } from 'vue';

const history = createWebHashHistory();
const md = (fileName) => h('MarkDownWrap', { key: fileName, path: `./markdown/${fileName}.md` });
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
        { path: 'intro', md('intro')},
        { path: 'install', component: () => h('MarkDownWrap', {key: './markdown/install', path: './markdown/install' }) },
        { path: 'start', component:() => h('MarkDownWrap', {key: './markdown/start', path: './markdown/install' }) },

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