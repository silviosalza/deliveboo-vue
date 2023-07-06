<script>
import axios from 'axios';
import AppJumbotronHome from '../components/AppJumbotronHome.vue';

import { RouterLink } from 'vue-router';
import AppMain from '../components/AppMain.vue';


export default {
    components: { AppJumbotronHome, RouterLink },

    data(){
    return{
      restaurants:[],
    }
  },
   methods: {
    getRestaurant(pageNumber = 1, category = 1){
        let params = {
            page: pageNumber,
            categories: category

        }
        
      axios.get(`http://localhost:8000/api/restaurants`, {params}).then(resp => {
        console.log('ciao');
        console.log(resp);
        this.restaurants = resp.data.results.data;
      })
    }
  },


}


</script>

<template>
    <AppJumbotronHome />
    <div class="container container_categories d-flex justify-content-center">
        <div class="row d-flex justify-content-center">
            <div class="col-6 col-md-3 col-sm-6 d-flex justify-content-center flex-column">
                <div class="text-center">
                    <img class="icon" src="../assets/img/burgericon.png" alt="">
                </div>
                <router-link :to="{ name: 'restaurants' }" type="button" class="btn cube cube-hover">
                    <div class="bg-top">
                        <div class="bg-inner"></div>
                    </div>
                    <div class="bg-right">
                        <div class="bg-inner"></div>
                    </div>
                    <div class="bg">
                        <div class="bg-inner"></div>
                    </div>
                    <div class="text">Hamburger</div>
                </router-link>
            </div>
            <div class="col-6 col-md-3 col-sm-6 d-flex justify-content-center flex-column">
                <div class="text-center">
                    <img class="icon" src="../assets/img/pastaicon.png" alt="">
                </div>
                <router-link :to="{ name: 'restaurants' }" type="button" class="btn cube cube-hover">
                    <div class="bg-top">
                        <div class="bg-inner"></div>
                    </div>
                    <div class="bg-right">
                        <div class="bg-inner"></div>
                    </div>
                    <div class="bg">
                        <div class="bg-inner"></div>
                    </div>
                    <div class="text">Mediterranea</div>
                </router-link>
            </div>
            <div class="col-6 col-md-3 col-sm-6 d-flex justify-content-center flex-column">
                <div class="text-center">
                    <img class="icon" src="../assets/img/orientalicon.png" alt="">
                </div>
                <router-link :to="{ name: 'restaurants' }" type="button" class="btn cube cube-hover">
                    <div class="bg-top">
                        <div class="bg-inner"></div>
                    </div>
                    <div class="bg-right">
                        <div class="bg-inner"></div>
                    </div>
                    <div class="bg">
                        <div class="bg-inner"></div>
                    </div>
                    <div class="text">Orientale</div>
                </router-link>
            </div>
            <div class="col-6 col-md-3 col-sm-6 d-flex justify-content-center flex-column">
                <div class="text-center">
                    <img class="icon" src="../assets/img/pizzaicon.png" alt="">
                </div>
                <router-link :to="{ name: 'restaurants' }" type="button" class="btn cube cube-hover">
                    <div class="bg-top">
                        <div class="bg-inner"></div>
                    </div>
                    <div class="bg-right">
                        <div class="bg-inner"></div>
                    </div>
                    <div class="bg">
                        <div class="bg-inner"></div>
                    </div>
                    <div class="text">Pizza</div>
                </router-link>
            </div>
        </div>
    </div>

    <div class="container container_categories d-flex justify-content-center">
    <div class="row d-flex justify-content-center">
        <div class="col-6 col-md-3 col-sm-6 d-flex justify-content-center flex-column">
            <div class="text-center">
                <img class="icon" src="../assets/img/sushiicon.png" alt="">
            </div>
            <router-link :to="{ name: 'restaurants' }" type="button" class="btn cube cube-hover">
                <div class="bg-top">
                    <div class="bg-inner"></div>
                </div>
                <div class="bg-right">
                    <div class="bg-inner"></div>
                </div>
                <div class="bg">
                    <div class="bg-inner"></div>
                </div>
                <div class="text">Sushi</div>
            </router-link>
        </div>
        <div class="col-6 col-md-3 col-sm-6 d-flex justify-content-center flex-column">
            <div class="text-center">
                <img class="icon" src="../assets/img/vegicon.png" alt="">
            </div>
            <router-link :to="{ name: 'restaurants' }" type="button" class="btn cube cube-hover">
                <div class="bg-top">
                    <div class="bg-inner"></div>
                </div>
                <div class="bg-right">
                    <div class="bg-inner"></div>
                </div>
                <div class="bg">
                    <div class="bg-inner"></div>
                </div>
                <div class="text">Veggy</div>
            </router-link>
        </div>
        <div class="col-6 col-md-3 col-sm-6 d-flex justify-content-center flex-column">
            <div class="text-center">
                <img class="icon" src="../assets/img/hawainicon.png" alt="">
            </div>
            <router-link :to="{ name: 'restaurants' }" type="button" class="btn cube cube-hover">
                <div class="bg-top">
                    <div class="bg-inner"></div>
                </div>
                <div class="bg-right">
                    <div class="bg-inner"></div>
                </div>
                <div class="bg">
                    <div class="bg-inner"></div>
                </div>
                <div class="text">Pokè</div>
            </router-link>
        </div>
        <div class="col-6 col-md-3 col-sm-6 d-flex justify-content-center flex-column">
            <div class="text-center">
                <img class="icon" src="../assets/img/desserticon.png" alt="">
            </div>
            <router-link :to="{ name: 'restaurants' }" type="button" class="btn cube cube-hover">
                <div class="bg-top">
                    <div class="bg-inner"></div>
                </div>
                <div class="bg-right">
                    <div class="bg-inner"></div>
                </div>
                <div class="bg">
                    <div class="bg-inner"></div>
                </div>
                <div class="text">Dessert</div>
            </router-link>
        </div>
    </div>
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


