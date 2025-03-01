//import './assets/main.css'
import './styles/app/app.css'
import './styles/header/header.css'
import './styles/main/main.css'
import './styles/body/body.css'
import { createApp } from 'vue'
import App from './App.vue'



//创建一个应用
const app = createApp(App);

//使用路由器


//将路由器挂载到#app
app.mount('#app');
