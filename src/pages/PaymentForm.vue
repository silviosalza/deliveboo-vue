        
<script >
import axios from 'axios';
import braintree from 'braintree-web';
import { store } from '../store';
import { RouterLink } from 'vue-router';


export default {
    name: 'PaymentForm',
    data() {
        return {
            store,
            braintreeClient: null,
            braintreeHostedFields: null,
            myUrl: 'http://localhost:8000',
            guestName: '',
            guestLastname: '',
            guestAddress: '',
            guestPhone: '',
            guestMail: '',
            productsArray: [] // solo i campi dish_id e quantity (o count)

        };
    },
    mounted() {
        const productsArray = JSON.parse(localStorage.getItem('cart'));
        productsArray.forEach(element => {
            const quantity = element.count;
            const dish_id = element.dish_id;
            this.productsArray.push({ quantity, dish_id });   // mi salvo le coppie chiavi valori che interessano
        });

        axios
            .get(`${this.myUrl}/api/generate/token`)
            .then(resp => {  //richiamo funzione generate/token del backend x generarmi il token
                braintree.client.create({
                    authorization: resp.data.token                          //che metto nell autorizzazione
                })
                    .then(clientInstance => {
                        let options = {
                            client: clientInstance,
                            styles: {
                                input: {
                                    'font-size': '14px',
                                    'font-family': 'Open Sans'
                                }
                            },
                            fields: {
                                number: {
                                    selector: '#creditCardNumber',
                                    placeholder: 'Inserisci numero carta'
                                },
                                cvv: {
                                    selector: '#cvv',
                                    placeholder: 'Inserisci CVV'
                                },
                                expirationDate: {
                                    selector: '#expireDate',
                                    placeholder: 'MM / AAAA'
                                }
                            }
                        };

                        return braintree.hostedFields.create(options);
                    })
                    .then(hostedFieldInstance => {
                        console.log(hostedFieldInstance);
                        this.hostedFieldInstance = hostedFieldInstance;

                    })
                    .catch(err => {
                        console.log(err);
                    });
            })
    },
    methods: {
        clearCart() {
            this.store.cartArray = [];
            this.store.totalPrice = 0;
            this.store.totalProducts = 0;
            localStorage.setItem('cart', JSON.stringify(this.store.cartArray));//invio al localStorage ogni nuova versione aggiornata di cartArray
            localStorage.setItem('total', this.store.totalPrice);//stessa cosa per il totale dell'ordine
            localStorage.setItem('products', this.store.totalProducts);// e per il numero di prodotti
        },
        payWithCard() {
            if (this.hostedFieldInstance) {
                this.error = "";
                this.hostedFieldInstance.tokenize().then(payload => {
                    console.log(payload.nonce);
                    axios.post(`${this.myUrl}/api/make/payment`, {
                        "products": this.productsArray,
                        "token": "fake-valid-nonce",
                        "guest_name": this.guestName,
                        "guest_lastname": this.guestLastname,
                        "guest_phone": this.guestPhone,
                        "guest_address": this.guestAddress,
                        "guest_mail": this.guestMail,
                    }).then(resp => {
                        console.log(resp);
                        // alert("Payment successful!");

                    }).catch(err => {
                        console.log(err);
                    }).finally(() => {
                        this.clearCart();
                        this.$router.push('/thankyou');
                    });
                })
            }
        }
    }
};

</script>

<template>
    <div class="container text-center my-5">
        COMPARIRA FORM compilazione dati utente e carta
        <form class="text-center ">

            <label class="info col-md-4 col-form-label" for="guest_name">Nome : <span class="need">*</span></label>
            <div class="col-md-6 div-input mx-auto">
                <input v-model="guestName" class="form-control" type="text" name="guest_name" id="guest_name"
                    required minlength="3" maxlength="20">

            </div>
            <label class="info col-md-4 col-form-label" for="guest_lastname">Cognome : <span class="need">*</span></label>
            <div class="col-md-6 div-input mx-auto">
                <input v-model="guestLastname" class="form-control" type="text" name="guest_lastname" id="guest_lastname"
                    required minlength="3" maxlength="20">

            </div>
            <label class="info col-md-4 col-form-label" for="guest_address">Indirizzo : <span
                    class="need">*</span></label>
            <div class="col-md-6 div-input mx-auto">
                <input v-model="guestAddress" class="form-control" type="text" name="guest_address" id="guest_address"
                    required minlength="3" maxlength="20">

            </div>
            <label class="info col-md-4 col-form-label" for="guest_phone">Telefono : <span class="need">*</span></label>
            <div class="col-md-6 div-input mx-auto">
                <input v-model="guestPhone" class="form-control" type="text" name="guest_phone" id="guest_phone"
                    required minlength="3" maxlength="20">

            </div>
            <label class="info col-md-4 col-form-label" for="guest_mail">Email : <span class="need">*</span></label>
            <div class="col-md-6 div-input mx-auto my-5">
                <input v-model="guestMail" class="form-control" type="text" name="guest_mail" id="guest_mail"
                    required minlength="3" maxlength="20">

            </div>

            <!-- card details -->
            <div>
                <div class="form-group">
                    <label> Numero di carta di credito </label>
                    <div id="creditCardNumber" class="form-control"> </div>
                </div>
                <div class="form-group">
                    <div class="riga">
                        <div class="col-6">
                            <label> Data di scadenza </label>
                            <div id="expireDate" class="form-control"> </div>
                        </div>
                        <div class="col-6">
                            <label> CVV </label>
                            <div id="cvv" class="form-control"> </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center">

                <button type="submit" class="btn btn-danger" @click.prevent="payWithCard">Submit</button>
            </div>
        </form>
    </div>
</template>

<style lang="scss" scoped>
.btn {
    background-color: rgb(76, 106, 30) !important;
}
</style>