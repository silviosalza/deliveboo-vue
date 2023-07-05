<script>
import axios from 'axios';
export default {
    name: 'Homepage',
    data() {
        return {
            restaurantsArray: [],
            myApi: 'http://localhost:8000'
        }
    },
    mounted() {
        this.getRestaurants();
    },
    methods: {
        getRestaurants() {
            axios.get(`${this.myApi}/api/restaurants`).then(resp => {
                this.restaurantsArray = resp.data.results.data;
            });
        }
    }
}
</script>
<template>
    <h1>Homepage</h1>

    <div class="space">
        <ul v-for="(item, index) in restaurantsArray" :key="index">
            <img height="150" width="150" :src="myApi + '/storage/' + item.thumb" alt="">
            <li>{{ item.restaurant_name }}</li>
        </ul>
    </div>


    <div id="join_us">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia optio, numquam consequatur recusandae officiis
            dolorem fugit, vitae aperiam in veniam soluta minus id esse tenetur maiores. Dignissimos praesentium facilis
            totam.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia optio, numquam consequatur recusandae officiis
            dolorem fugit, vitae aperiam in veniam soluta minus id esse tenetur maiores. Dignissimos praesentium facilis
            totam.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia optio, numquam consequatur recusandae officiis
            dolorem fugit, vitae aperiam in veniam soluta minus id esse tenetur maiores. Dignissimos praesentium facilis
            totam.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia optio, numquam consequatur recusandae officiis
            dolorem fugit, vitae aperiam in veniam soluta minus id esse tenetur maiores. Dignissimos praesentium facilis
            totam.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia optio, numquam consequatur recusandae officiis
            dolorem fugit, vitae aperiam in veniam soluta minus id esse tenetur maiores. Dignissimos praesentium facilis
            totam.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia optio, numquam consequatur recusandae officiis
            dolorem fugit, vitae aperiam in veniam soluta minus id esse tenetur maiores. Dignissimos praesentium facilis
            totam.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia optio, numquam consequatur recusandae officiis
            dolorem fugit, vitae aperiam in veniam soluta minus id esse tenetur maiores. Dignissimos praesentium facilis
            totam.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia optio, numquam consequatur recusandae officiis
            dolorem fugit, vitae aperiam in veniam soluta minus id esse tenetur maiores. Dignissimos praesentium facilis
            totam.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia optio, numquam consequatur recusandae officiis
            dolorem fugit, vitae aperiam in veniam soluta minus id esse tenetur maiores. Dignissimos praesentium facilis
            totam.

        </p>

    </div>
</template>


<style>
.space {

    height: 100vh;
}
</style>