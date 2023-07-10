<script>
import { store } from '../store.js';
export default {
    name: 'AppHeader',
    data() {
        return {
            menuItems: [
                {
                    label: "Home",
                    routeName: "home"
                },
                {
                    label: "Ricerca Avanzata",
                    routeName: "restaurants"
                },
            ],
            store,
            payFlag: false
        }
    },
    mounted() {
        this.getCartItems();
    },
    methods: {
        paymentSection() {
            this.payFlag = true;
        },
        clearCart() {
            this.store.cartArray = [];
            this.store.totalPrice = 0;
            this.store.totalProducts = 0;
            localStorage.setItem('cart', JSON.stringify(this.store.cartArray));//invio al localStorage ogni nuova versione aggiornata di cartArray
            localStorage.setItem('total', this.store.totalPrice);//stessa cosa per il totale dell'ordine
            localStorage.setItem('products', this.store.totalProducts);// e per il numero di prodotti
        },
        getCartItems() {//con questa funzione inserisco i dati presenti nel localStorage nelle variabili corrispondenti
            this.store.cartArray = JSON.parse(localStorage.getItem('cart'));
            this.store.totalPrice = JSON.parse(localStorage.getItem('total'));
            this.store.totalProducts = JSON.parse(localStorage.getItem('products'));
        }
    }
}

</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg h-100 bg-warning">
            <div class="container d-flex align-items-center ph-3">

                <div class="logo">
                    <a class="navbar-brand" href="/"><img class="logo_header" src="../assets/img/logo-no-background.png"
                            alt=""></a>
                </div>

                <div class="btn-group dropstart d-sm-none">
                    <button class="ms-burger-btn btn-lg border border-2 border-dark rounded" type="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fa-solid fa-bars"></i>
                    </button>
                    <ul class="dropdown-menu bg-dark">
                        <li class="dropdown-item text-warning" v-for="item in menuItems">
                            <router-link :to="{ name: item.routeName }" aria-current="page">{{
                                item.label }}</router-link>
                        </li>

                        <li class="dropdown-item text-warning">
                            <a class="active" href="#join_us">Collabora con noi</a>
                        </li>

                        <li class="dropdown-item text-warning">
                            <a class="active" href="http://localhost:8000/" target="_blank">Area Riservata</a>
                        </li>

                        <li class="dropdown-item text-warning">
                            <a class="active" href="http://localhost:8000/" target="_blank" data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasEnd" aria-controls="offcanvasEnd">Carrello</a>
                        </li>
                    </ul>
                </div>

                <div id="navbarNav">
                    <ul class="navbar-nav align-items-center justify-content-center gap-2">
                        <li class="nav-item" v-for="item in menuItems">
                            <router-link :to="{ name: item.routeName }" aria-current="page">{{
                                item.label }}</router-link>
                        </li>
                        <li class="nav-item">
                            <a class="active" href="#join_us">Collabora con noi</a>
                        </li>
                        <li class="nav-item">
                            <a class="active" href="http://localhost:8000/" target="_blank">Area Riservata</a>
                        </li>
                        <li class="nav-item position-relative">
                            <button class="cart-hover ms-btn border border-2 border-dark rounded" type="button"
                                data-bs-toggle="offcanvas" data-bs-target="#offcanvasEnd" aria-controls="offcanvasEnd">
                                <i class="fa-solid fa-cart-shopping"></i>
                            </button>

                            <div class="cart-counter"> {{ store.totalProducts }} </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasEnd" aria-labelledby="offcanvasEndLabel">
        <div class="offcanvas-header bg-warning bg-gradient">
            <h5 class="offcanvas-title" id="offcanvasEndLabel"><b>Carrello</b></h5>
            <button type="button" class="btn-close bg-danger" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <i class="fa-solid fa-cart-shopping ms-cart-bg"></i>
            <ul>
                <li v-for="(item, index) in store.cartArray">
                    {{ item.count }} x <span style="color: red;">{{ item.name }}</span> ( {{ item.price }} )
                </li>
            </ul>
            <h4>Totale: {{ store.totalPrice.toFixed(2) }} €</h4>
            <div v-if="store.totalPrice > 0" class="d-flex justify-content-center align-items-center">
                <button class="btn btn-warning d-flex justify-content-center align-items-center" @click="paymentSection">
                    <i class="fa-solid fa-cart-shopping"></i> Vai al checkout
                </button>
                <button class="btn btn-danger text-dark" @click="clearCart">
                    Svuota carrello
                </button>
            </div>
            <div v-else>
                <h5 class="text-danger">Non hai ancora effettuato un ordine.</h5>
            </div>
            <div v-if="payFlag">
                <h5>Qui avverrà il pagamento</h5>

            </div>
        </div>
    </div>
