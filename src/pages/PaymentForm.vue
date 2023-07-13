        
<script >
import axios from 'axios';
import braintree from 'braintree-web';
import { store } from '../store';
import { RouterLink, loadRouteLocation } from 'vue-router';
import Loader from '../components/Loader.vue';

export default {
    name: 'PaymentForm',
    components: {
        Loader
    },
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
            productsArray: [], // solo i campi dish_id e quantity (o count)
            isLoading: true

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
                        this.isLoading = false;
                        return braintree.hostedFields.create(options);
                    })
                    .then(hostedFieldInstance => {
                        console.log(hostedFieldInstance);
                        this.hostedFieldInstance = hostedFieldInstance;
                        this.isLoading = false;
                    })
                    .catch(err => {
                        console.log(err);
                        this.isLoading = false;
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
                        "token": payload.nonce,
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
    <!--New Form-->
    <div v-if="isLoading">
        <Loader />
    </div>
    <div v-else class="container p-0 my-2">
        <div class="card px-4">
            <p class="h8 py-3">Dettagli Pagamento</p>
            <form class="text-center ">
                <div class="row gx-3">
                    <div class="col-12">
                        <div class="d-flex flex-column">
                            <label for="guest_name" class="text mb-1">Nome <span class="need">*</span></label>
                            <input class="form-control mb-3" v-model="guestName" type="text" name="guest_name"
                                id="guest_name" required minlength="3" maxlength="20">
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="d-flex flex-column">
                            <label for="guest_lastname" class="text mb-1">Cognome <span class="need">*</span></label>
                            <input class="form-control mb-3" v-model="guestLastname" type="text" name="guest_lastname"
                                id="guest_lastname" required minlength="3" maxlength="20">
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="d-flex flex-column">
                            <label for="guest_address" class="text mb-1">Indirizzo <span class="need">*</span></label>
                            <input class="form-control mb-3" v-model="guestAddress" type="text" name="guest_address"
                                id="guest_address" required minlength="3" maxlength="20">
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="d-flex flex-column">
                            <label for="guest_address" class="text mb-1">E-Mail <span class="need">*</span></label>
                            <input class="form-control mb-3" type="email" v-model="guestMail" name="guest_mail"
                                id="guest_mail" required minlength="3" maxlength="20">
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="d-flex flex-column">
                            <label class="text mb-1" for="guest_phone">Telefono : <span class="need">*</span></label>
                            <input v-model="guestPhone" class="form-control" type="text" name="guest_phone" id="guest_phone"
                                required minlength="3" maxlength="20">
                        </div>
                    </div>
                    <h2 class="h8 my-3">Dati Bancari</h2>
                    <div>
                        <div class="form-group">
                            <label class="text"> Numero di carta di credito <span class="need">*</span> </label>
                            <div id="creditCardNumber" class="form-control"> </div>
                        </div>
                        <div class="form-group">
                            <div class="riga">
                                <div class="col-6">
                                    <label class="text"> Data di scadenza <span class="need">*</span></label>
                                    <div id="expireDate" class="form-control"> </div>
                                </div>
                                <div class="col-6">
                                    <label class="text"> CVV <span class="need">*</span></label>
                                    <div id="cvv" class="form-control"> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 my-3">
                        <div v-if="store.totalPrice <= 0" class="bg-danger mb-3">
                            <span class="ps-3">Carrello vuoto, effettua un ordine.</span>
                            <span class="fas fa-arrow-right"></span>
                        </div>
                        <div v-else class="btn btn-warning mb-3" @click.prevent="payWithCard">
                            <span class="ps-3">Pay €{{ store.totalPrice }}</span>
                            <span class="fas fa-arrow-right"></span>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #0C4160;

    padding: 30px 10px;
}

.card {
    max-width: 500px;
    margin: auto;
    color: black;
    border-radius: 20 px;
}

p {
    margin: 0px;
}

.container .h8 {
    font-size: 30px;
    font-weight: 800;
    text-align: center;
}

.btn.btn-warning {
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    background-image: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(230, 190, 105, 0.575) 70%, rgba(253, 187, 45, 1) 100%);
    border: none;
    transition: 0.5s;
    background-size: 200% auto;

}


.btn.btn.btn-primary:hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
}



.btn.btn-primary:hover .fas.fa-arrow-right {
    transform: translate(15px);
    transition: transform 0.2s ease-in;
}

.form-control {
    color: black;
    background-color: rgba(255, 193, 7, 0.5);
    border: 2px solid transparent;
    height: 60px;
    padding-left: 20px;
    vertical-align: middle;
}

// .form-control:focus {
//     // background-color: #0C4160;
//     // border: 2px solid #2d4dda;
//     box-shadow: none;
// }

.text {
    font-size: 14px;
    font-weight: 600;
    color: inherit;
}

::placeholder {
    font-size: 14px;
    font-weight: 600;
}
</style>