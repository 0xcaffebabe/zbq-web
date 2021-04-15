import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import {
  createRouter, createWebHashHistory
} from 'vue-router'
import 'element-plus/lib/theme-chalk/index.css'

import LoginPage from '@/views/LoginPage.vue'
const routes = [
  { path: '/login', component: LoginPage }
]
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})
const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('body')
