<script>
import { store } from '../store';
import axios from 'axios';
import PaginationDish from '../components/PaginationDish.vue';

export default {
    name: 'RestaurantMenu',
    components: {
        PaginationDish,
    },
    data() {
        return {
            store,
            dishesArray: [],
            myUrl: 'http://localhost:8000',
            cartArray: [],
            pagesDishes: {
                currentPage: 1,
                lastPage: null,
            },
            totalDishes: 0,
            restaurantId: 0,
            loading: false

        }
    },
    methods: {
        updateStore(product) {
            const dishObject = {
                name: product.dish_name,
                price: parseFloat(product.price),
                count: 1,
                restaurant_id: product.restaurant_id,
                dish_id: product.id
            };

            if (this.store.cartArray.length === 0) {
                this.store.cartArray.push(dishObject);
                this.store.totalProducts += 1;
                this.store.totalPrice += dishObject.price;
            } else {
                const foundItem = this.store.cartArray.find(item => item.name === dishObject.name);
                if (foundItem) {
                    foundItem.count += 1;
                } else if (this.store.cartArray[0].restaurant_id === dishObject.restaurant_id) {
                    this.store.cartArray.push(dishObject);
                    this.store.totalProducts += 1;
                    this.store.totalPrice += dishObject.price;
                } else {
                    alert('Non puoi aggiungere prodotti di un ristorante diverso');
                }
            }
            localStorage.setItem('cart', JSON.stringify(this.store.cartArray));//invio al localStorage ogni nuova versione aggiornata di cartArray
            localStorage.setItem('total', this.store.totalPrice);//stessa cosa per il totale dell'ordine
            localStorage.setItem('products', this.store.totalProducts);// e per il numero di prodotti
        },
        getDishes(page) {
            
            if (page !== 0) {
                const params = {
                    page: page,
                    restaurant_id: this.$route.params.id
                };

                axios.get(`${this.myUrl}/api/dishes`, { params })
                    .then(response => {
                        this.dishesArray = response.data.results.data;
                        this.pagesDishes.currentPage = response.data.results.current_page;
                        this.pagesDishes.lastPage = response.data.results.last_page;
                        this.totalDishes = response.data.results.total;

                    })
                    .catch(error => {
                        console.error(error);
                    });
            }
        }
    },
    mounted() {
        if (this.$route.params.id) {
            this.getDishes();
        }
    }
};
</script>


<template>

    <section class="d-flex flex-wrap gap-2 my-4 container">
        <div v-for="(product, index) in dishesArray" :key="index" class="card card-dish" :id="product.id"
            style="width: 18rem;">
            <img v-if="!product.img.includes('http')" :src="`${myUrl}/storage/${product.img}`" class="card-img-top"
                alt="...">
            <img v-else
                src="https://cdn3.vectorstock.com/i/1000x1000/31/47/404-error-page-not-found-design-template-vector-21393147.jpg"
                class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ product.dish_name }}</h5>
                <p class="card-text">{{ product.price }}</p>
                <button class="btn-primary" @click="updateStore(product)">Test Bottone</button>
            </div>
        </div>
    </section>

    <!-- handle pagination -->
    <PaginationDish :pagesDishes="pagesDishes" @dati="getDishes" />
</template>

<style scoped lang="scss">
.loading {
    height: 60vh;

    .load {
        padding-top: 350px;
    }
}

.card-dish {
    width: calc(100% / 4);
}
</style>