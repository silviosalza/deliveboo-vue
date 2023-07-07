<script>
export default {
    name: "AppAbout"
}
</script>

<template>
    <div class="about-us text-center position-relative">
        <div class="section">
            <div class="section image">
                <img src="../assets/img/logo-no-backgroufvnd.png" alt="logo">
            </div>
            <div class="section position-absolute bottom-0 start-50 translate-middle-x pb-1">
                <h3 class="text-start fw-bold">ABOUT US</h3>
                <p class="text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas animi sed culpa temporibus  aspernatur
                    consequuntur itaque labore. Culpa ad architecto incidunt dolore cum, at sint officiis nesciunt commodi non
                    laborum molestiae fuga rerum, labore possimus cumque adipisci voluptatem dolorum sapiente unde veritatis, rem
                    quam ipsa enim. Temporibus nulla aperiam aliquid?</p>
            </div>
        </div>
        
    </div>
</template>

<style scoped lang="scss">
@use "../styles/general.scss" as *;
@use "../styles/utilities/variables" as *;

.about-us {
    height: 700px;
    background-image: url(../assets/img/aboutUs.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;


    img {
        padding-top: 30px;
        height: 200px;
    }

    // MEDIA QUERY

    @include media-breakpoint-up(md) {

        img {
        padding-top: 30px;
        height: 250px;
        }
    }
}
</style>