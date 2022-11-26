<script>
import {store} from '../data/store'
import ButtonComponentVue from './partials/ButtonComponent.vue';
import FormComponent from './partials/FormComponent.vue'
import DetailsComponentVue from './DetailsComponent.vue';
export default {
  name: 'ContactUsComponent',
  data(){
    return{
      store
    }
  },
  components: {
    ButtonComponentVue,
    FormComponent,
    DetailsComponentVue
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

          <DetailsComponentVue :isCircle="true" fontSize="" textColor="primary"/>
          
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



.white-hover{
  color: $primary;
}


</style>