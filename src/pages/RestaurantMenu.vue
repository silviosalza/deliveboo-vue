<script>
import { store } from '../store';
export default {
    name: 'RestaurantMenu',
    data() {
        return {
            store
        }
    },
    methods: {
        updateStore(data) {
            let divElement = document.getElementById(`${data}`);
            let dishTitle = divElement.querySelector('#dish-title').innerHTML;
            let dishPrice = divElement.querySelector('#dish-price').innerHTML;
            let dishObject = {
                name: dishTitle,
                price: dishPrice
            }
            this.store.cartArray.push(dishObject);
            this.store.totalProducts += 1;
            this.store.totalPrice = this.store.totalPrice + parseFloat(dishPrice);
        }
    }
}
</script>
<template>
    <h1>Ristorante Menu</h1>
    <div id="1">
        <h2 id="dish-title">Titolo Card</h2>
        <h3 id="dish-price">5.25</h3>
        <button class="btn btn-primary" @click="updateStore(1)">Test Bottone</button>
    </div>
</template>