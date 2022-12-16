import { createRouter, createWebHistory } from "vue-router";
import Home from '/views/Home.vue'
import About from '/views/About.vue'
import NotFound from '/views/NotFound.vue'
import ApprendreCode from '/views/ApprendreCode.vue'

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
    },
    {
        path : '/apprendreCode',
        name : 'apprendreCode',
        params:{
            username:""
        },
        component : ApprendreCode
    }
]


const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router