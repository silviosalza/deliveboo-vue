<script>
import axios from 'axios';
import AppJumbotronSearch from '../components/AppJumbotronSearch.vue';
import RestaurantCard from '../components/RestaurantCard.vue';


export default {
    // props: {
    //     restaurant: Object,
    //     categoryArray: Array,
    // },

    components: {
        AppJumbotronSearch,
        RestaurantCard
    },

    data() {
        return {
            myUrl: 'http://localhost:8000',
            restaurants: [],
            totalCategory: [],
            categoriesArray: [], //andranno inserite le categorie in maniera dinamica al click utente
            dishesArray: [],
            restaurant_id : 0
        }
    },
    mounted() {
        this.getRestaurant();
        this.getCategory();
        this.clickutente();
    },

    methods: {
        getRestaurant(pageNumber = 1) {
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
                    console.log(this.restaurants);
                })
                .catch(error => {
                    console.error(error);
                });
        },
        getCategory() {
            axios
                .get(`${this.myUrl}/api/categories`)
                .then(resp => {
                    this.totalCategory = resp.data.results;
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

        //  getDishes(pippo){
        //      let params = null;
        //      if (pippo){
        //          params = {
        //                  restaurant_id: pippo
        //          }
        //      }
        //      console.log(pippo);
        //      axios.get(`${this.myUrl}/api/dishes`, {params})
        //          .then(response => {
        //              this.dishesArray = response.data.results;
        //              console.log(this.dishesArray);
        //          })
        //          .catch(error => {
        //              console.error(error);
        //          });

        //  }

    }

}

</script>


<template>
    <AppJumbotronSearch />
    <!-- <button @click="getCategory()">dammi tutte le categorie</button> -->
    <section class="container">

        <div class="categ justify-content-center d-flex row row-cols-4">
            <div class="checkbox_btn col-6 col-md-1 col-sm-6 d-flex justify-content-center flex-column"
                v-for="item, index in totalCategory" :key="index">
                <label for="{{ item.id }}"></label>
                <input type="checkbox" class="m-3" id="{{ item.id }}" @click="clickutente(item.id)" :checked="item.checked">
                <button type="button" class="btn cube cube-hover" @click="clickutente(item.id)" :checked="item.checked">
                    <div class="bg-top">
                        <div class="bg-inner"></div>
                    </div>
                    <div class="bg-right">
                        <div class="bg-inner"></div>
                    </div>
                    <div class="bg">
                        <div class="bg-inner"></div>
                    </div>
                    <div class="text">{{ item.category_name }}</div>
                </button>
            </div>
        </div>


        <div class="row rest_cards">
            <div class="col-6 col-md-4 col-lg-3 col-xl-2 col-sm-6 my-1 d-flex justify-content-center" v-for="(element, index) in restaurants" :key="index">
                <RestaurantCard @esegui-getDishes="getDishes(element.id)" :categoryIcon="totalCategory" :restaurant="element"/>
            </div>
        </div>
    </section>
</template>


<style scoped lang="scss">
@use "../styles/general.scss" as *;
@use "../styles/utilities/variables" as *;

.checkbox_btn {
    max-width: 200px;
    min-width: 150px;
    margin: 0 6px;
}

.rest_cards {
    margin-top: 4rem;
    margin-bottom: 4rem;
}
</style>
