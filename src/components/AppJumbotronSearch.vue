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
    <div class="jumbotron d-flex flex-column justify-content-center py-5">
        <div class="container pt-4 d-flex flex-column justify-content-between ms-jumbo-search">
            <h1 class="text-center ms-jumbo-title bg-warning py-1 m-0" style="--bs-bg-opacity: .7;">È PRONTO, TUTTI A TAVOLA!</h1>
        </div>

        <div class="container jumbo-restaurants-btn-container d-flex flex-wrap justify-content-between my-4 gap-3">
            <button type="button" class="ms-btn btn btn-light rounded-0"><b>PIZZA</b></button>

            <button type="button" class="ms-btn btn btn-light rounded-0"><b>SUSHI</b></button>

            <button type="button" class="ms-btn btn btn-light rounded-0"><b>HAMBURGER</b></button>

            <button type="button" class="ms-btn btn btn-light rounded-0"><b>VEGAN</b></button>

            <button type="button" class="ms-btn btn btn-light rounded-0"><b>PIZZA</b></button>

            <button type="button" class="ms-btn btn btn-light rounded-0"><b>SUSHI</b></button>

            <button type="button" class="ms-btn btn btn-light rounded-0"><b>HAMBURGER</b></button>

            <button type="button" class="ms-btn btn btn-light rounded-0"><b>VEGAN</b></button>

            <button type="button" class="btn btn-warning w-30 rounded-0 m-auto"><b>CERCA</b></button>
        </div>

        <div class="container jumbo-bottom-container pb-4">
            <h5 class="bg-dark text-warning mb-0 p-1">IL TUO CIBO PREFERITO</h5>
            <h5 class="bg-warning mb-0 p-1">CON UN TOCCO DEL TUO DITO</h5>
        </div>
    </div>
</template>


<style lang="scss">
@use "../styles/general.scss" as *;
@use "../styles/utilities/variables" as *;

.jumbotron{
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

.jumbo-restaurants-btn-container > .ms-btn {
    width: 45%;
    background-color: #212529;
    color:#edc900;
    border: 1px solid #7d6a00;
}

.jumbo-restaurants-btn-container > .ms-btn:hover {
    background-color: #edc900;
    color:#212529;
    border: 1px solid #212529;
    
}

/* MEDIA QUERIES */

@media (max-width: 575px) {
    .container{
        max-width: 350px;
    }

    .btn {
        height: 50px;
    }
}

@include media-breakpoint-up(sm) {
    .jumbo-restaurants-btn-container > .ms-btn {
        width: calc(100% / 2 - 15px);
    }

    .btn {
        height: 70px;
    }
}

@include media-breakpoint-up(md) {
    .jumbo-restaurants-btn-container > .ms-btn {
        width: calc(100% / 4 - 20px);
    }
}

</style>