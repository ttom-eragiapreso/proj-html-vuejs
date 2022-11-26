<script>
import {store} from '../../../data/store'
export default {
  name: 'FeedbackCard',
  data(){
    return{
      store
    }
  },
  props: {
    card: Object
  }
}
</script>

<template>

  <div class="em-card p-5">
    <div class="img-container text-start pb-3">
      <img :src="card.logo" alt="">
    </div>
    <p class="text-secondary text-start">{{card.text}}</p>
    <div class="text-end">
      <font-awesome-icon icon="fa-solid fa-quote-right" class="text-secondary fs-3"/>
    </div>
  </div>

</template>

<style lang="scss" scoped>
@use '../../../styles/partials/mixin' as *;
@use '../../../styles/partials/variables' as *;


.em-card {
  background-color: $bg-less-dark;
  border-radius: 8px;
}

.img-container{
  width: 40%;
}
img {
  filter: invert(1);
}

</style>