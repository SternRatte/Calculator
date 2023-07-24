import {createRouter, createWebHistory} from "vue-router";

export const router = createRouter({
    history: createWebHistory(),
    routes: [{
        name: 'Calculator',
        path: '/',
        component: () => import("@/components/Calculator.vue"),
    }, {
        name: 'History',
        path: '/history',
        component: () => import("@/components/History.vue"),
    },
    ]
})