<script>
export default {
    name: 'AppFooter'
}
</script>

<template>
    <footer>
        <!-- <div class="app"> -->
        <h3 class="fw-bold">SCARICA LA NOSTRA APP E PORTACI SEMPRE CON TE!</h3>
        <div class="img-app d-flex flex-colum align-items-center justify-content-center flex-sm-row">
            <div class="img1">
                <img src="../assets/img/App-Store.png" alt="app">
            </div>
            <div class="img2">
                <img src="../assets/img/gplay.png" alt="app">
            </div>
        </div>
        <!-- </div> -->
        <div class="about">
            <div class="d-flex justify-content-around container-sm">
                <div class="text-start">
                    <ul>
                        <li class="pb-1">
                            <h5>Scopri Deliveboo</h5>

                        </li>
                        <li>
                            <a href="/">
                                Chi siamo
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                Ristoranti
                            </a>
                        </li>
                        <li>
                            <a href="http://localhost:8000/" target="_blank">
                                Diventa nostro partner
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="text-end text-sm-start ms-5 medium">
                    <ul>
                        <li class="pb-1">
                            <h5>Note Legali</h5>
                        </li>
                        <li>
                            <a href="">
                                Termini e Condizioni
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Informativa sulla privacy
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Metodi di pagamento
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="team-1">
                    <ul>
                        <li>
                            <h5>Powered by:</h5>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/marianita-d-00b2561b5/">
                                <!-- <img width="20px" height="5px" src="../assets/img/logo-linkedin-2.png" alt="">  -->
                                Marianita Di Leo
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/claudio-leone-3bbbba123/">
                                <!-- <img width="20px" height="5px" src="../assets/img/logo-linkedin-2.png" alt="">  -->
                                Claudio Leone
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/simone-lorenzo-viaggi/">
                                <!-- <img width="20px" height="5px" src="../assets/img/logo-linkedin-2.png" alt="">  -->
                                Simone Lorenzo Viaggi
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/silvio-filippo-salza-608079281/">
                                <!-- <img width="20px" height="5px" src="../assets/img/logo-linkedin-2.png" alt="">  -->
                                Silvio Salza
                            </a>
                        </li>
                        <li>
                            <a href="www.linkedin.com/in/federico-ceteroni-dev">
                                <!-- <img width="20px" height="5px" src="../assets/img/logo-linkedin-2.png" alt="">  -->
                                Federico Ceteroni
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
            <div>
                <ul class="icons d-flex justify-content-center gap-4">
                    <img src="../assets/img/facebook.avif" alt="">
                    <img src="../assets/img/instagram.webp" alt="">
                    <img src="../assets/img/twitter.png" alt="">
                </ul>
            </div>
        </div>
    </footer>
</template> 


<style scoped lang="scss">
@use "../styles/general.scss" as *;
@use "../styles/utilities/variables" as *;

footer {
    margin-top: 220px;

    img {
        height: 35px;
        margin: 10px;
    }

    h3 {
        text-align: center;
        margin: auto;
        padding: 10px;
    }

    .img-app {
        cursor: pointer;
    }

    .about {
        background-color: $footer_color;
        color: $white_text;
        padding-top: 10px;
    }

    .icons {
        padding-inline-start: 0;
        font-size: 1.4rem;
        cursor: pointer;
        margin-bottom: 0;
    }

    ul {
        padding-inline-start: 0;
        padding: 10px;
    }

}

// MEDIA QUERY

@include media-breakpoint-up(sm) {
    .app {
        display: flex;
        justify-content: center;
        padding: 0 230px;
    }

    .img-app {
        padding-left: 30px;
    }

    .icons {
        padding-top: 30px;
    }

    .about {
        display: flex;
        justify-content: space-around;
    }

    .medium {
        padding-right: 80px;
    }
}

@include media-breakpoint-up(md) {
    .about {
        padding-right: 40px;
    }

    .medium {
        padding-left: 40px;
    }
}

@include media-breakpoint-up(lg) {
    .medium {
        padding-left: 50px;
        padding-right: 150px;
    }

    .about {
        padding-right: 150px;
    }

    .app {
        height: 150px;
    }
}</style>