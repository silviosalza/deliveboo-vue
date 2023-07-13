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
        getCartItems() {
            const cart = localStorage.getItem('cart');
            const total = localStorage.getItem('total');
            const products = localStorage.getItem('products');

            this.store.cartArray = JSON.parse(cart) ?? [];
            this.store.totalPrice = JSON.parse(total) ?? 0;
            this.store.totalProducts = JSON.parse(products) ?? 0;
        },

        // getCartItems() {//con questa funzione inserisco i dati presenti nel localStorage nelle variabili corrispondenti
        //     this.store.cartArray = JSON.parse(localStorage.getItem('cart'));
        //     this.store.totalPrice = JSON.parse(localStorage.getItem('total'));
        //     this.store.totalProducts = JSON.parse(localStorage.getItem('products'));
        // },
        updateCart() {
            const cartItems = JSON.stringify(this.store.cartArray); localStorage.setItem('cart', cartItems);
        },
        updateTotalPrice(price) {
            this.store.totalPrice += price; localStorage.setItem('total', this.store.totalPrice);
        },
        increaseQuantity(item) {
            item.count += 1; this.updateCart(); this.updateTotalPrice(item.price);
        },
        decreaseQuantity(item) {
            if (item.count > 1) {
                item.count -= 1; this.updateCart(); this.updateTotalPrice(-item.price);
            }
        },
        erase(item) {
            const index = this.store.cartArray.indexOf(item);
            if (index !== -1) {
                const removedQuantity = item.count; // Salva la quantità dell'articolo da rimuovere
                const removedPrice = item.price * removedQuantity; // Calcola il prezzo totale da sottrarre
                this.store.cartArray.splice(index, 1); // Rimuovi l'elemento dal carrello
                this.updateCart(); // Aggiorna il Local Storage
                this.updateTotalPrice(-removedPrice); // Aggiorna il prezzo totale sottraendo il prezzo dell'articolo rimosso

                if (this.store.cartArray.length === 0) {
                    this.clearCart(); // Azzera il totale se il carrello è vuoto
                }
            }
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

                <div class="btn-group dropstart d-md-none">
                    <button class="ms-burger-btn btn-lg border border-2 border-dark rounded" type="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png"
                            class="burger-menu" alt="">
                    </button>
                    <ul class="dropdown-menu bg-dark">
                        <li class="dropdown-item text-warning" v-for="item in menuItems">
                            <router-link :to="{ name: 'home' }" aria-current="page">{{
                                item.label }}</router-link>
                        </li>

                        <li class="dropdown-item text-warning">
                            <a class="active" href="#collab">Collabora con noi</a>
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

                            <button type="button" class="headernav-btn btn cube cube-hover" @click="clickutente()">
                                <div class="bg-top">
                                    <div class="bg-inner"></div>
                                </div>
                                <div class="bg-right">
                                    <div class="bg-inner"></div>
                                </div>
                                <div class="bg">
                                    <div class="bg-inner"></div>
                                </div>
                                <div class="text"><router-link :to="{ name: item.routeName }" aria-current="page">{{
                                    item.label }}</router-link></div>
                            </button>
                        </li>

                        <li class="nav-item">
                            <button type="button" class="headernav-btn btn cube cube-hover" @click="clickutente()">
                                <div class="bg-top">
                                    <div class="bg-inner"></div>
                                </div>
                                <div class="bg-right">
                                    <div class="bg-inner"></div>
                                </div>
                                <div class="bg">
                                    <div class="bg-inner"></div>
                                </div>
                                <div class="text"><a class="active" href="#collab">Collabora con noi</a></div>
                            </button>
                        </li>

                        <li class="nav-item">
                            <button type="button" class="headernav-btn btn cube cube-hover" @click="clickutente()">
                                <div class="bg-top">
                                    <div class="bg-inner"></div>
                                </div>
                                <div class="bg-right">
                                    <div class="bg-inner"></div>
                                </div>
                                <div class="bg">
                                    <div class="bg-inner"></div>
                                </div>
                                <div class="text"><a class="active" href="http://localhost:8000/" target="_blank">Area
                                        Riservata</a></div>
                            </button>

                        </li>
                        <li class="nav-item position-relative">
                            <button class="cart-hover ms-btn border border-2 border-dark rounded" type="button"
                                data-bs-toggle="offcanvas" data-bs-target="#offcanvasEnd" aria-controls="offcanvasEnd">
                                <img class="cart_img" src="https://cdn-icons-png.flaticon.com/256/263/263142.png" alt="">
                            </button>

                            <div class="cart-counter"> {{ store.totalProducts }} </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <div class="offcanvas offcanvas-resp offcanvas-end" tabindex="-1" id="offcanvasEnd" aria-labelledby="offcanvasEndLabel">
        <div class="offcanvas-header bg-warning bg-gradient">
            <h5 class="offcanvas-title" id="offcanvasEndLabel"><b>Carrello</b></h5>
            <button type="button" class="btn-close bg-danger" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <!-- <i class="fa-solid fa-cart-shopping ms-cart-bg"></i> -->
            <ul>
                <li class="my-4" v-for="(item, index) in store.cartArray">
                    <b> {{ item.count }} x <span style="color: red;">{{ item.name }}</span> ( {{ item.price }} € CAD. 1) </b>
                    <div class="ms-plus-minus-trash d-flex gap-3 align-items-center justify-content-center">
                        <div class="plus bg-success" @click="increaseQuantity(item)"> + </div>
                        <div class="minus bg-warning" @click="decreaseQuantity(item)"> — </div>
                        <div class="trash bg-danger" @click="erase(item)">&#128465; </div>
                    </div>
                </li>
            </ul>
            <h4>Totale: {{ store.totalPrice.toFixed(2) }} €</h4>
            <div v-if="store.totalPrice > 0" class="d-flex justify-content-center align-items-center">
                <router-link @click="paymentSection"
                    class="btn btn-warning d-flex justify-content-center align-items-center" :to="{ name: 'payment' }"
                    aria-current="page">Vai al checkout</router-link>
                <!-- <button class="btn btn-warning d-flex justify-content-center align-items-center" @click="paymentSection">
                    Vai al checkout
                </button> -->
                <button class="btn btn-danger text-dark" @click="clearCart">
                    Svuota carrello
                </button>
            </div>
            <div v-else>
                <h5 class="text-danger">Non hai ancora effettuato un ordine.</h5>
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
    .offcanvas-resp{
        width: 100vw !important;
        height: 85vh !important;
    }
}

