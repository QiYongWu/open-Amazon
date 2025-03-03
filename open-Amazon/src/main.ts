//import './assets/main.css'
import './styles/app/app.css'
import './styles/header/header.css'
import './styles/main/main.css'
import './styles/body/body.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import {createPinia} from 'pinia'


//创建一个应用
const app = createApp(App);

//创建pinia
const pinia  = createPinia();

//使用路由器
app.use(router);

//使用pinia
app.use(pinia);

//将路由器挂载到#app
app.mount('#app');
