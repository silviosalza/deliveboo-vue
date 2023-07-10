<script>
import axios from 'axios';
import { store } from '../store';
export default {
    name: 'RestaurantMenu',
    data() {
        return {
            store,
            dishesArray: [],
            myUrl: 'http://localhost:8000',


        }
    },
    methods: {
        updateStore(product) {
            const dishObject = {
                name: product.dish_name,
                price: parseFloat(product.price),
                count: 1,
                restaurant_id: product.restaurant_id,
                dish_id: product.id,
            };

            if (this.store.cartArray.length === 0) {
                this.store.cartArray.push(dishObject);
                this.store.totalProducts += 1;
                this.store.totalPrice += dishObject.price;
            } else {
                if (this.store.cartArray.some(item => item.name === product.dish_name)) {
                    const foundItems = this.store.cartArray.filter(item => item.name === product.dish_name);
                    const itemFounded = foundItems[0];
                    itemFounded.count += 1;
                    this.store.totalPrice += dishObject.price;
                } else if (this.store.cartArray[0].restaurant_id === dishObject.restaurant_id) {
                    this.store.cartArray.push(dishObject);
                    this.store.totalProducts += 1;
                    this.store.totalPrice += dishObject.price;
                } else {
                    alert('Non puoi aggiungere prodotti di un ristorante diverso');
                }
            }

            localStorage.setItem('cart', JSON.stringify(this.store.cartArray));
            localStorage.setItem('total', this.store.totalPrice);
            localStorage.setItem('products', this.store.totalProducts);
        },
        getDishes(restaurantId) {
            if (restaurantId) {
                const params = {
                    restaurant_id: restaurantId,
                };

                axios.get(`${this.myUrl}/api/dishes`, { params })
                    .then(response => {
                        this.dishesArray = response.data.results;
                    })
                    .catch(error => {
                        console.error(error);
                    });
            }
        },
    },
    mounted() {
        if (this.$route.params.id) {
            this.getDishes(this.$route.params.id);
        }
    },
};

</script>
<template>
    <div v-for="(product, index) in dishesArray" :key="index" class="card" :id="product.id" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 id="dish-title" class="card-title">{{ product.dish_name }}</h5>
            <p id="dish-price" class="card-text">{{ product.price }}</p>
            <p id="dish-restaurant-id">{{ product.restaurant_id }}</p>
            <p id="dish-id">{{ product.id }}</p>
            <button class="btn-primary" @click="updateStore(product.id)">Test Bottone</button>
        </div>
    </div>
</template>