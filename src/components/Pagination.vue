<script>

export default {
    name: 'Pagination',
    emits: ["dati"],
    props: {
        pages: Object

    }

}

</script>

<template>
    <nav class="my-5 d-flex justify-content-center" aria-label="Page navigation example">
        <ul class="pagination">

            <li class="page-item" :class="{ 'disabled': pages.currentPage === 1 }">
                <a class="page-link" href="#" @click.prevent="$emit('dati', pages.currentPage - 1)">&#xab;</a>
            </li>

            <li class="page-item" :class="{ 'active': pageNum === pages.currentPage }"
                v-for="(pageNum, index) in pages.lastPage">
                <a class="page-link" href="#" @click.prevent="$emit('dati', pageNum)">{{ pageNum }}</a>
            </li>

            <li class="page-item" :class="{ 'disabled': pages.currentPage == pages.lastPage }">
                <a class="page-link" href="#" @click.prevent="$emit('dati', pages.currentPage + 1)">&#xbb;</a>
            </li>

        </ul>

    </nav>
</template>

<style scoped lang="scss">
@use "../styles/general.scss" as *;
@use "../styles/utilities/variables" as *;
.pagination {
    .page-link {
        color: $app_color;
        background-color: #28282d;
        border: solid 20px #28282d;
        font-size: 1.2rem;
        font-weight: 700;
    }

    .page-link.active,
    .active>.page-link {
        z-index: 3;
        color: #000000;
        background-color: $app_color;
        border-color: $app_color;
    }
}
</style>