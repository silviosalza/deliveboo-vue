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
            store
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
                    </ul>
                </div>

                <div id="navbarNav">
                    <ul class="navbar-nav align-items-center justify-content-end m-0">
                        <li class="nav-item ms-5" v-for="item in menuItems">
                            <router-link :to="{ name: item.routeName }" aria-current="page">{{
                                item.label }}</router-link>
                        </li>
                        <li class="nav-item ms-5">
                            <a class="active" href="#join_us">Collabora con noi</a>
                        </li>
                        <li class="nav-item ms-5">
                            <a class="active" href="http://localhost:8000/" target="_blank">Area Riservata</a>
                        </li>
                        <li class="nav-item ms-5">
                            <button class="cart-hover ms-btn border border-2 border-dark rounded" type="button"
                                data-bs-toggle="offcanvas" data-bs-target="#offcanvasEnd" aria-controls="offcanvasEnd">
                                <i class="fa-solid fa-cart-shopping"></i>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasEnd" aria-labelledby="offcanvasEndLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasEndLabel">Carrello</h5>
            <p>Sono presenti {{ store.totalProducts }} prodotti.</p>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <ul>
                <li v-for="(item, index) in store.cartArray">
                    {{ item.name }} - Prezzo {{ item.price }}
                </li>
            </ul>
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

    .nav-item:hover {
        text-decoration: underline;
    }

    .cart-hover:hover {
        background-color: #212529;
        color: #edc900;
        // border: 1px solid #212529;
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
        min-width: 50px;
    }

    .navbar>.container {
        justify-content: center;
    }

    #navbarNav {
        display: block;

        .navbar-nav>li {
            margin-left: 10px;
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

    // .navbar-nav {
    //         li {
    //             width: calc(100% / 5);
    //         }
    //     }
}

@include media-breakpoint-up(lg) {

    header {
        height: 180px;

        li {
            font-size: 1rem;
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
                text-align: end;
            }
        }
    }
}
</style>