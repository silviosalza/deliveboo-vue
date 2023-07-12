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
        

        <div class="jumbo-restaurants-btn-container d-flex flex-wrap justify-content-between my-4 mx-2 gap-3">
            <div class="slide-effect title_background">
                <div class="title_text">ORDINA </div>
                <div class="slideDown mx-3"> APRI</div>
                <div class="slideUp"> E GUSTA!</div>
            </div>
        </div>

       
    </div>
</template>


<style lang="scss">
@use "../styles/general.scss" as *;
@use "../styles/utilities/variables" as *;

.jumbotron {
    background-image: url("../assets/img/Screenshot\ \(171\).png");
    background-size: cover;
    height: 500px;
}

.ms-search-btn {
    background-color: #edc900;
}

.jumbo-restaurants-btn-container>.ms-btn {
    width: 45%;
    background-color: #212529;
    color: #edc900;
    border: 1px solid #7d6a00;
}

.jumbo-restaurants-btn-container>.ms-btn:hover {
    background-color: #edc900;
    color: #212529;
    border: 1px solid #212529;

}
.title_background{
    background-color: rgb(0, 0, 0, 0.5);
    padding: 5rem 0.3rem;
}


//ANIMAZIONE TITOLO

.slide-effect {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.title_text, .slideDown, .slideUp {
  position: relative;
  font-size: 2.3rem;
  opacity:0;
}

.title_text {
  top:40px;
  font-weight: bold;
  animation: slideUp ease .4s forwards;
  color: $app_color;
}

.slideDown {
  top:-40px;
  left:5px;
  animation: slideDown ease .4s forwards .6s;
  color: white;
}

.slideUp {
  top:40px;
  left:10px;
  animation: slideUp ease .5s forwards 1.2s;
  color: white;
}

@keyframes slideUp {
  0% {transform: translateY(0);}
  100% {transform: translateY(-40px);opacity:1;}
}

@keyframes slideDown {
  0% {transform: translateY(0);}
  100% {transform: translateY(40px);opacity:1;}
}
@media only screen and (max-width: 600px) {
  .slide-effect, .title_text, .slideDown, .slideUp {
    font-size: 1.5rem;
  }
}

/* MEDIA QUERIES */

@media (max-width: 575px) {
    .container {
        max-width: 350px;
    }

    .btn {
        height: 50px;
    }
}

@include media-breakpoint-up(sm) {
    .jumbo-restaurants-btn-container>.ms-btn {
        width: calc(100% / 2 - 15px);
    }

    .btn {
        height: 70px;
    }

    .slide-effect, .title_text, .slideDown, .slideUp {
        font-size: 2.3rem;
    }
}

@include media-breakpoint-up(md) {
    .jumbo-restaurants-btn-container>.ms-btn {
        width: calc(100% / 4 - 20px);
    }

    .slide-effect, .title_text, .slideDown, .slideUp {
        font-size: 3rem;
    }
}
</style>