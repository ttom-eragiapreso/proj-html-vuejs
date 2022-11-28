<script>
import {store} from '../data/store'
import ResultsCard from './partials/cards/ResultsCard.vue'
export default {
  name: 'ResultsComponent',
  components: {
    ResultsCard
  },
  data(){
    return{
      store
    }
  }
}
</script>

<template>
  
  <div class="em-container d-flex align-items-center">

    <div class="container text-center">
      <h4 class="fw-bold text-primary">WHAT ARE WE DOING</h4>
      <h2 class="text-white">Results in Numbers</h2>
      <div class="row">
        <div class="col" v-for="(card,index) in store.businessInfo.resultsCards" :key="index">
          <results-card :card="card" />
        </div>
      </div>
    </div>

  </div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variables' as *;

.em-container{
  background-image: url(../assets/img/bg-10.jpg);
  background-size: cover;
  background-position: 0px -200px;
  padding: 4rem 0;
}

h2 {
  font-size: 3.5rem;
  font-weight: bold;
  margin: 2rem 0;
}

</style>