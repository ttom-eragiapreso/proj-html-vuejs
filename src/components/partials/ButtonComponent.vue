<script>
export default {
  name: 'ButtonComponent',
  props: {
    text: String,
    isOutline: Boolean
  }
}
</script>

<template>

  <button class="btn"
  :class="[ isOutline? 'btn-outline-primary' : 'btn-primary']"
  >{{text}}</button>
  
</template>

<style lang="scss" scoped>
@use '../../styles/partials/mixin' as *;
@use '../../styles/partials/variables' as *;


button {
  color: white;
}

</style>