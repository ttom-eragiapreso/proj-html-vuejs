<script>
import {store} from '../../../data/store'
export default {
  name: 'ServicesCard',
  data(){
    return{
      store
    }
  },
  props: {
    title: String,
    icon: String, 
    description: String
  }
}
</script>

<template>

  <div class="em-card p-5">
    <div class="icons d-flex justify-content-between mb-3">
      <font-awesome-icon :icon="icon" class="accent-text fs-2 circle"/>
      <font-awesome-icon icon="fa-solid fa-arrow-right" class="text-primary fs-3"/>
    </div>
    <h2 class="text-white mb-3">{{title}}</h2>
    <p class="text-secondary">{{description}}</p>
  </div>

  
</template>

<style lang="scss" scoped>
@use '../../../styles/partials/mixin' as *;
@use '../../../styles/partials/variables' as *;


.em-card {
  background-color: $bg-less-dark;
  border-radius: 8px;
}

font-awesome-icon{
  width: 250px;
}


</style>