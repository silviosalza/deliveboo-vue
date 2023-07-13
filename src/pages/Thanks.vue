  <script>
import methods from 'braintree-web/lib/methods';

  export default {
    name: 'Thanks',
    mounted(){
        setTimeout(() => {
            this.$router.push('/');
        }, 4000);

    }

    
  }

</script>

<template>
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3 text-center">
          <h1 class="mb-4">Thank you for your purchase!</h1>
          <p>We appreciate your business and hope you enjoy your purchase.</p>
        </div>
      </div>
    </div>
  </template>
  
  
  <style>
  </style>