<script>
export default {
    name: 'AppFooter'
}
</script>

<template>
    <footer>
        <div class="app">
            <h3>SCARICA LA NOSTRA APP E PORTACI SEMPRE CON TE!</h3>
            <div class="img-app">
                <div class="img1">
                    <img src="../assets/img/App-Store.png" alt="app">
                </div>
                <div class="img2">
                    <img src="../assets/img/gplay.png" alt="app">
                </div>
            </div>
        </div>
        <div class="about">
            <div class="list">
                <div class="left-list">
                    <ul>
                        <li class="title">
                            <h5>Scopri Deliveboo</h5>
                        </li>
                        <li>Chi siamo</li>
                        <li>Ristoranti</li>
                        <li>Diventa nostro partner</li>
                    </ul>
                </div>
                <div class="right-list">
                    <ul>
                        <li class="title">
                            <h5>Note Legali</h5>
                        </li>
                        <li>Termini e Condizioni</li>
                        <li>Informativa sulla privacy</li>
                        <li>Metodi di pagamento</li>
                    </ul>
                </div>

            </div>
            <div>
                <ul class="icons">
                    <li><i class="fa-brands fa-facebook-f"></i></li>
                    <li><i class="fa-brands fa-twitter"></i></li>
                    <li><i class="fa-brands fa-instagram"></i></li>
                </ul>
            </div>
        </div>
    </footer>
</template> 


<style scoped lang="scss">
@use "../styles/general.scss" as *;
@use "../styles/utilities/variables" as *;

footer {
    background-color: $app_color;

    .app {
        padding-top: 30px;
    }

    img {
        height: 35px;
        margin: 10px;
    }

    .about {
        background-color: $footer_color;
        color: $white_text;
        padding: 20px;
    }

    .img-app {
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
    }

    h3 {
        text-align: center;
        margin: auto;
        padding: 10px;
    }

    .list {
        display: flex;
    }

    .left-list {
        text-align: left;
    }

    .right-list {
        text-align: right;
    }

    .icons {
        display: flex;
        justify-content: center;
        gap: 20px;
        padding-inline-start: 0;
        font-size: 1.4rem;
        cursor: pointer;
    }

    .title {
        padding-bottom: 10px;
    }

}

// MEDIA QUERY

@include media-breakpoint-up(sm) {
    .app {
        padding: 0 230px;
        display: flex;
        justify-content: center;
        padding-bottom: 20px;
    }

    .img-app {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-left: 30px;
    }

    .list {
        display: flex;
    }

    .icons {
        padding-top: 30px;
    }

}
</style>