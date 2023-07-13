<script>
import axios from 'axios';
import AppJumbotronSearch from '../components/AppJumbotronSearch.vue';
import AppMain from '../components/AppMain.vue';
import { RouterLink } from 'vue-router';
import { store } from '../store';
import RestaurantCard from '../components/RestaurantCard.vue';
import Pagination from '../components/Pagination.vue';
import Loader from '../components/Loader.vue';


export default {
    components: {
        AppJumbotronSearch,
        RouterLink,
        AppMain,
        Pagination,
        RestaurantCard,
        Loader
    },

    data() {
        return {
            restaurants: [],
            store,
            myUrl: 'http://localhost:8000',
            totalCategory: [],
            categoriesArray: [], //andranno inserite le categorie in maniera dinamica al click utente
            dishesArray: [],
            restaurant_id: 0,
            pages: {
                currentPage: 1,
                lastPage: null,
            },
            totalRestaurants: 0,
            loading:false
        }
    },
    methods: {

        getRestaurant(pageNumber = 1) {
            this.loading=true;
            console.log(this.categoriesArray);
            let params;
            if (this.categoriesArray) {
                params = {
                    page: pageNumber,
                    categories: this.categoriesArray // Supponendo che category sia un singolo ID di categoria
                };
            } else {
                params = {
                    page: pageNumber
                }
            }

            axios.get(`${this.myUrl}/api/restaurants`, { params })
                .then(response => {
                    this.restaurants = response.data.results.data;
                    this.pages.currentPage = response.data.results.current_page;
                    this.pages.lastPage = response.data.results.last_page;
                    this.totalRestaurants = response.data.results.total;
                    console.log(this.restaurants);
                    console.log(this.pages.currentPage);
                    console.log(this.pages.lastPage);
                    console.log(this.totalRestaurants);
                    this.loading=false;
                })
                .catch(error => {
                    console.error(error);
                });
        },
        getCategory() {
            this.loading=true;

            axios
                .get(`${this.myUrl}/api/categories`)
                .then(resp => {
                    this.totalCategory = resp.data.results;
                    this.loading=false;

                })
                .catch(error => {
                    console.error(error);
                });

        },

        clickutente(categoryId) {
            this.totalCategory.forEach(item => {
                if (item.id === categoryId) {
                    item.checked = !item.checked; // Inverte lo stato "checked"
                    if (item.checked) {
                        this.categoriesArray.push(categoryId);
                    } else {
                        const index = this.categoriesArray.indexOf(categoryId);
                        if (index > -1) {
                            this.categoriesArray.splice(index, 1);
                        }
                    }
                }
            });

            if (this.categoriesArray.length === 0) {
                // Se tutte le caselle di controllo sono deselezionate, mostra tutte le checkbox
                this.totalCategory.forEach(item => {
                    item.checked = false;
                });
            }

            this.getRestaurant();
        },
    },

    mounted() {
        this.getCategory();
        // this.clickutente();

    }
}
</script>

<template>
    <AppJumbotronSearch />
    <!-- test restaurant list in homepage -->

    <!-- Loading page -->
    <div v-if="true">
        <Loader />
    </div>

    <div v-else>

        <div class="ms-restaurants-btn-container d-flex justify-content-center">
            <button type="button" class="ms-restaurants-btn btn cube cube-hover" @click="clickutente()"
                :class="{ prova: isProva }">
                <div class="bg-top">
                    <div class="bg-inner"></div>
                </div>
                <div class="bg-right">
                    <div class="bg-inner"></div>
                </div>
                <div class="bg">
                    <div class="bg-inner"></div>
                </div>
                <a href="#rest_cards" class="text">Scopri tutti i nostri ristoranti</a>
            </button>

        </div>


        <section class="checkbox_container my-5 ">

            <div class="categ justify-content-center d-flex row row-cols-4">
                <div class="checkbox_btn col-6 col-md-3 col-sm-6 d-flex justify-content-center flex-column"
                    v-for="item, index in totalCategory" :key="index">
                    <label for="{{ item.id }}"></label>
                    <!-- <input type="checkbox" class="m-3" id="{{ item.id }}" @click="clickutente(item.id)" :checked="item.checked"> -->
                    <div class="text-center">
                        <img class="icon" :src="item.icon" alt="">
                    </div>
                    <button type="button" class="btn cube cube-hover" @click="clickutente(item.id)"
                        :class="{ prova: item.checked }" :checked="item.checked">
                        <div class="bg-top  " :class="{ prova2: item.checked }">
                            <div class="bg-inner " :class="{ prova: item.checked }"></div>
                        </div>
                        <div class="bg-right " :class="{ prova2: item.checked }">
                            <div class="bg-inner " :class="{ prova: item.checked }"></div>
                        </div>
                        <div class="bg " :class="{ prova2: item.checked }">
                            <div class="bg-inner " :class="{ prova: item.checked }"></div>
                        </div>
                        <div class="text" :class="{ prova: item.checked }">{{ item.category_name }}</div>
                    </button>
                </div>
            </div>
        </section>

        <div class="container mt-5">

            <div id="rest_cards" class="row rest_cards">
                <div class="col-6 col-md-4 col-lg-3 col-xl-2 col-sm-6 my-1 d-flex justify-content-center"
                    v-for="(element, index) in restaurants" :key="index">
                    <RestaurantCard @esegui-getDishes="getDishes(element.id)" :categoryIcon="totalCategory"
                        :restaurant="element" />
                </div>
            </div>

        </div>

        <!-- Handle pagination -->
        <Pagination :pages="pages" @dati="getRestaurant" />
        <!-- /Handle pagination -->
        <AppMain />
    </div>
</template>


<style lang="scss">
@use "../styles/general.scss" as *;
@use "../styles/utilities/variables" as *;



.container_categories {
    margin: 3rem 0;
}

.ms-restaurants-btn-container {
    margin-top: 5rem;

    .ms-restaurants-btn {
        height: 90px;
        width: 80%;
    }
}

.prova {
    color: #28282d !important;
    background: #d4af37 !important;
}

.prova2 {
    background: #28282d !important;
}

.checkbox_btn {
    max-width: 200px;
    min-width: 150px;
    margin: 0;
}

.rest_cards {
    margin-top: 7rem;
}

// MEDIA QUERIES
@include media-breakpoint-up(lg) {
    .ms-restaurants-btn-container {

        .ms-restaurants-btn {
            width: 60%;
        }
    }
}
</style>