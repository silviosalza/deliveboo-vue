import { createRouter, createWebHistory } from "vue-router";
import Homepage from "./pages/Homepage.vue";
import RestaurantList from "./pages/RestaurantList.vue";
import RestaurantMenu from "./pages/RestaurantMenu.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Homepage,
        },
        {
            path: '/restaurants',
            name: 'restaurants',
            component: RestaurantList,
        },
        {
            //! DA CONTROLLARE
            path: '/restaurants/menu',
            name: 'menu',
            component: RestaurantMenu,
        },
      
    ]
    });

    export {router};