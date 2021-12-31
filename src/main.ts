import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { router } from './router'
import vClickout from 'vue3-clickout'
import 'github-markdown-css'

const app = createApp(App)
app.use(router)
app.use(vClickout)
app.mount('#app')
// 全局注册markdown容器组件
