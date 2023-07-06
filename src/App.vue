<script>
import Homepage from './pages/Homepage.vue';
import RestaurantList from '../src/pages/RestaurantList.vue';
import RestaurantMenu from '../src/pages/RestaurantMenu.vue';
import AppHeader from './components/AppHeader.vue';



export default {
  components: { Homepage, RestaurantList, RestaurantMenu, AppHeader }
}

</script>

<template>
  <AppHeader :cartItems="cartArray" />
  <!-- <HomePage/> -->
  <!-- <ProjectsList/> -->
  <router-view></router-view>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
@use "./styles/utilities/variables" as *;
</style>