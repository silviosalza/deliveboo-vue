let productsInCartArray = [];
const parentElement = document.querySelector('#bought-items'); //il parentElement seleziona la unordered list con id bought-items
const totalPriceOrder = document.querySelector('#sum-prices');//questo elemento mi indicherà il totale da pagare
const products = document.querySelectorAll('.product-item');//seleziono tutti i prodotti
//devo creare un foreach che mi seleziona tutti gli elementi che hanno una classe in comune (ad esempio product-item)

//----------FUNZIONI----------//

function updateShoppingCartHTML() {
    if (productsInCartArray.length > 0) {//se è presente almeno un elemento nel carrello
        let result = productsInCartArray.map(product => {
            return `
            <li class="bought-item">
            <img src="${product.image}">
            <div class="bought-item-text">
            <h5>${product.title}</h5>
            <p>${product.price}€</p>
            <div class="item-actions">
            <button class="button-minus" data-id=${product.id}>-</button>
			<span class="countOfProduct">${product.count}</span>
			<button class="button-plus" data-id=${product.id}>+</button>
            </div>
            </div>
            </li>`;
        })
    } else {//altrimenti se il carrello è vuoto
        document.querySelector('.checkout').classList.add('.hidden');
        parentElement.innerHTML = '<h4 class="empty">Il tuo carrello è vuoto</h4>';
        totalPriceOrder.innerHTML = '';
    }
}


function updateProductsInCart(product) {
    for (let i = 0; i < productsInCartArray.length; i++) {
        if (productsInCartArray[i].id == product.id) {//se il prodotto è già presente nel carrello
            productsInCartArray[i].count += 1; //incremento la sua quantità di uno
            productsInCartArray[i].price = productsInCartArray[i].basePrice * productsInCartArray[i].count;
            //(SOPRA)modifico il totale del singolo prodotto moltiplicando il prezzo singolo per la quantità
            return;
        }
    }
    productsInCartArray.push(product);//se non è ancora presente lo inserisco nel carrello
}

products.forEach(product => {
    product.addEventListener('click', (e) => {
        console.log('hai cliccato il prodotto');
        if (e.target.classList.contains('addToCart')) { //quando clicchiamo sul pulsante aggiungi al carrello
            const productId = e.target.dataset.productID;//catturo l'id del prodotto
            const productName = product.querySelector('.product-name').innerHTML;//catturo il nome
            const productPrice = product.querySelector('.product-price')//catturo il prezzo
            const productImage = product.querySelector('.product-image').src;//prendo il link dell'immagine del prodotto
            //dopodicchè creo l'oggetto che verrà inserito in productsInCartArray
            let productToCart = {
                id: productId,
                name: productName,
                image: productImage,
                price: +productPrice,//converto in valore numerico il prezzo
                count: 1,//conta quante volte viene selezionato il singolo prodotto
                basePrice: +productPrice//questo valore verrà usato insieme a count per il calcolo del totale di ogni singolo prodotto
            }
            updateProductsInCart(productToCart);//funzione che inserisce il prodotto nel carrello ed effettua i calcoli dei prezzi
            updateShoppingCartHTML();
            //N.B. volendo possiamo catturare l'id del ristorante per oscurare il carrello se passiamo ad un altro.
        }
    })
});
//se clicco il bottone del singolo prodotto lo aggiungo alla lista indicata dal parentElement
parentElement.addEventListener('click', (e) => {
    if (e.target.parentElement) {
        const plusBtn = e.target.classList.contains('button-plus');
        const minusBtn = e.target.classList.contains('button-minus');
        for (let i = 0; i < productsInCartArray.length; i++) {
            if (productsInCartArray[i] === e.target.dataset.id) {
                if (plusBtn) {
                    productsInCartArray[i].count += 1;
                } else if (minusBtn) {
                    productsInCartArray[i].count -= 1;
                }
                productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;
            }
            if (productsInCart[i].count <= 0) {
                productsInCart.splice(i, 1);
            }
        }
        updateShoppingCartHTML();
    }
});
updateShoppingCartHTML();