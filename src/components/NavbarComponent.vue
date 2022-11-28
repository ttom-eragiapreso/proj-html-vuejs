<script>
import ButtonComponentVue from './partials/ButtonComponent.vue';
import {store} from '../data/store'
export default {
  name: 'NavBarComponent',
  components: {
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

   <div class="container py-4 d-flex">

    <div class="logo">
      <span class="nex">NEX</span><span class="gen">GEN</span>
    </div>

    <div class="em-navbar d-flex align-items-center ms-auto">

      <!-- Stampo i link dinamicamente in base a quanti ce ne sono nello store -->
      <div class="em-navbar-link"
      v-for="(link, index) in store.businessInfo.navbarLinks"
      :key="index"
      >
        <h3 class="pe-3 my-auto">
          <a href="#">{{link.title}}</a> 
        </h3>
      </div>

      <div class="get-in-touch d-flex align-items-center">
        <font-awesome-icon icon="fa-regular fa-user" class="fs-4 px-3" />
        <button-component-vue text="GET IN TOUCH" :isOutline="false" />
      </div>

    </div>

  </div>

  

</template>

<style lang="scss" scoped>
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variables' as *;


.container{
  height: $navbar-height;
}

.logo {
  font-size: 2rem;
  color: white;
  .nex{
    @include pillLogo($primary);
  }
}

</style>