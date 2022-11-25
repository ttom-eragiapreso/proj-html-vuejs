<script>
import ServicesCardVue from './partials/cards/ServicesCard.vue';
import ButtonComponentVue from './partials/ButtonComponent.vue';
import {store} from '../data/store'
export default {
  name: 'MainServicesComponent',
  components: {
    ServicesCardVue,
    ButtonComponentVue
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

    <div class="container">
      <h5 class="text-primary fw-bold">ROAD TRANSPORT</h5>
      <span class="text-white fs-1 fw-bold me-2">Main</span>
      <span class="accent-text-negative fs-1">Services</span>
      <div class="row my-4">
        <div class="col col-8">
          <p class="text-secondary">{{store.businessInfo.servicesDescription}}</p>
        </div>
        <div class="col offset-2 col-2">
          <ButtonComponentVue text="SEE ALL" :isOutline="true"/>
        </div>
      </div>


      <div class="row row-cols-lg-3">
        <div class="col" 
        v-for="(service, index) in store.businessInfo.servicesCards" 
        :key="index">
          <ServicesCardVue 
          :title="service.title" 
          :description="service.description" 
          :icon="service.icon"/>
        </div>
      </div>

    </div>
  </div>
  
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variables' as *;

.em-container {
  height: 100vh;
  background-color: $bg-dark;
  padding: 2rem 0;
}

</style>