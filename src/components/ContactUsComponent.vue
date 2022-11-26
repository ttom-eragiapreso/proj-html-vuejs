<script>
import {store} from '../data/store'
import ButtonComponentVue from './partials/ButtonComponent.vue';
import FormComponent from './partials/FormComponent.vue'
export default {
  name: 'ContactUsComponent',
  data(){
    return{
      store
    }
  },
  components: {
    ButtonComponentVue,
    FormComponent
  }
}
</script>

<template>

  <div class="container">
    <div class="row">

      <div class="col col-8">
        <div class="get-in-touch">
          <h4 class="text-primary">SEND A MESSAGE</h4>
          <span class="fs-1 fw-bold">Get in</span><span class="accent-text fs-1 fw-bold ms-2">Touch</span>
          <h5 class="text-secondary">We will respond to your message as soon as possible.</h5>
            <form-component class="pe-5"/>
            <ButtonComponentVue text="SEND" :isOutline="false" class="my-4"/>
        </div>
      </div>

      <div class="col col-4">
        <div class="info">
          <h4>Example Inc.</h4>
          <p class="text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, pariatur.</p>
          <p class="text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, pariatur.</p>

          <div class="details d-flex align-items-center">
            <font-awesome-icon icon="fa-solid fa-phone" class="circle text-primary"/>
            <span class="text-primary ps-3">{{store.businessInfo.phoneNumber}}</span>
          </div>
          <div class="details d-flex align-items-center">
            <font-awesome-icon icon="fa-solid fa-envelope" class="circle text-primary"/>
            <span class="text-primary ps-3">{{store.businessInfo.emailAddress}}</span>
          </div>
          <div class="details d-flex align-items-center">
            <font-awesome-icon icon="fa-solid fa-location-dot" class="circle text-primary"/>
            <span class="text-primary ps-3">{{store.businessInfo.address}}</span>
          </div>
          
          <ButtonComponentVue text="VIEW MAP" :isOutline="true" class="white-hover"/>
        </div>
      </div>
    </div>


  </div>
  
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variables' as *;


.container{
  padding: 3.5rem 0;
}

.fa-phone, .fa-envelope, .fa-location-dot {
  background-color: $secondary-color;
}

.details {
  margin: 1rem 0;
}

.circle {
  width: 16px;
  padding: .7rem; 
}

.white-hover{
  color: $primary;
}


</style>