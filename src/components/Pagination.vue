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
                <a class="page-link" href="#" @click.prevent="$emit('dati', pages.currentPage - 1)">Previous</a>
            </li>

            <li class="page-item" :class="{ 'active': pageNum === pages.currentPage }"
                v-for="(pageNum, index) in pages.lastPage">
                <a class="page-link" href="#" @click.prevent="$emit('dati', pageNum)">{{ pageNum }}</a>
            </li>

            <li class="page-item" :class="{ 'disabled': pages.currentPage == pages.lastPage }">
                <a class="page-link" href="#" @click.prevent="$emit('dati', pages.currentPage + 1)">Next</a>
            </li>

        </ul>

    </nav>
</template>

<style scoped lang="scss">
.pagination {
    .page-link {
        color: #eead15;
        background-color: #5100ffdc;
        border-color: #533e80;
    }

    .page-link.active,
    .active>.page-link {
        z-index: 3;
        color: #444b55;
        background-color: #0ede2a;
        border-color: #0ede2a;
    }
}
</style>