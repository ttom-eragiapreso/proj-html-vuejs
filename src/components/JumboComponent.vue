<script>
export default {
  name: 'JumboComponent'
}
</script>

<template>

  <div class="em-container">

    <div class="container">
      

    </div>

  </div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variables' as *;

.em-container{
  height: calc(100vh - $header-height);
  background-image: url('../assets/img/bg-9.jpg');
  background-size: cover;
  background-position: center;
}

</style>