header {
    position: sticky;
    top: 0;
    z-index: 333;
    height: 120px;
    background-color: $app_color;
    color: $black_text;
    font-weight: 900;
    font-size: 1.5rem;

    .burger-menu {
        width: 35px;

        &:hover {
            transform: scale(1.4);
            transition: all 200ms linear;
        }
    }

    .cart_img {
        height: 2rem;
    }

    li {
        font-size: 0.8rem;
    }
}

.ms-btn {
    margin-left: 10px;
    height: 75px;
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
    height: 100%;

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

    .cart-hover {
        box-shadow: 0 0 0 0 #21252900;
        transition: box-shadow 0.3s;
    }

    .cart-hover:hover {
        box-shadow: 0 0 8px 1px #212529;
    }
}

.offcanvas-header {
    border-bottom: 1px solid #212529;
}

.offcanvas-body {
    background-color: #dedede;
    box-shadow: inset 0px 7px 20px 0px #bdbdbd;

    ul {
        padding: 0 1rem;

        li {
            font-size: 1.5rem;

            .ms-plus-minus-trash {
                text-align: center;
                height: fit-content;
                padding: 10px 0;

                .plus,
                .minus,
                .trash {
                    cursor: pointer;
                    width: 100px;
                    height: 60px;
                    padding: 5px 10px;
                    font-size: 2rem;
                    border: 1px solid #212529;
                    border-radius: 5px;
                    color: #000000;
                    font-weight: 500;

                    &:hover {
                        transform: scale(1.08);
                        transition: all 100ms linear;
                    }

                }

                .trash {
                    color: white;
                }
            }
        }
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
        margin-top: 11px;
        min-width: 50px;
    }

    .navbar>.container {
        justify-content: space-between;
    }
}

@include media-breakpoint-up(md) {
    .navbar>.container {
        justify-content: space-between;
    }

    #navbarNav {
        display: block;

        .navbar-nav {
            height: 115px;
            margin-top: 15px;
            padding-bottom: 10px;

            .nav-item {
                .headernav-btn {
                    height: 70px;
                    width: 100%;
                }
            }
        }

        .navbar-nav>li {
            padding: 0 5px;
            width: 28%;
        }

        .navbar-nav>li:last-child {
            width: fit-content;
        }

        .btn-group {
            display: none;
            width: unset;
        }
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
            width: 655px;

            .nav-item {
                text-align: center;
                justify-content: flex-end;

                .headernav-btn {
                    height: 70px;
                    width: 95%;
                }
            }
        }
    }
}</style>