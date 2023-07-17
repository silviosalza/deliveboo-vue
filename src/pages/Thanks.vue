<script>
import methods from 'braintree-web/lib/methods';

export default {
  name: 'Thanks',
  mounted() {
    setTimeout(() => {
      this.$router.push('/');
    }, 40000000000000);

  }


}

</script>

<template>
  <div class="container">
    <div class="row">
      <div class="thanks col-md-6 offset-md-3 text-center d-flex flex-column justify-content-center align-items-center">
        <h1 class="mb-4">Grazie per l'acquisto e buon appetito!</h1>
        <img src="src\img\delivering.gif" alt="Delivery Guy">
      </div>
    </div>
  </div>
</template>
  
  
<style lang="scss" scoped>

.thanks{
  margin: 250px 0;
  img {
    max-width: 200px;
  }
}
</style>