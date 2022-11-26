<script>
import {store} from '../../../data/store'
export default {
  name: 'ResultsCard',
  data(){
    return{
      store
    }
  },
  props: {
    card: Object
  }
}
</script>

<template>

  <div class="em-card text-center">
    <span class="fw-bold text-primary fs-1">{{card.value}}</span>
    <h4 class="py-3 text-white">{{card.title}}</h4>
  </div>

  
</template>

<style lang="scss" scoped>
@use '../../../styles/partials/mixin' as *;
@use '../../../styles/partials/variables' as *;


.em-card {
  border-radius: 8px;
  // aspect-ratio: 1/1;
  padding: .5rem;
}

.circle {
  color: $primary;
  background-color: $secondary-color;
}

</style>