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

  <div class="em-card">
    <div class="icons">
      <font-awesome-icon :icon="icon" class="accent-text"/>
      <font-awesome-icon icon="fa-solid fa-arrow-right" class="text-primary"/>
    </div>
    <h2 class="text-white">{{title}}</h2>
    <p class="text-secondary">{{description}}</p>
  </div>

  
</template>

<style lang="scss" scoped>
@use '../../../styles/partials/mixin' as *;
@use '../../../styles/partials/variables' as *;


</style>