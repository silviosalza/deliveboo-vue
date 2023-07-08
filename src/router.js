import { createRouter, createWebHistory } from "vue-router";
// import Homepage from "./pages/Homepage.vue";
// import RestaurantList from "./pages/RestaurantList.vue";
// import RestaurantMenu from "./pages/RestaurantMenu.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import("./pages/Homepage.vue"),
        },
        {
            path: '/restaurants',
            name: 'restaurants',
            component: () => import("./pages/RestaurantList.vue"),
        },
        {

            path: '/restaurants/menu/:id',
            name: 'menu',
            component: import("./pages/RestaurantMenu.vue"),
        },
      
    ]
    });

    export {router};