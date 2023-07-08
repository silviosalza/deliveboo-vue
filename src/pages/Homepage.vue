<script>
import axios from 'axios';
import AppJumbotronSearch from '../components/AppJumbotronSearch.vue';
import AppMain from '../components/AppMain.vue';
import { RouterLink } from 'vue-router';


export default {
    components: { AppJumbotronSearch, RouterLink, AppMain },

    data() {
        return {
            restaurants: [],
        }
    },
    methods: {
        getRestaurant(pageNumber = 1, category = 1) {
            let params = {
                page: pageNumber,
                categories: category

            }

            axios.get(`${this.myUrl}/api/restaurants`, { params }).then(resp => {
                console.log('ciao');
                console.log(resp);
                this.restaurants = resp.data.results.data;
            })
        }
    },


}


</script>

<template>
    <AppJumbotronSearch />

    <div class="container_categories">

        <div class="container d-flex justify-content-center">
            <div class="row d-flex justify-content-center">
                <div class="col-6 col-md-3 col-sm-6 d-flex justify-content-center flex-column">
                    <div class="text-center">
                        <img class="icon" src="../assets/img/burgericon.png" alt="">
                    </div>
                    <router-link :to="{ name: 'restaurants' }" type="button" class="btn cube cube-hover">
                        <div class="bg-top">
                            <div class="bg-inner"></div>
                        </div>
                        <div class="bg-right">
                            <div class="bg-inner"></div>
                        </div>
                        <div class="bg">
                            <div class="bg-inner"></div>
                        </div>
                        <div class="text">Hamburger</div>
                    </router-link>
                </div>
                <div class="col-6 col-md-3 col-sm-6 d-flex justify-content-center flex-column">
                    <div class="text-center">
                        <img class="icon" src="../assets/img/pastaicon.png" alt="">
                    </div>
                    <router-link :to="{ name: 'restaurants' }" type="button" class="btn cube cube-hover" >
                        <div class="bg-top">
                            <div class="bg-inner"></div>
                        </div>
                        <div class="bg-right">
                            <div class="bg-inner"></div>
                        </div>
                        <div class="bg">
                            <div class="bg-inner"></div>
                        </div>
                        <div class="text">Mediterranea</div>
                    </router-link>
                </div>
                <div class="col-6 col-md-3 col-sm-6 d-flex justify-content-center flex-column">
                    <div class="text-center">
                        <img class="icon" src="../assets/img/orientalicon.png" alt="">
                    </div>
                    <router-link :to="{ name: 'restaurants' }" type="button" class="btn cube cube-hover">
                        <div class="bg-top">
                            <div class="bg-inner"></div>
                        </div>
                        <div class="bg-right">
                            <div class="bg-inner"></div>
                        </div>
                        <div class="bg">
                            <div class="bg-inner"></div>
                        </div>
                        <div class="text">Orientale</div>
                    </router-link>
                </div>
                <div class="col-6 col-md-3 col-sm-6 d-flex justify-content-center flex-column">
                    <div class="text-center">
                        <img class="icon" src="../assets/img/pizzaicon.png" alt="">
                    </div>
                    <router-link :to="{ name: 'restaurants' }" type="button" class="btn cube cube-hover">
                        <div class="bg-top">
                            <div class="bg-inner"></div>
                        </div>
                        <div class="bg-right">
                            <div class="bg-inner"></div>
                        </div>
                        <div class="bg">
                            <div class="bg-inner"></div>
                        </div>
                        <div class="text">Pizza</div>
                    </router-link>
                </div>
            </div>
        </div>

        <div class="container d-flex justify-content-center">
            <div class="row d-flex justify-content-center">
                <div class="col-6 col-md-3 col-sm-6 d-flex justify-content-center flex-column">
                    <div class="text-center">
                        <img class="icon" src="../assets/img/sushiicon.png" alt="">
                    </div>
                    <router-link :to="{ name: 'restaurants' }" type="button" class="btn cube cube-hover">
                        <div class="bg-top">
                            <div class="bg-inner"></div>
                        </div>
                        <div class="bg-right">
                            <div class="bg-inner"></div>
                        </div>
                        <div class="bg">
                            <div class="bg-inner"></div>
                        </div>
                        <div class="text">Sushi</div>
                    </router-link>
                </div>
                <div class="col-6 col-md-3 col-sm-6 d-flex justify-content-center flex-column">
                    <div class="text-center">
                        <img class="icon" src="../assets/img/vegicon.png" alt="">
                    </div>
                    <router-link :to="{ name: 'restaurants' }" type="button" class="btn cube cube-hover">
                        <div class="bg-top">
                            <div class="bg-inner"></div>
                        </div>
                        <div class="bg-right">
                            <div class="bg-inner"></div>
                        </div>
                        <div class="bg">
                            <div class="bg-inner"></div>
                        </div>
                        <div class="text">Veggy</div>
                    </router-link>
                </div>
                <div class="col-6 col-md-3 col-sm-6 d-flex justify-content-center flex-column">
                    <div class="text-center">
                        <img class="icon" src="../assets/img/hawainicon.png" alt="">
                    </div>
                    <router-link :to="{ name: 'restaurants' }" type="button" class="btn cube cube-hover">
                        <div class="bg-top">
                            <div class="bg-inner"></div>
                        </div>
                        <div class="bg-right">
                            <div class="bg-inner"></div>
                        </div>
                        <div class="bg">
                            <div class="bg-inner"></div>
                        </div>
                        <div class="text">Pokè</div>
                    </router-link>
                </div>
                <div class="col-6 col-md-3 col-sm-6 d-flex justify-content-center flex-column">
                    <div class="text-center">
                        <img class="icon" src="../assets/img/desserticon.png" alt="">
                    </div>
                    <router-link :to="{ name: 'restaurants' }" type="button" class="btn cube cube-hover">
                        <div class="bg-top">
                            <div class="bg-inner"></div>
                        </div>
                        <div class="bg-right">
                            <div class="bg-inner"></div>
                        </div>
                        <div class="bg">
                            <div class="bg-inner"></div>
                        </div>
                        <div class="text">Dessert</div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>

    <AppMain />
</template>


<style lang="scss">
@use "../styles/general.scss" as *;
@use "../styles/utilities/variables" as *;

.container_categories {

    margin: 3rem 0;
}
</style>