import { createRouter, createWebHistory } from "vue-router";
import Home from '../pages/views/Home.vue'
import About from '../pages/views/About.vue'
import NotFound from '../pages/views/NotFound.vue'

const routes = [
    {
        path : '/',
        name : 'home',
        params:{
            username:""
        },
        component : Home
    },
    {
        path : '/about',
        name : 'about',
        params:{
            username:""
        },
        component: About
    },
    {
        path : '/error',
        name : 'error',
        params:{
            username:""
        },
        component : NotFound
    }
]


const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router