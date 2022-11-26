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
          <span class="nex">NEW</span><span class="gen">GEN</span>
          <p class="secondary-color mb-3">A Functional HTML Template for Corporate & Business.</p>
          <details-component-vue :isCircle="false" textColor="#bcbdbd"/>
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
}

</style>