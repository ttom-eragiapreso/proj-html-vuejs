<script>
export default {
  name: 'FooterBottomComponent'
}
</script>

<template>
  <div class="em-container d-flex align-items-center">


      <div class="mx-auto">
         <span class="text-white">Enjoy the low price. We are tracking any intention of piracy.</span>
         <span class="text-white">&copy; 2020 NEXGEN is Proudly Powered by <span class="text-primary">Codings</span></span>
      </div>
     

      <div class="">
        <span class="pe-3">
          <a href="#"> <font-awesome-icon icon="fa-solid fa-arrow-up" class="circle"/></a>
         
        </span>
      </div>




  </div>

  
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variables' as *;

.em-container {
  background-color: black;
  height: $header-height;
}

.circle{
  color: darken($primary, 15%);
  background-color: lighten($secondary-color, .5%);
  font-size: 1.4rem;
  width: 1.7rem;
}

</style>