<script>
export default {
    name: 'AppJumbotronSearch',
    data() {
        return {
        }
    }
}
</script>

<template>
    <div class="jumbotron">
        <div class="container pt-4 d-flex flex-column justify-content-between ms-jumbo-search">
            <h1 class="text-center ms-jumbo-title bg-warning py-1 m-0" style="--bs-bg-opacity: .7;">È PRONTO, TUTTI A TAVOLA!</h1>
        </div>

        <div class="container jumbo-restaurants-btn-container d-flex flex-wrap justify-content-between my-4 gap-3">
            <button type="button" class="btn btn-light rounded-0 border border-dark border-2"><b>PIZZA</b></button>

            <button type="button" class="btn btn-light rounded-0 border border-dark border-2"><b>SUSHI</b></button>

            <button type="button" class="btn btn-light rounded-0 border border-dark border-2"><b>HAMBURGER</b></button>

            <button type="button" class="btn btn-light rounded-0 border border-dark border-2"><b>VEGAN</b></button>

            <button type="button" class="btn btn-light rounded-0 border border-dark border-2"><b>PIZZA</b></button>

            <button type="button" class="btn btn-light rounded-0 border border-dark border-2"><b>SUSHI</b></button>

            <button type="button" class="btn btn-light rounded-0 border border-dark border-2"><b>HAMBURGER</b></button>

            <button type="button" class="btn btn-light rounded-0 border border-dark border-2"><b>VEGAN</b></button>

            <button type="button" class="btn btn-warning w-30 rounded-0 m-auto"><b>CERCA</b></button>
        </div>

        <div class="container jumbo-bottom-container pb-4">
            <h5 class="bg-light mb-0 py-1">IL TUO CIBO PREFERITO</h5>
            <h5 class="bg-warning mb-0 py-1">CON UN TOCCO DEL TUO DITO</h5>
        </div>
    </div>
</template>


<style lang="scss">
@use "../styles/general.scss" as *;
@use "../styles/utilities/variables" as *;

.jumbotron{
    /* height: 60vh; */
    background-image: url("../assets/img/Screenshot\ \(171\).png");
    background-size: cover;
}

.ms-jumbo-search {

    .ms-jumbo-title {
        font-size: calc(1.1rem + 1.5vw);
    }
}

.ms-search-btn {
    background-color: #edc900;
}

.jumbo-restaurants-btn-container > button {
    width: calc(100% / 2 - 20px);
}

/* MEDIA QUERIES */
@include media-breakpoint-up(md) {
    .jumbo-restaurants-btn-container > button {
        width: calc(100% / 4 - 20px);
    }
}
</style>