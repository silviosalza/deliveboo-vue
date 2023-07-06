<script>
export default{
    name: "RestaurantCard",
    props:{
        restaurant: Object,
    },
}
</script>

<template>
        <div class="card restaurant_card text-center">
            <h4>{{ restaurant.restaurant_name }}</h4>
        </div>
</template>



<style scoped lang="scss">
.card{
    height: 300px;
    margin-bottom: 2rem ;

}

</style>