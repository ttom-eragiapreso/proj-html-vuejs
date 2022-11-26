<script>
import {store} from '../../../data/store'
export default {
  name: 'LogisticsCard',
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
    <span class="circle fw-bold">{{card.number}}</span>
    <h4 class="py-3">{{card.title}}</h4>
    <p class="text-secondary">{{card.description}}</p>
  </div>

  
</template>

<style lang="scss" scoped>
@use '../../../styles/partials/mixin' as *;
@use '../../../styles/partials/variables' as *;


.em-card {
  border-radius: 8px;
  aspect-ratio: 1/1;
  padding: 1.7rem;
}

.circle {
  color: $primary;
  background-color: $secondary-color;
}

</style>