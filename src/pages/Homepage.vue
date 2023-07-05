<template>
    <div class="jumbotron">
        <div class="container pt-4 d-flex flex-column justify-content-between ms-jumbo-search">
            <h5 class="text-center ms-jumbo-title bg-warning py-1 m-0" style="--bs-bg-opacity: .7;">È PRONTO, TUTTI A TAVOLA!</h5>

            <div class="input-group">
                <input type="text" class="form-control" placeholder="Dove sei? Cerca ristoranti vicini" aria-label="Username" aria-describedby="basic-addon1">
            </div>

            <button type="button" class="btn btn-warning w-100 rounded-0"><b>CERCA</b></button>
        </div>

        <div class="container jumbo-restaurants-btn-container d-flex flex-wrap justify-content-between my-4 gap-3">
            <button type="button" class="btn btn-light rounded-0 border border-dark border-2"><b>PIZZA</b></button>

            <button type="button" class="btn btn-light rounded-0 border border-dark border-2"><b>SUSHI</b></button>

            <button type="button" class="btn btn-light rounded-0 border border-dark border-2"><b>HAMBURGER</b></button>

            <button type="button" class="btn btn-light rounded-0 border border-dark border-2"><b>VEGAN</b></button>
        </div>

        <div class="container jumbo-bottom-container pb-4">
            <h4 class="bg-light mb-0 py-1">IL TUO CIBO PREFERITO</h4>
            <h4 class="bg-warning mb-0 py-1">CON UN TOCCO DEL TUO DITO</h4>
        </div>
    </div>


    <div id="join_us">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia optio, numquam consequatur recusandae officiis dolorem fugit, vitae aperiam in veniam soluta minus id esse tenetur maiores. Dignissimos praesentium facilis totam.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia optio, numquam consequatur recusandae officiis dolorem fugit, vitae aperiam in veniam soluta minus id esse tenetur maiores. Dignissimos praesentium facilis totam.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia optio, numquam consequatur recusandae officiis dolorem fugit, vitae aperiam in veniam soluta minus id esse tenetur maiores. Dignissimos praesentium facilis totam.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia optio, numquam consequatur recusandae officiis dolorem fugit, vitae aperiam in veniam soluta minus id esse tenetur maiores. Dignissimos praesentium facilis totam.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia optio, numquam consequatur recusandae officiis dolorem fugit, vitae aperiam in veniam soluta minus id esse tenetur maiores. Dignissimos praesentium facilis totam.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia optio, numquam consequatur recusandae officiis dolorem fugit, vitae aperiam in veniam soluta minus id esse tenetur maiores. Dignissimos praesentium facilis totam.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia optio, numquam consequatur recusandae officiis dolorem fugit, vitae aperiam in veniam soluta minus id esse tenetur maiores. Dignissimos praesentium facilis totam.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia optio, numquam consequatur recusandae officiis dolorem fugit, vitae aperiam in veniam soluta minus id esse tenetur maiores. Dignissimos praesentium facilis totam.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia optio, numquam consequatur recusandae officiis dolorem fugit, vitae aperiam in veniam soluta minus id esse tenetur maiores. Dignissimos praesentium facilis totam.

        </p>

    </div>
</template>


<style>
.jumbotron{
    /* height: 60vh; */
    background-image: url("../img/jumbotron_pizza 3.jpg");
    background-size: cover;
}

.ms-jumbo-search {
    height: 150px;
}

.ms-search-btn {
    background-color: #edc900;
}

.jumbo-restaurants-btn-container > button {
    width: calc(100% / 2 - 20px);
}
</style>