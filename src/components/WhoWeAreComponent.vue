<script>
import SidebarComponentVue from './partials/SidebarComponent.vue';
export default {
  name: 'WhoWeAreComponent',
  components: {
    SidebarComponentVue
  }
}
</script>

<template>
  <div class="container">
    
    <div class="row">

      <div class="col col-9">
        <div class="who-we-are">
          <h5 class="text-primary">WHO WE ARE</h5>
        </div>
      </div>
      
      <div class="col col-3">
        <SidebarComponentVue/>
      </div>

    </div>
    

  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variables' as *;

  .container {
    height: 100vh;
  }

</style>