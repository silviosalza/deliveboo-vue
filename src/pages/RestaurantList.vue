<script>
import axios from 'axios';
import AppJumbotronSearch from '../components/AppJumbotronSearch.vue';
import RestaurantCard from '../components/RestaurantCard.vue';


export default {
  props: {
    restaurant: Object,
  },
  components: {
    AppJumbotronSearch,
    RestaurantCard
  },

  data() {
    return {
      restaurants: [],
      myUrl:'http://localhost:8000'
    }
  },
  // mounted(){
  //   this.getRestaurant();
  // },
  methods: {
    getRestaurant(pageNumber = 1, category = 1) {
      let params = {
        page: pageNumber,
        categories: [category] // Supponendo che category sia un singolo ID di categoria
      };

      axios.get(`${this.myUrl}/api/restaurants`, { params })
        .then(response => {
          this.restaurants = response.data.results.data;
          console.log(this.restaurants);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }


}

</script>


<template>
  <AppJumbotronSearch />
  <button @click="getRestaurant()">Test API</button>
  <div class="row row-cols-4">
    <div class="col" v-for="(element, index) in restaurants" :key="index">
      <RestaurantCard :restaurant="element" />
    </div>
  </div>
</template>
