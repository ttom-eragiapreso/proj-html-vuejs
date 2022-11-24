<script>
import {store} from '../data/store'
export default {
  name: 'HeaderComponent',
  data(){
    return {
      store
    }
  }
}
</script>

<template>

<div class="em-container">
  <div class="container">
    
    <div class="hours">
      <font-awesome-icon icon="fa-solid fa-clock"/>
      <span>Open Hours: {{store.businessInfo.openingDays}} - {{store.businessInfo.openingHours}}</span>
    </div>

  </div>
</div>

  
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variables' as *;


</style>