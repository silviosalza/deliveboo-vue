<script>
import Homepage from './pages/Homepage.vue';
import RestaurantList from '../src/pages/RestaurantList.vue';
import RestaurantMenu from '../src/pages/RestaurantMenu.vue';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AppMain from './components/AppMain.vue';

export default{
    components: { Homepage, RestaurantList, RestaurantMenu, AppHeader, AppFooter, AppMain }
}

</script>

<template>
  <AppHeader/>
  <!-- <HomePage/> -->
  <!-- <ProjectsList/> -->
  <router-view></router-view>
  <AppMain />
  <AppFooter/>

</template>

<style lang="scss">
@use "./styles/general.scss" as *;
@use "./styles/utilities/variables" as *;



</style>