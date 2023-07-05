import { createApp } from 'vue';
import App from './App.vue';
import './cart.js';
import { router } from './router';

createApp(App).use(router).mount('#app');
