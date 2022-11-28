<script>
import {store} from '../data/store'
import NavbarComponentVue from './NavbarComponent.vue';
import ButtonComponentVue from './partials/ButtonComponent.vue';
export default {
  name: 'JumboComponent',
  components: {
    NavbarComponentVue,
    ButtonComponentVue
  },
  data(){
    return{
      store
    }
  }
}
</script>

<template>
  <!-- Aggiungo un container per l'immagine per poi applicare il backdrop-filter -->
  <div class="background-img">
    <!-- Container custom per avere l'immagine con width 100% -->
    <div class="em-container">

      <navbar-component-vue/>

      <div class="container container-jumbo">
        <div class="cta p-3 w-50">
          <span class="text-primary fs-5">LOGISTICS SERVICES</span>
          <h1 class="fw-bold py-3">CARGO TRANSPORT</h1>
          <p class="text-secondary fs-4 py-4">{{store.businessInfo.description}}</p>
          <button-component-vue text="GET IN TOUCH" :isOutline="false" />
          <button-component-vue text="READ MORE" :isOutline="true" class="mx-3"/>
        </div>
      </div>
          
    </div>
      
  </div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variables' as *;

.background-img{
  background-image: url('../assets/img/bg-9.jpg');
  background-size: cover;
  background-position: center;
  color: white;
}

.em-container {
  backdrop-filter: brightness(35%);
  padding-bottom: 9rem;
}

.container-jumbo {
  margin-top: 5rem;
}

h1 {
  font-size: 5rem;
}



</style>