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
        <h2 v-show="isError">ERRORE, NON HAI CARICATO NULLA!!!!</h2>
        
        <!-- Errore se inserisco da piu ristoranti -->
        <!-- <div v-show="errorChart">
            <ErrorMessage/>
        </div> -->
        <!-- Loading page -->
        <div v-if="loading">
            <Loader />
        </div>

        <!-- Card Ristoranti -->
        <div v-else class="container d-flex flex-wrap gap-2 my-4 justify-content-center">
            <div v-for="(product, index) in dishesArray" :key="index" class="card card-dish col-lg-2 col-md-4 col-sm-6"
                :id="product.id">

                <!-- Gestione visibilità -->
                <div v-if="product.is_available">
                    <img v-if="!product.img.includes('http')" :src="`${myUrl}/storage/${product.img}`" class="card-img-top"
                        alt="...">
                    <img v-else src="../assets/img/logo-white.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 id="dish-title" class="card-title text-center">{{ product.dish_name }}</h5>
                        <div class="d-flex justify-content-center price">
                            <p id="dish-price" class="card-text">{{ product.price.toFixed(2) }}</p>
                            <span>€</span>
                        </div>
                        <p id="dish-restaurant-id" class="d-none">{{ product.restaurant_id }}</p>
                        <p id="dish-id" class="d-none">{{ product.id }}</p>
                        <div class="d-flex justify-content-center">
                            <span class="button d-flex align-items-center px-4"
                                @click="updateStore(product.id)">Aggiungi</span>
                        </div>
                    </div>
                </div>
                <!--/ Gestione visibilità -->

                <div v-else>
                    <img src="https://edicolablack.altervista.org/wp-content/uploads/2019/11/ProdottoEsaurito.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 id="dish-title" class="card-title text-center">{{ product.dish_name }}</h5>
                        <div class="d-flex justify-content-center price">
                            <p id="dish-price" class="card-text">{{ product.price.toFixed(2) }}</p>
                            <span>€</span>
                        </div>
                        <p id="dish-restaurant-id" class="d-none">{{ product.restaurant_id }}</p>
                        <p id="dish-id" class="d-none">{{ product.id }}</p>
                        <div class="d-flex justify-content-center">
                            <span class="button d-flex align-items-center px-4 text-decoration-line-through">Aggiungi</span>
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


.card {

    img {
        height: 200px;
        object-fit: cover;
    }

    .card-title,
    .price {
        font-size: 1.4rem;
    }

    height: 10rem;
    width: 14rem;
    margin-bottom: 13rem;
    box-shadow: 5px 5px 2px 1px rgba(224, 204, 24, .2);

    &:hover {
        transform: scale(1.02);
        transition: all .2s ease-in-out;
    }

    .card-body {
        padding: 0;
        background-color: rgb(237, 201, 0, 0.1);
    }

    .button {
        cursor: pointer;
        height: 60px;
        margin-top: 10px;
        border: 1px solid rgb(224, 204, 24);
        transition: all .2s;
        box-shadow: 5px 5px 2px 1px rgba(224, 204, 24, .2);
        letter-spacing: 0.1em;
        font-family: monospace;
        font-size: 1.5rem;
        font-weight: bold;

        .button:hover {
            box-shadow: -5px 5px 2px -1px rgba(224, 204, 24, .2);
            color: $app_color;
        }
    }
}
</style>