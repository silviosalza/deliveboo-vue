<script>
export default {
    data() {
        return {
        }
    },
    methods: {
        async generateClientToken() {
            try {
                const response = await axios.get('/generate/token'); // Chiamata all'API nel backend per generare il token
                const clientToken = response.data.token; // Token client ricevuto dalla risposta
                // Utilizza il token client per inizializzare Braintree nel tuo componente
                // ...
            } catch (error) {
                console.error('Errore durante la generazione del token client:', error);
                // Gestisci l'errore appropriatamente
            }
        },
    }
}
</script>

<template>
    <div class="container text-center my-5">
        <div v-if="showPaymentForm">
            <PaymentForm @payment-success="handlePaymentSuccess" />
        </div>
        <div v-else>
            <div class="cart-items">
                <!-- Componente Restaurant per visualizzare i prodotti nel carrello -->
                <Restaurant :cartItems="cartItems" />
            </div>
            <button class="btn btn-primary" @click="proceedToCheckout">Procedi al checkout</button>
        </div>
    </div>
</template>
  
  
<style></style>
  