<script>
import {store} from '../data/store'
export default {
  name: 'JumboComponent',
  data(){
    return{
      store
    }
  }
}
</script>

<template>
  <!-- Aggiungo un container per l'immagine per poi applicare il backdrop-filter -->
  <div class="background-img">
    <!-- Container custom per avere l'immagine con width 100% -->
    <div class="em-container">

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
            <h2 class="pe-3 my-auto">
              <a href="#">{{link.title}}</a> 
            </h2>
          </div>

          <div class="get-in-touch d-flex align-items-center">
            <font-awesome-icon icon="fa-regular fa-user" class="fs-4 px-3" />
            <button class="btn btn-primary">GET IN TOUCH</button>
          </div>
        </div>

      </div>
    
    </div>

  </div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variables' as *;

.background-img{
  height: calc(100vh - $header-height);
  background-image: url('../assets/img/bg-9.jpg');
  background-size: cover;
  background-position: center;
  color: white;
}

.em-container {
  height: calc(100vh - $header-height);
  backdrop-filter: brightness(68%);
}

.logo {
  font-size: 2rem;
  color: white;
  .nex{
    @include pillLogo($secondary-color);
  }
}

</style>