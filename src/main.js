import { createApp } from 'vue'
//import './style.css'
import App from './App.vue'
import '../css/index.css'
import route from './router/index.js'

createApp(App).use(route).mount('#app')

