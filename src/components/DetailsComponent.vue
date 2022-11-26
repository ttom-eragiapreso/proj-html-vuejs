<script>
import {store} from '../data/store'
export default {
  name: 'ContactUsComponent',
  props: {
    textColor: String,
    isCircle: Boolean,
    fontSize: String
  },
  data(){
    return{
      store
    }
  },
}
</script>

<template>

<div class="details d-flex align-items-center">

  <font-awesome-icon icon="fa-solid fa-phone" 
  :class="[{'circle': isCircle},
  textColor === 'primary'? 'text-primary' : 'custom-color']"/>

  <span 
  :class="[
  textColor === 'primary'? 'text-primary' : 'custom-color',
  !fontSize? '' : 'custom-font-size', 'ps-3']">{{store.businessInfo.phoneNumber}}</span>
</div>

<div class="details d-flex align-items-center">
  <font-awesome-icon icon="fa-solid fa-envelope" 
  :class="[{'circle': isCircle},
  textColor === 'primary'? 'text-primary' : 'custom-color']"/>

  <span 
  :class="[
  textColor === 'primary'? 'text-primary' : 'custom-color',
  !fontSize? '' : 'custom-font-size', 'ps-3']">{{store.businessInfo.emailAddress}}</span>
</div>

<div class="details d-flex align-items-center">
  <font-awesome-icon icon="fa-solid fa-location-dot" 
  :class="[{'circle': isCircle},
  textColor === 'primary'? 'text-primary' : 'custom-color']"/>

  <span 
  :class="[
  textColor === 'primary'? 'text-primary' : 'custom-color',
  !fontSize? '' : 'custom-font-size', 'ps-3']">{{store.businessInfo.address}}</span>
</div>
          
  
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variables' as *;


.custom-color {
  color: v-bind(textColor);
}

.custom-font-size {
  font-size: v-bind(fontSize);
}
.fa-phone.circle, .fa-envelope.circle, .fa-location-dot.circle {
  background-color: $secondary-color;
}

.details {
  margin: 1rem 0;
}

.circle {
  width: 16px;
  padding: .7rem; 
}


</style>