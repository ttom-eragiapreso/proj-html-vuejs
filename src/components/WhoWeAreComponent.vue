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
          
          <span class="accent-text fs-1">
            <font-awesome-icon icon="fa-regular fa-gem"/>
            Excellence
          </span>
          <span class="fs-1 fw-bold ms-2">in Transport</span>

          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat accusantium ut soluta asperiores deleniti ratione alias, omnis, tenetur ullam saepe quos repudiandae praesentium quia eligendi, tempora quidem quaerat voluptate sed.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat accusantium ut soluta asperiores deleniti ratione alias, omnis, tenetur ullam saepe quos repudiandae praesentium quia eligendi, tempora quidem quaerat voluptate sed.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat accusantium ut soluta asperiores deleniti ratione alias, omnis, tenetur ullam saepe quos repudiandae praesentium quia eligendi, tempora quidem quaerat voluptate sed.</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente itaque repellendus repellat cupiditate?</p>

          <ul>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipiscing elit</li>
            <li>integer molestie lorem at masa</li>
            <li>Facilissis in pretium nisl aliquet</li>
            <li>Dapibus hendrerit mauris cuarbitur</li>
          </ul>

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
    padding: 7rem 0;
  }

  p {
    color: $secondary;
    &:first-of-type {
      margin-top: 1rem;
    }
    &:nth-of-type(3){
      border-left: 5px solid $secondary-color;
      padding: 1rem 1.5rem;
    }
  }

  ul {
    list-style: disc;
    padding-left: 1rem;
    li{
      color: $secondary;
    }
  }

</style>