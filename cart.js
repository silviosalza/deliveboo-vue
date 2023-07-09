updateStore(data) {
    let divElement = document.getElementById(`${data}`);//punto di riferimento è l'id della card che sarà l'id del piatto
    let dishTitle = divElement.querySelector('#dish-title').innerHTML;//dalla card ricavo il nome del piatto
    let dishId = divElement.querySelector('#dish-id').innerHTML;//dalla card ricavo id del piatto
    let dishRestaurantId = divElement.querySelector('#dish-restaurant-id').innerHTML;//dalla card ricavo id del ristorante
    let dishPrice = parseFloat(divElement.querySelector('#dish-price').innerHTML);//e il prezzo
    let dishObject = {//dopodicchè creo un oggetto con nome del piatto, il suo prezzo e un counter che mi servirà
        name: dishTitle,//per contare quante volte è stato inserito nel carrello un singolo piatto
        price: dishPrice,
        count: 1,
        restaurant_id: dishRestaurantId,
        dish_id: dishId
    }
    console.log(this.store.cartArray);
    console.log(dishTitle);
    if (this.store.cartArray.length === 0 ) {
        this.store.cartArray.push(dishObject);//lo inserisco nell'array
        this.store.totalProducts += 1;//incremento i prodotti presi di uno
        this.store.totalPrice = this.store.totalPrice + dishPrice;//calcola il totale
        
    } else {//altrimenti

        if(this.store.cartArray.some(item => item.name === dishTitle)){
           //se nel carrello è già presente il piatto
        let findItems = this.store.cartArray.filter(item => item['name'] === dishTitle);//cerco l'oggetto che ha come nome dishTitle (findItems risulterà un array)
        let itemFounded = findItems[0];//lo assegno alla variabile itemFounded
        itemFounded.count += 1;//incremento di uno il count dell'elemento
        findItems = [];//svuoto l'array

        } else if(this.store.cartArray[0].restaurant_id === dishObject.restaurant_id ){
            this.store.cartArray.push(dishObject);//lo inserisco nell'array
            this.store.totalProducts += 1;//incremento i prodotti presi di uno
            this.store.totalPrice = this.store.totalPrice + dishPrice;//calcola il totale
         }else{
            alert('Non puoi aggiungere prodotti di un ristorante diverso')
        }
    }
    
    localStorage.setItem('cart', JSON.stringify(this.store.cartArray));//invio al localStorage ogni nuova versione aggiornata di cartArray
    localStorage.setItem('total', this.store.totalPrice);//stessa cosa per il totale dell'ordine
    localStorage.setItem('products', this.store.totalProducts);// e per il numero di prodotti
},