<style lang="scss">
.text {
    color: #d4af37;
}

.container_categories {
    margin-top: 1rem;

    .col-md-3 {
        margin-top: 3rem;
    }
}

.icon {
    width: 150px;
    padding-bottom: 0.5rem;
}

.btn {
    display: block;
    min-width: 150px;
    max-width: 250px;
    padding: 0.7em 1em;
    background: transparent;
    outline: none;
    border: 0;
    letter-spacing: 0.1em;
    font-family: monospace;
    font-size: 17px;
    font-weight: bold;
    z-index: 1;
}

.cube {
    position: relative;
    transition: all 0.5s;
}

.cube .bg-top {
    position: absolute;
    height: 10px;
    background: #d4af37;
    bottom: 100%;
    left: 5px;
    right: -5px;
    transform: skew(-45deg, 0);
    margin: 0;
    transition: all 0.4s;
}

.cube .bg-top .bg-inner {
    bottom: 0;
}

.cube .bg {
    position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
    right: 0;
    background: #d4af37;
    transition: all 0.4s;
}

.cube .bg-right {
    position: absolute;
    background: #d4af37;
    top: -5px;
    z-index: 0;
    bottom: 5px;
    width: 10px;
    left: 100%;
    transform: skew(0, -45deg);
    transition: all 0.4s;
}

.cube .bg-right .bg-inner {
    left: 0;
}

.cube .bg-inner {
    background: #28282d;
    position: absolute;
    left: 2px;
    right: 2px;
    top: 2px;
    bottom: 2px;
}

.cube .text {
    position: relative;
    transition: all 0.4s;
}

.cube:hover .bg-inner {
    background: #d4af37;
    transition: all 0.4s;
}

.cube:hover .text {
    color: #28282d;
    transition: all 0.4s;
}

.cube:hover .bg-right,
.cube:hover .bg,
.cube:hover .bg-top {
    background: #28282d;
}

.cube:active {
    z-index: 9999;
    animation: bounce .1s linear;
}

@keyframes bounce {
    50% {
        transform: scale(0.9);
    }
}
</style>