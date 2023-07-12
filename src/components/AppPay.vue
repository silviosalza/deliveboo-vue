<script>
import braintree from 'braintree-web';
export default {
    name: 'AppPay',
    data() {
        return {

        }
    },
    mounted() {
        //FUNZIONI PER IL PAGAMENTO
        braintree.client.create({
            authorization: "sandbox_ktrqpfdf_tfrvnyfh3xsz95xv"
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
                            placeholder: 'Enter Credit Card'
                        },
                        cvv: {
                            selector: '#cvv',
                            placeholder: 'Enter CVV'
                        },
                        expirationDate: {
                            selector: '#expireDate',
                            placeholder: '00 / 0000'
                        }
                    }
                }
                return braintree.hostedFields.create(options)
            })
            .then(hostedFieldInstance => {
                this.hostedFieldInstance = hostedFieldInstance;
            })
            .catch(err => {
            });
    },
    methods: {
        payWithCreditCard() {//funzione dedicata per il pagamento con carta di credito
            console.log('stai premendo questo bottone');
            console.log(this.hostedFieldInstance);
            if (this.hostedFieldInstance) {
                this.hostedFieldInstance.tokenize().then(payload => {
                    console.log(payload);
                }).catch(err => { console.error(err) })
            }
        },
        customerDatas() {
            let params = {
                name: document.getElementById('name').innerHTML,
                surname: document.getElementById('surname').innerHTML,
                address: document.getElementById('address').innerHTML,
                email: document.getElementById('email').innerHTML,
                phone: document.getElementById('phone').innerHTML,
            }
            alert(Object.values(params));
        }
    }
}
</script>
<template>
    <form class="d-flex flex-column">
        <input type="text" name="name" id="name" placeholder="Nome">
        <input type="text" name="surname" id="surname" placeholder="Cognome">
        <input type="text" name="address" id="address" placeholder="Indirizzo">
        <input type="email" name="email" id="email" placeholder="Indirzzo Email">
        <input type="tel" name="phone" id="phone" maxlength="10" placeholder="Numero Cellulare">
        <button class="btn btn-warning" @click="customerDatas">Send</button>
    </form>
</template>
<style lang="scss" scoped>
@use "../styles/general.scss" as *;
</style>