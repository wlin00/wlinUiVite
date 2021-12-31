import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { router } from './router'
import 'github-markdown-css'

const app = createApp(App)
app.use(router)
app.mount('#app')
// 全局注册markdown容器组件
