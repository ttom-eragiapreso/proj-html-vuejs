<script>
import {store} from '../data/store'
import LogisticsCard from './partials/cards/LogisticsCard.vue'
export default {
  name: 'LogisticsComponent',
  components:{
    LogisticsCard
  },
  data(){
    return{
      store
    }
  }
}
</script>

<template>

<div class="em-container">

  <div class="text-container text-center">
    <h5 class="text-primary mb-4">HOW IT WORKS IN PRACTICE</h5>
    <span class="accent-text fs-1 px-3 fw-bold me-2">Logistical</span><span class="fs-1 fw-bold">Procedure</span>
    <p class="text-secondary mt-3">We work with innovative methodologies to ensure that the entire delivery process is done from start to finish as planned</p>
  </div>

  <div class="container">
     <div class="row row-cols-5">

    <div class="col" v-for="(card, index) in store.businessInfo.logisticsCards" :key="index">
      <logistics-card :card="card"/>
    </div>

  </div>
  </div>
 

</div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variables' as *;

.em-container{
  // height: 65vh;
  background-color: $bg-light;
  padding: 4.5rem 0;
  position: relative;
  &::after{
    content: '';
    position: absolute;
    width: 100%;
    border-bottom: 4px solid $secondary-color;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
  .col {
    position: relative;
    z-index: 2;
  }
}


</style>