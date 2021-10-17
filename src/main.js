import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// element-plus
import 'element-plus/dist/index.css'

// 全局 scss
import './styles/global.scss'

// svg icon

import SvgIcon from './components/SvgIcon.vue'
import 'virtual:svg-icons-register'

// 实例
const app = createApp(App)

// 全局组件
app.component('SvgIcon', SvgIcon)
// 路由
app.use(router)
// 挂载
app.mount('#app')
