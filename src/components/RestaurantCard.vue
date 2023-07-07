<script>
export default {
    name: "RestaurantCard",
    props: {
        restaurant: Object,
    },
}
</script>

<template>
    <div class="restaurant_card d-flex justify-content-center align-items-center">
        <div class="rest_name d-flex justify-content-center align-items-center ">
            <h4>{{ restaurant.restaurant_name }}</h4>
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
        
    }
    
}




</style>