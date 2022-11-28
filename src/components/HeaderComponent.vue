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
  <div class="container py-4 d-flex">
    
    <div class="hours">
      <font-awesome-icon icon="fa-solid fa-clock" class="px-3"/>
      <span>Open Hours: {{store.businessInfo.openingDays}} - {{store.businessInfo.openingHours}}</span>
    </div>

    <div class="phone ms-auto px-3">
      <font-awesome-icon icon="fa-solid fa-phone" class="px-2"/>
      <span>{{store.businessInfo.phoneNumber}}</span>
    </div>

    <div class="email px-3">
      <font-awesome-icon icon="fa-solid fa-envelope" class="px-2"/>
      <span>{{store.businessInfo.emailAddress}}</span>
    </div>

    <div class="socials px-3" v-for="(social, index) in store.businessInfo.socialLinks" :key="index">
      <a :href="social.href">
        <font-awesome-icon :icon="social.icon" class="fs-5"/>
      </a>
    </div>
  </div>
</div>

  
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variables' as *;

.em-container {
  background-color: #21333f;
  color: white;
}

.socials a {
  color: white;
}


</style>