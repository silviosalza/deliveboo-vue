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
      myUrl: 'http://localhost:8000',
      restaurants: [],
      totalCategory: [],
      categoriesArray: [] //andranno inserite le categorie in maniera dinamica al click utente
    }
  },

  methods: {
    getRestaurant(pageNumber = 1) {
      console.log(this.categoriesArray);
      let params;
      if (this.categoriesArray) {
        params = {
          page: pageNumber,
          categories: this.categoriesArray // Supponendo che category sia un singolo ID di categoria
        };
      } else {
        params = {
          page: pageNumber
        }
      }

      axios.get(`${this.myUrl}/api/restaurants`, { params })
        .then(response => {
          this.restaurants = response.data.results.data;
          console.log(this.restaurants);
        })
        .catch(error => {
          console.error(error);
        });
    },
    getCategory() {
      axios
        .get(`${this.myUrl}/api/categories`)
        .then(resp => {
          this.totalCategory = resp.data.results;
        })
        .catch(error => {
          console.error(error);
        });

    },

    clickutente(categoryId) {
      this.totalCategory.forEach(item => {
        if (item.id === categoryId) {
          item.checked = !item.checked; // Inverte lo stato "checked"
          if (item.checked) {
            this.categoriesArray.push(categoryId);
          } else {
            const index = this.categoriesArray.indexOf(categoryId);
            if (index > -1) {
              this.categoriesArray.splice(index, 1);
            }
          }
        }
      });

      if (this.categoriesArray.length === 0) {
        // Se tutte le caselle di controllo sono deselezionate, mostra tutte le checkbox
        this.totalCategory.forEach(item => {
          item.checked = false;
        });
      }

      this.getRestaurant();
    }

  }

}

</script>


<template>
  <AppJumbotronSearch />
  <button @click="getCategory()">dammi tutte le categorie</button>
  <div v-for="item, index in totalCategory" :key="index">

    <label for="{{ item.id }}">{{ item.category_name }}</label>
    <input type="checkbox" class="m-3" id="categ-{{ item.id }}" @click="clickutente(item.id)" :checked="item.checked">

  </div>

  <button @click="getRestaurant()">Test API</button>
  <div class="row row-cols-4">
    <div class="col" v-for="(element, index) in restaurants" :key="index">
      <RestaurantCard :restaurant="element" @click="clickutente(element.id)" />
    </div>
  </div>
</template>
