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
          <h1 class="mb-4">Grazie per l'acquisto, passa a trovarci presto</h1>
        </div>
      </div>
    </div>
  </template>
  
  
  <style>
  </style>