</template>


<style scoped lang="scss">
@use "../styles/general.scss" as *;
@use "../styles/utilities/variables" as *;

@media (max-width: 575px) {
    .container {
        max-width: 350px;
    }
}

header {
    height: 120px;
    background-color: $app_color;
    color: $black_text;
    font-weight: 900;
    font-size: 1.5rem;

    li {
        font-size: 0.8rem;
    }
}

.ms-btn {
    padding: 0.9em 1.2em 0.7em 1em;
    text-align: center;
    background-color: transparent;
    border: 1px solid black;
}

.ms-burger-btn {
    padding: 0.55em 1.55em;
    text-align: center;
    background-color: transparent;
    border: 1px solid black;
}

.logo_header {
    height: 55px;
}

#navbarNav {
    display: none;
}

.navbar-nav {
    flex-direction: row;
    width: 504px;
    margin: 0;

    .nav-item {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;

        .cart-counter {
            position: absolute;
            right: -9px;
            bottom: -12px;
            background-color: #edc900;
            color: black;
            padding: 0 1px 0 0;

            border: 1px solid black;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 30px;
            height: 30px;
            border-radius: 50%;
        }
    }

    .nav-item:hover {
        text-decoration: underline;
    }

    .cart-hover:hover {
        background-color: #212529;
        color: #edc900;
    }

}

.offcanvas-header {
    border-bottom: 1px solid #212529;
}

.offcanvas-body {
    background-color: #dedede;
    box-shadow: inset 0px 7px 20px 0px #bdbdbd;
}

.btn-close {
    border: 1px solid black;
    border-radius: 5px;
}

.ms-cart-bg {
    position: absolute;
    left: 27%;
    top: 41%;
    color: #d0d1d3;
    font-size: 5rem;
    border: 3px solid #d0d1d3;
    padding: 50px 50px 47px 43px;
    border-radius: 50%;
}

// MEDIA QUERIES
@include media-breakpoint-up(sm) {

    header {
        height: 160px;
    }

    .logo_header {
        height: 65px;
    }

    .btn {
        min-width: 50px;
    }

    .navbar>.container {
        justify-content: center;
    }

    #navbarNav {
        display: block;

        .navbar-nav {
            margin-top: 15px;
            padding-bottom: 10px;
        }

        .navbar-nav>li {
            padding: 0 5px;
            width: calc(100% / 5);
        }

        .navbar-nav>li:last-child {
            width: fit-content;
        }

        .btn-group {
            display: none;
            width: unset;
        }
    }
}

@include media-breakpoint-up(md) {
    .navbar>.container {
        justify-content: space-between;
    }

    .navbar-nav {
        margin: 0;
        padding-bottom: 0;
    }
}

@include media-breakpoint-up(lg) {

    header {
        height: 180px;

        li {
            font-size: 1.08rem;
        }
    }

    .logo,
    .logo_header {
        height: 85px;
    }

    #navbarNav {
        width: 100%;
        display: flex;
        justify-content: end;

        .navbar-nav {
            width: 730px;

            li {
                text-align: center;
            }
        }
    }
}
</style>