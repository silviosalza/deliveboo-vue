<script>
import { charStore } from '../cart';
export default {
    name: 'RestaurantMenu',
    props: {
        cartItems: Array
    },
    data() {
        return {
            cartArray: [],
        }
    },
    mounted() {
        charStore = this.cartArray;
    },
    methods: {
        prova() {
            let nameProd = document.querySelector('.product-name').innerHTML;
            let priceProd = document.querySelector('.product-price').innerHTML;
            let prodItem = {
                name: nameProd,
                price: priceProd
            };
            this.cartArray.push(prodItem);
            console.log('Nome: ', nameProd, ' prezzo: ', priceProd);
        }
    }
}
</script>
<template>
    <h1>Ristorante Menu</h1>
    <div class="product-card my-4">
        <h4 class="product-name">Product name</h4>
        <h5 class="product-price">5.00</h5>
        <button class="btn btn-primary" @click="prova" id="add-to-cart">Add to cart</button>
    </div>
</template>