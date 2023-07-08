<script>
import { store } from '../store';
export default {
    name: 'RestaurantMenu',
    data() {
        return {
            store,
            dishesArray: [],
            
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
                count: 1
            }
            if (this.store.cartArray.some(item => item.name === dishTitle)) {//se nel carrello è già presente il piatto
                let findItems = this.store.cartArray.filter(item => item['name'] === dishTitle);//cerco l'oggetto che ha come nome dishTitle (findItems risulterà un array)
                let itemFounded = findItems[0];//lo assegno alla variabile itemFounded
                itemFounded.count += 1;//incremento di uno il count dell'elemento
                findItems = [];//svuoto l'array
            } else {//altrimenti
                this.store.cartArray.push(dishObject);//lo inserisco nell'array
                this.store.totalProducts += 1;//incremento i prodotti presi di uno
            }
            this.store.totalPrice = this.store.totalPrice + dishPrice;//calcola il totale
            localStorage.setItem('cart', JSON.stringify(this.store.cartArray));//invio al localStorage ogni nuova versione aggiornata di cartArray
            localStorage.setItem('total', this.store.totalPrice);//stessa cosa per il totale dell'ordine
            localStorage.setItem('products', this.store.totalProducts);// e per il numero di prodotti
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

    <div  v-for="(product,index) in dishesArray" :key="index" class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{product.dish_name}}</h5>
            <p class="card-text">{{product.price}}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>

</template>