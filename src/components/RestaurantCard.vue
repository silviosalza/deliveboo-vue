<script>
import axios from 'axios';

export default {
    name: "RestaurantCard",
    props: {
        restaurant: Object,
        categoryIcon: Array,
    },
    data() {
        return {
            myUrl: 'http://localhost:8000',
            restaurants: [],
            totalCategory: [],
            dishesArray: []
        }
    },

    methods: {
        eseguiGetDishes() {
      this.$emit('esegui-getDishes');
    },    
}
}

</script>



<template>
    <div class="card restaurant_card text-center">
        <div v-if="!restaurant.thumb">
            <img src="../assets/img/logo-white.png" class="card-img-top" alt="..." >
        </div>
        <div v-else>
            <img  :src="`${myUrl}/storage/${restaurant.thumb}`" class="card-img-top" alt="..." >
        </div>
        <h4 class="pt-2">{{ restaurant.restaurant_name }}</h4>
        <div class="card-body d-flex justify-content-center">
            <div v-for="(element, index) in restaurant.categories" :key="index">
                <img v-if="element.icon" class="rest_icon" :src="element.icon" alt="">
            </div>
        </div>
        <router-link :to="{ name: 'menu', params:{id:restaurant.id} }" class="button menu_text text-center" >Menu</router-link>
    </div>




    <!-- <div class="restaurant_card d-flex justify-content-center align-items-center">
        <div class="rest_name d-flex justify-content-center align-items-center ">
            <h4>{{ restaurant.restaurant_name }}</h4>
            <div v-for="(element, index) in restaurant.categories" :key="index">
                <img v-if="element.icon" class="rest_icon" :src="element.icon" alt="">

            </div>
        </div>

    </div> -->
</template>



<style scoped lang="scss">
@use "../styles/general.scss" as *;
@use "../styles/utilities/variables" as *;

.card {
    height: 12rem;
    width: 13rem;
    margin-bottom: 11rem;
    box-shadow: 5px 5px 2px 1px rgba(224, 204, 24, .2);
    &:hover{
        transform: scale(1.02);
        transition: all .2s ease-in-out;
    }
    .card-body{
        padding: 0;
    }


    .rest_icon {
        width: 50px;
    }

    .button {
        height: 60px;
        font-size: 0.8rem;
        margin-top: 10px;
        border: 1px solid rgb(224, 204, 24);
        transition: all .2s;
        box-shadow: 5px 5px 2px 1px rgba(224, 204, 24, .2);
        letter-spacing: 0.1em;
        font-family: monospace;
        font-size: 2rem;
        font-weight: bold;
    }

    .button:hover {
        box-shadow: -5px 5px 2px -1px rgba(224, 204, 24, .2);
        color: $app_color;
    }
}

.logo_rest {
    width: 150px;
}
</style>