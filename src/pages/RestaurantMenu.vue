<script>
import { store } from '../store';
import axios from 'axios';
import PaginationDish from '../components/PaginationDish.vue';
import Loader from '../components/Loader.vue';
import AppJumbotronSearch from '../components/AppJumbotronSearch.vue';
import ErrorMessage from '../components/ErrorMessage.vue';

export default {
    name: 'RestaurantMenu',
    components: {
        PaginationDish,
        Loader,
        AppJumbotronSearch,
        ErrorMessage
    },
    data() {
        return {
            store,
            dishesArray: [],
            myUrl: 'http://localhost:8000',
            // cartArray: [],
            pagesDishes: {
                currentPage: 1,
                lastPage: null,
            },
            totalDishes: 0,
            restaurantId: 0,
            loading: false,
            isError: false,
            errorChart: false
        }
    },
    methods: {
        updateStore(data) {
            this.errorChart = false;
            let divElement = document.getElementById(`${data}`);//punto di riferimento è l'id della card che sarà l'id del piatto
            let dishTitle = divElement.querySelector('#dish-title').innerHTML;//dalla card ricavo il nome del piatto
            let dishPrice = parseFloat(divElement.querySelector('#dish-price').innerHTML);//e il prezzo
            let dishId = divElement.querySelector('#dish-id').innerHTML;//dalla card ricavo id del piatto
            let dishRestaurantId = divElement.querySelector('#dish-restaurant-id').innerHTML;//dalla card ricavo id del ristorante
            let dishObject = {//dopodicchè creo un oggetto con nome del piatto, il suo prezzo e un counter che mi servirà
                name: dishTitle,//per contare quante volte è stato inserito nel carrello un singolo piatto
                price: dishPrice,
                count: 1,
                restaurant_id: dishRestaurantId,
                dish_id: dishId
            }
            console.log(dishId);

            //SOLUZIONE ALLA CARLONA
            // this.store.cartArray = this.cartArray;
            // console.log(this.cartArray);

            if (this.store.cartArray && this.store.cartArray.length === 0) {
                this.store.cartArray.push(dishObject);//lo inserisco nell'array
                this.store.totalProducts += 1;//incremento i prodotti presi di uno
                this.store.totalPrice = this.store.totalPrice + dishPrice;//calcola il totale

            } else {//altrimenti

                if (this.store.cartArray && this.store.cartArray.some(item => item.name === dishTitle)) {
                    //se nel carrello è già presente il piatto
                    let findItems = this.store.cartArray.filter(item => item['name'] === dishTitle);//cerco l'oggetto che ha come nome dishTitle (findItems risulterà un array)
                    let itemFounded = findItems[0];//lo assegno alla variabile itemFounded
                    itemFounded.count += 1;//incremento di uno il count dell'elemento
                    findItems = [];//svuoto l'array
                    this.store.totalPrice = this.store.totalPrice + dishPrice;//calcola il totale

                } else if (this.store.cartArray && this.store.cartArray[0].restaurant_id === dishObject.restaurant_id) {
                    this.store.cartArray.push(dishObject);//lo inserisco nell'array
                    this.store.totalProducts += 1;//incremento i prodotti presi di uno
                    this.store.totalPrice = this.store.totalPrice + dishPrice;//calcola il totale
                } else {
                    alert('Non puoi aggiungere prodotti di un ristorante diverso')
                    // this.errorChart = true;
                }
            }

            localStorage.setItem('cart', JSON.stringify(this.store.cartArray));//invio al localStorage ogni nuova versione aggiornata di cartArray
            localStorage.setItem('total', this.store.totalPrice);//stessa cosa per il totale dell'ordine
            localStorage.setItem('products', this.store.totalProducts);// e per il numero di prodotti
        },
        getDishes(page) {
            let params;
            this.loading = true;
            console.log(this.restaurantId);
            if (page !== 0) {
                params = {
                    page: page,
                    restaurant_id: this.$route.params.id
                }
                axios.get(`${this.myUrl}/api/dishes`, { params })
                    .then(response => {
                        console.log(response);
                        this.dishesArray = response.data.results.data;
                        this.pagesDishes.currentPage = response.data.results.current_page;
                        this.pagesDishes.lastPage = response.data.results.last_page;
                        this.totalDishes = response.data.results.total;
                        console.log(this.dishesArray);
                        console.log(this.pagesDishes.currentPage);
                        console.log(this.pagesDishes.lastPage);
                        console.log(this.totalDishes);
                        this.loading = false;
                    })
                    .catch(error => {
                        console.error(error);
                        this.loading = false;
                        this.isError = true;
                    });
            }
        }
    },
    mounted() {
        if (this.$route.params.id) {
            this.getDishes();
        }
    }
}

</script>


