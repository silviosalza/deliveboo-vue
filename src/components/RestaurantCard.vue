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
    <div class="card ms-card text-center">
        <div v-if="!restaurant.thumb">
            <img src="../assets/img/logo-white.png" class="ms-card-img" alt="..." >
        </div>
        <div v-else>
            <img  :src="`${myUrl}/storage/${restaurant.thumb}`" class="ms-card-img" alt="..." >
        </div>
        <div class="paper-effect">
            <h4 class="pt-2">{{ restaurant.restaurant_name }}</h4>

            <div class="card-body d-flex justify-content-center">

                <div v-for="(element, index) in restaurant.categories" :key="index">
                    <img v-if="element.icon" class="rest_icon" :src="element.icon" alt="">
                </div>
            </div>

            <router-link :to="{ name: 'menu', params:{id:restaurant.id} }" class="button ms-rest-btn text-center d-flex justify-content-center align-content-center" ><span>Menu</span></router-link>
        </div>
    </div>
</template>



<style scoped lang="scss">
@use "../styles/general.scss" as *;
@use "../styles/utilities/variables" as *;

.ms-card {
    background-color: #fffef2;
    cursor: pointer;
    font-style: italic;
    padding-top: 2px;
    box-shadow: 0 0 2px 2px #1a1a1a46;
    transition: box-shadow 0.25s ease-in;
    height: 420px;

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

    .ms-rest-btn {
        height: fit-content;
        padding: 10px 0;
        width: 45%;
        background-color: #ffc107;
        margin: 0 auto 15px auto;
        border-radius: 5px;
        box-shadow: 0 4px 0 0 #2a2600;
        text-shadow: none;
        
        transform: translateY(0);
        transition: all 0.1s ease-out;

        &:hover {
            background-color: #a4d513;
            transform: translateY(-2px);
            box-shadow: 0 6px 0 0 #2a2600;
            transition: all 100ms ease-out;
            text-shadow: 0 0 8px #fffbda;
            color: #ffeb57;
        }

        &:active {
            box-shadow: 0 2px 0 0 #2a2600;
            background-color: #ffe188;
            color: #000000;

            transform: translateY(2px);
            transition: transform 0.1s ease-in;
            transition: background-color 0.1s ease-out;
            transition: color 0.1s ease-out;

        }

        span {
            height: fit-content;
        }
    }

}
.paper-effect {
    height: 100%;
    display: flex;
    flex-direction: column;
    // justify-content: space-between;
    background-image: repeating-linear-gradient(#fffef2 7px, #fffef2 37px, #ff000061 40px);
}

.card {
    height: fit-content;
    width: 100%;
    border: 0;
    border-radius: 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    
    transform: scale(1);
    transition: all 0.25s ease-in-out;

    &:hover {
        transform: scale(1.05);
        transition: all 0.25s ease-in-out;
    }

    &:active {
        transform: scale(1.05);
    }
    .card-body{
        padding: 0;
    }


    .rest_icon {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        border-bottom: 3px solid #00808038;
        width: 50px;
    }

    .button {
        cursor: pointer;
        margin-top: 7px;
        border: 1px solid #2a2600;
        letter-spacing: 0.1em;
        font-family: monospace;
        font-size: 1.5rem;
        font-weight: bold;
    }
}

.logo_rest {
    width: 150px;
}
</style>