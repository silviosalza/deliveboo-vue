<script>
export default {
    name: 'AppJumbotronHome',
    data() {
        return {
        }
    }
}
</script>

<template>
    <div class="jumbotron">
        <!-- <div class="container pt-4 d-flex flex-column justify-content-between ms-jumbo-search">
            <h1 class="text-center ms-jumbo-title bg-warning py-1 m-0" style="--bs-bg-opacity: .7;">È PRONTO, TUTTI A
                TAVOLA!</h1>
        </div> -->

        

        <!-- <div class="container jumbo-bottom-container pb-4">
            <h5 class="bg-light mb-0 py-1">IL TUO CIBO PREFERITO</h5>
            <h5 class="bg-warning mb-0 py-1">CON UN TOCCO DEL TUO DITO</h5>
        </div> -->
    </div>
</template>


<style scoped lang="scss">
@use "../styles/general.scss" as *;
@use "../styles/utilities/variables" as *;

.jumbotron {
    /* height: 60vh; */
    background-image: url("../assets/img/Screenshot\ \(171\).png");
    background-size: cover;
    height: 500px;
}

.ms-jumbo-search {

    .ms-jumbo-title {
        font-size: calc(1.1rem + 1.5vw);
    }
}

/* MEDIA QUERIES */

//@include media-breakpoint-up(md) {
 //    .jumbo-restaurants-btn-container > button {
//         width: calc(100% / 4 - 20px);
//     }
// }


//ANIMAZIONE TITOLO


</style>