<template>
    <AppJumbotronSearch />
    <section class="d-flex justify-content-center flex-wrap gap-2 my-4">
        <h2 v-show="isError">Ci spiace, attualmente non ci sono piatti nel menu, riprova più tardi</h2>

        <!-- Loading page -->
        <div v-if="loading">
            <Loader />
        </div>

        <!-- Card Ristoranti -->
        <div v-else class="container d-flex flex-wrap gap-3 my-4 justify-content-center">
            <div v-for="(product, index) in dishesArray" :key="index" class="card card-dish col-lg-2 col-md-4 col-sm-6"
                :id="product.id">

                <!-- Gestione visibilità -->
                <div v-if="product.is_available" class="ms-card d-flex flex-column align-items-center">
                    <div v-if="product.img">
                        <img v-if="!product.img.includes('http')" :src="`${myUrl}/storage/${product.img}`"
                            class="ms-card-img" alt="...">
                    </div>

                    <img v-else src="../assets/img/logo-white.png" class="ms-card-img" alt="...">
                    <div class="card-body w-100 paper-effect">
                        <h5 id="dish-title" class="card-title text-center pt-1">{{ product.dish_name }}</h5>
                        <div class="d-flex justify-content-center price">
                            <p id="dish-price" class="card-text">{{ product.price.toFixed(2) }}</p>
                            <span>€</span>
                        </div>
                        <p class="ingredients text-center">{{ product.ingredients }}</p>
                        <p class="text-center">{{ product.description }}</p>
                        <!-- <p id="dish-restaurant-id" class="d-none">{{ product.restaurant_id }}</p> -->
                        <!-- <p id="dish-id" class="d-none">{{ product.id }}</p> -->
                        <div class="d-flex justify-content-center">
                            <span class="button d-flex align-items-center px-4 ms-add-btn"
                                @click="updateStore(product.id)">Aggiungi</span>
                        </div>
                    </div>
                </div>
                <!--/ Gestione visibilità -->


                <div v-else class="ms-card d-flex flex-column align-items-center">
                    <div v-if="product.img">
                        <img :src="`${myUrl}/storage/${product.img}`" class="ms-card-img" alt="...">
                    </div>
                    <img v-else src="../assets/img/logo-white - Copia - Copia.png" class="ms-card-img" alt="...">
                    <div class="card-body w-100 paper-effect">
                        <h5 id="dish-title" class="card-title text-center pt-1">{{ product.dish_name }}</h5>
                        <div class="d-flex justify-content-center price">
                            <p id="dish-price" class="card-text">{{ product.price.toFixed(2) }}</p>
                            <span>€</span>
                        </div>
                        <p class="ingredients text-center">{{ product.ingredients }}</p>
                        <p class="text-center">{{ product.description }}</p>

                        <!-- <p id="dish-restaurant-id" class="d-none">{{ product.restaurant_id }}</p> -->
                        <!-- <p id="dish-id" class="d-none">{{ product.id }}</p> -->
                        <div class="d-flex justify-content-center">
                            <span
                                class="button d-flex align-items-center px-4 text-decoration-line-through ms-add-btn-unavailable">Aggiungi</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <PaginationDish v-if="!loading" :pagesDishes="pagesDishes" @dati="getDishes" />
</template>

<style scoped lang="scss">
@use "../styles/general.scss" as *;
@use "../styles/utilities/variables" as *;

.card-dish {
    background-color: #d4ea98;
    position: relative;
}

.ms-card {
    background-color: #fffbda;
    cursor: pointer;
    font-style: italic;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding-top: 2px;

    box-shadow: 0 0 2px 2px #1a1a1a46;
    transition: box-shadow 0.25s ease-in;

    &:hover {
        box-shadow: 0 0 15px 5px #463c009b;
        transition: box-shadow 0.25s ease-out;
    }

    .ms-card-img {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        border-bottom: 3px solid #00808038;

        width: 98%;
    }

    .paper-effect {
        height: 100%;
        background-image: repeating-linear-gradient(white 0px, white 30px, #00808038 35px);
    }

    .ms-add-btn {
        background-color: #d4ea98;
        margin-bottom: 15px;
        border-radius: 5px;
        box-shadow: 0 4px 0 2px #2a2600;

        transform: translateY(0);
        transition: transform 0.1s ease-out;

        &:active {
            box-shadow: 0 2px 0 1px #2a2600;
            background-color: #9de85f;

            transform: translateY(2px);
            transition: transform 0.05s ease-in;
            transition: background-color 0.05s ease-out;

        }
    }

    .ms-add-btn-unavailable {
        background-color: #eac198;
        margin-bottom: 15px;
        border-radius: 5px;
        box-shadow: 0 4px 0 2px #2a2600;

        &:active {
            background-color: #e34141;
            transition: background-color 0.05s ease-out;
        }
    }
}

.card {
    background-color: #fffbda;
    border: 0;
    border-radius: 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    transform: scale(1);
    transition: all 0.25s ease-in-out;

    img {
        height: 200px;
        object-fit: cover;
    }

    .card-title,
    .price {
        font-size: 1.4rem;
    }

    height: fit-content;
    width: 80%;
    margin-bottom: 1.5rem;

    &:hover {
        transform: scale(1.05);
        transition: all 0.25s ease-in-out;
    }

    &:active {
        transform: scale(1.05);
    }

    .card-body {
        padding: 0;
        background-color: #fffbda;
    }
    
    .button {
        cursor: pointer;
        height: 60px;
        margin-top: 7px;
        border: 1px solid #2a2600;
        transition: all .2s;
        box-shadow: 0 4px 0 2px #2a2600;
        letter-spacing: 0.1em;
        font-family: monospace;
        font-size: 1.5rem;
        font-weight: bold;

        .button:hover {
            color: $app_color;
        }
    }
}

// MEDIA QUERIES
@include media-breakpoint-up(sm) {
    .card {
        width: calc(100% / 2 - 15px);
    }

    .paper-effect {
        background-image: repeating-linear-gradient(#fffbda 10px, #fffbda 32px, #008080 34px);
    }
}

@include media-breakpoint-up(md) {
    .card {
        width: calc(100% / 3 - 25px);
    }
}

@include media-breakpoint-up(lg) {

    .card {
        width: calc(100% / 4 - 25px);
    }
}
</style>