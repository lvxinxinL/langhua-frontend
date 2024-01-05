import './assets/main.css'

import { createApp } from 'vue'
import {Icon, NavBar, Tabbar, Toast} from 'vant';
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

// 先使用组件
app.use(NavBar);// 顶部导航栏组件
app.use(Icon);// 图标组件
app.use(Tabbar);// 底部标签栏

// 再执行挂载
app.mount('#app')


