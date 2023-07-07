<script>
import { store } from '../store';
export default {
    name: 'RestaurantMenu',
    data() {
        return {
            store
        }
    },
    methods: {
        updateStore(data) {
            let divElement = document.getElementById(`${data}`);//punto di riferimento è l'id della card che sarà l'id del piatto
            let dishTitle = divElement.querySelector('#dish-title').innerHTML;//dalla card ricavo il nome del piatto
            let dishPrice = parseFloat(divElement.querySelector('#dish-price').innerHTML);//e il prezzo
            let dishObject = {//dopodicchè creo un oggetto con nome del piatto, il suo prezzo e un counter che mi servirà
                name: dishTitle,//per contare quante volte è stato inserito nel carrello un singolo piatto
                price: dishPrice,
                count: 0
            }
            let dishFounded;
            for (let i = 0; i < this.store.cartArray.length; i++) {
                if (this.store.cartArray[i].name === dishTitle) {
                    dishFounded = true;//indica che ha trovato un doppione del prodotto
                    break;
                }
            }
            if (dishFounded) {//se lo ha trovato
                dishObject.count += 1;//incrementa il contatore del singolo prodotto di uno
            } else {//altrimenti
                this.store.cartArray.push(dishObject);//inseriscilo nell'array
                this.store.totalProducts += 1;//incrementa i prodotti presi di uno
            }
            this.store.totalPrice = this.store.totalPrice + dishPrice;//calcola il totale
        }
    }
}
</script>
<template>
    <h1>Ristorante Menu</h1>
    <div id="1">
        <h2 id="dish-title">Titolo Card</h2>
        <h3 id="dish-price">5.25</h3>
        <button class="btn btn-primary" @click="updateStore(1)">Test Bottone</button>
    </div>
</template>