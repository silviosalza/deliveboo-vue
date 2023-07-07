<script>
import AppAbout from './AppAbout.vue';
import AppCollab from './AppCollab.vue';
export default {
    name: "AppMain",
    components: { AppAbout, AppCollab }
}
</script>

<template>
    <AppAbout/>
    <AppCollab/>
</template>

<style scoped lang="scss">
@use "../styles/general.scss" as *;
@use "../styles/utilities/variables" as *;
</style>