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
        
        // getDishes(pippo){
        //     let params = null;
        //     if (pippo){
        //         params = {
        //                 restaurantId: pippo
        //         }
        //     }
        //     console.log(pippo);
        //     axios.get(`${this.myUrl}/api/dishes`, {params})
        //         .then(response => {
        //             this.dishesArray = response.data.results;
        //             console.log(this.dishesArray);
        //         })
        //         .catch(error => {
        //             console.error(error);
        //         });

        // }

    }

}

</script>

<template>
    <div class="restaurant_card d-flex justify-content-center align-items-center">
        <div class="rest_name d-flex justify-content-center align-items-center ">
            <h4>{{ restaurant.restaurant_name }}</h4>
            <!-- <img class="logo_rest" :src="`${myUrl}/storage/${restaurant.thumb}`" alt=""> -->
            <div v-for="(element, index) in restaurant.categories" :key="index">
                <img v-if="element.icon" class="rest_icon" :src="element.icon" alt="">
            
            </div>
        </div>
        
    </div>
</template>



<style scoped lang="scss">

.restaurant_card{
    background-image: url(../assets/img/photo-1504674900247-0877df9cc836.jpg);
    background-size: cover;
    height: 100px;
    background-color: rgb(0, 0, 0, 0.5);
    .rest_name{
        backdrop-filter: blur(10px);
        width: 100%;
        .rest_icon{
            width: 50px;
        }
        
    }
    
}
.logo_rest{
    width: 150px;
}




</style>