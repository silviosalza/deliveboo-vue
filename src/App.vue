<script>
import Homepage from './pages/Homepage.vue';
import RestaurantList from '../src/pages/RestaurantList.vue';
import RestaurantMenu from '../src/pages/RestaurantMenu.vue';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AppAbout from './components/AppAbout.vue';

export default{
    components: { Homepage, RestaurantList, RestaurantMenu, AppHeader, AppFooter, AppAbout }
}

</script>

<template>
  <AppHeader/>
  <!-- <HomePage/> -->
  <!-- <ProjectsList/> -->
  <router-view></router-view>
  <AppAbout />
  <AppFooter/>

</template>

<style lang="scss">
@use "./styles/general.scss" as *;
@use "./styles/utilities/variables" as *;



</style>