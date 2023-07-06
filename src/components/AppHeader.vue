<script>
import '../main.js';
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
            ]
        }
    }
}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg h-100">
            <div class="container d-flex justify-content-between align-items-center h-100">

                <div class="logo">
                    <a class="navbar-brand" href="#"><img class="logo_header" src="../assets/img/logo-no-background.png"
                            alt=""></a>
                </div>

                <div id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item" v-for="item in menuItems">
                            <router-link :to="{ name: item.routeName }" aria-current="page">{{
                                item.label }}</router-link>
                        </li>
                        <li class="nav-item">
                            <a class="active" href="#join_us">Collabora con noi</a>
                        </li>
                        <li class="nav-item">
                            <a class="active" href="http://localhost:8000/">Area Riservata</a>
                        </li>
                        <li class="nav-item">
                            <button class="btn btn-dark" type="button" data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasEnd" aria-controls="offcanvasEnd">
                                <i class="fa-solid fa-cart-shopping"></i>
                            </button>
                            <p id="sum-prices"></p>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasEnd" aria-labelledby="offcanvasEndLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasEndLabel">Carrello</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">

        </div>
    </div>
</template>


<style scoped lang="scss">
@use "../styles/general.scss" as *;
@use "../styles/utilities/variables" as *;


header {
    height: 120px;
    background-color: $app_color;
    color: $black_text;
    font-weight: 900;
    font-size: 1.5rem;

    li {
        margin-left: 2rem;
    }
}

.logo_header {
    height: 80px;
}
</style>