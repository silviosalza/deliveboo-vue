import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import("./pages/Homepage.vue"),
        },
        {

            path: '/restaurants/menu/:id',
            name: 'menu',
            component: () => import("./pages/RestaurantMenu.vue"),
        },
        {

            path: '/payment',
            name: 'payment',
            component: () => import("./pages/PaymentForm.vue"),

        },
        {

            path: '/thankyou',
            name: 'thanks',
            component: () => import("./pages/Thanks.vue"),
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: () => import("./components/NotFound.vue")
        }
    ]
});

export { router };