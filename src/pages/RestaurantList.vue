<script>
import axios from 'axios';
import AppJumbotronSearch from '../components/AppJumbotronSearch.vue';
import RestaurantCard from '../components/RestaurantCard.vue';


export default{
    props:{
        restaurant: Object,
    },
    components: { 
        AppJumbotronSearch,
        RestaurantCard
     },



     data(){
    return{
      restaurants:[],
      
    }
  },
  mounted(){
  },
  methods: {
    getRestaurant(pageNumber = 1, category){
        let params = {
            page: pageNumber,
            categories: category

        }
        
      axios.get('http://localhost:8000/api/restaurants', {params}).then(resp => {

        console.log(resp);
        this.restaurants = resp.data.results.data;
      })
    }
  },

}

</script>


<template>
    <AppJumbotronSearch/>
    <button @click="getRestaurant()">Test API</button>
    <div class="row row-cols-4">
      <div class="col" v-for="(element,index) in restaurants" :key="index" >
        <RestaurantCard :restaurant="element" />
      </div>
    </div>
</template>
