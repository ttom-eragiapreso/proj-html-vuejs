<script>
import {store} from '../../data/store'
export default {
  name: 'SidebarComponent',
  data(){
    return{
      store
    }
  }
}
</script>

<template>


  <div class="vehicles-container p-3">
    <h3>Vehicle Types</h3>
    <div class="vehicle-card d-flex mb-3 py-2" v-for="(type, index) in store.businessInfo.vehicleTypes" :key="index">

      <div class="img-container p-2 me-3">
        <img :src="type.img" :alt="type.type">
      </div>
      <div class="text-wrapper">
        <h3 class="m-0">{{type.type}}</h3>
        <span class="text-secondary">{{type.description}}</span>
      </div>

      
    </div>
  </div>

  <div class="certifications-container p-3">
    <h3>Certifications</h3>
    <div class="cert-img-container d-inline-block me-3" v-for="(cert, index) in store.businessInfo.certifications" :key="index">
      <img :src="cert.img" :alt="cert.name">
    </div>
  </div>

  
</template>

<style lang="scss" scoped>
@use '../../styles/partials/mixin' as *;
@use '../../styles/partials/variables' as *;


.img-container {
  background-color: $secondary-color;
  width: 80px;
}
.cert-img-container{
  width: 120px;
  box-shadow: 0 0 6px 0px #00000047;

}

.vehicle-card {
  border-bottom: 1px solid grey;
  &:last-child{
    border: none;
  }
}
</style>