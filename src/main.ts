import './assets/main.css'

import { createApp } from 'vue'
import Vant from 'vant'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

// 先使用组件
app.use(Vant);// 全部引入

// 再执行挂载
app.mount('#app')


