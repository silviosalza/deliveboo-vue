<script>

export default {
    data() {
        return {
            showModal: true
        };
    },
    methods: {
        closeModal() {
            this.showModal = false;
        }
    }
}
</script>


<template>
    <div class="modal-container" v-if="showModal">
        <div class="modal">
            <h2 class="modal-title">Errore</h2>
            <p class="modal-message">Non puoi aggiungere prodotti di un ristorante diverso.</p>
            <button class="modal-close" @click="closeModal">Chiudi</button>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.modal-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);

    .modal {
        background-color: #fff;
        padding: 20px;
        max-width: 400px;
        text-align: center;

        .modal-title {
            font-size: 24px;
            margin-bottom: 10px;
        }

        .modal-message {
            font-size: 16px;
            margin-bottom: 20px;
        }

        .modal-close {
            background-color: #007bff;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        .modal-close:hover {
            background-color: #0056b3;
        }
    }
}
</style>