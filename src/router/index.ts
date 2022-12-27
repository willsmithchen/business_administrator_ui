import {createRouter, createWebHistory} from "vue-router";
import login from '../view/Login.vue'
import register from '../view/Register.vue'

const routes = [
    {
        path: '/',
        name: 'login',
        component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component:() => import('../view/404.vue')
    }
];
/**
 * 定义返回的模块
 */
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});
export default router