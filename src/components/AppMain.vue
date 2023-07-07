<script>
import AppAbout from './AppAbout.vue';
export default {
    name: "AppMain",
    components: { AppAbout }
}
</script>

<template>
    <AppAbout/>
</template>

<style scoped lang="scss">
@use "../styles/general.scss" as *;
@use "../styles/utilities/variables" as *;
</style>