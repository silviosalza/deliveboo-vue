<script>
export default{
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
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Deliveboo</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item" v-for="item in menuItems">
                            <router-link :to="{ name: item.routeName }" class="nav-link active" aria-current="page">{{
                                item.label }}</router-link>
                        </li>
                        <li>
                            
                        </li>
                        <li class="nav-link">
                            <a class="no-style" href="https://www.lanazione.it/">Area Riservata</a>
                        </li>
                        <li class="nav-link">
                            <a class="no-style" href="#join_us">Collabora con noi</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>