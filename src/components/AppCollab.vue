<script>
export default {
    name: "AppCollab"
}
</script>

<template>
 <div id="collab" class="section-collab d-md-flex align-items-md-center">
        <div class="container ms_container d-md-flex flex-md-row align-items-sm-center justify-content-evenly">
            <h2 class="text-light text-center pt-2">SEI UN RISTORATORE? COLLABORA CON NOI!</h2>
            <a href="http://localhost:8000/" target="_blank"><button class="d-flex justify-content-center align-items-center text-light btn btn-outline-warning container btn-sm hidden1" type="submit">ENTRA IN DELIVEBOO
            </button></a>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../styles/general.scss" as *;
@use "../styles/utilities/variables" as *;

.section-collab {
    height: 200px;
    background-image: url(../assets/img/pexels-cottonbro-studio-3298637.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding-top: 20px;

    .ms_container {
        border: 3px solid $yellow-400;
    }

    button {
        height: 60px;
        font-size: 0.8rem;
        margin-top: 20px;
        border: 1px solid rgb(224, 204, 24);
        transition: all .2s;
        box-shadow: 5px 5px 2px 1px rgba(224, 204, 24, .2);
    }

    button:hover {
        box-shadow: -5px 5px 2px -1px rgba(224, 204, 24, .2);
    }

    .hidden1 {
        display: none;
    }
}

// MEDIA QUERY

@include media-breakpoint-up(sm) {

    .section-collab {
        height: 250px;

        .ms_container {
            height: 170px;
            margin-top: 20px;

            h2 {
                margin-right: 20px;
            }
        }

        button {
            width: 60px;
            margin-bottom: 10px;
        }

        .hidden1 {
            display: flex;
        }

        .hidden2 {
            display: none;
        }
    }

}

@include media-breakpoint-up(md) {
    .section-collab {
        height: 450px;

        .ms_container {
            height: 170px;
            margin-top: 20px;

            button {
                width: 300px;
                margin-bottom: 10px;
            }
        }

    }
}
</style>