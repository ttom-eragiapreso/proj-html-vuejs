<script>
import {store} from '../data/store'
import ButtonComponentVue from './partials/ButtonComponent.vue';
import FooterCardVue from './partials/cards/FooterCard.vue';
import DetailsComponentVue from './DetailsComponent.vue';
export default {
  name: 'FooterTopComponent',
  components:{
    ButtonComponentVue,
    FooterCardVue,
    DetailsComponentVue
  },
  data(){
    return{
      store
    }
  }
}
</script>

<template>
  
  <div class="em-container text-white">

    <div class="container">
      <div class="row row-cols-4">
        <div class="col">
          <span class="nex">NEX</span><span class="gen">GEN</span>
          <p class="text-secondary mb-3">A Functional HTML Template for Corporate & Business.</p>
          <details-component-vue :isCircle="false" textColor="#bcbdbd" fontSize="1rem"/>
          <ButtonComponentVue :isOutline="true" :text="'GET IN TOUCH'"/>
        </div>
        <div class="col" v-for="(card, index) in store.businessInfo.footerCards" :key="index">
          <FooterCardVue :card="card"/>
        </div>
      </div>
    </div>

  </div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variables' as *;

.em-container{
  background-color: $bg-dark;
  padding: 4rem 0;
}

.nex {
  @include pillLogo($primary)
}

</style>