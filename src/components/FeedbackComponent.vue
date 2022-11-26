<script>
import {store} from '../data/store'
import FeedbackCardVue from './partials/cards/FeedbackCard.vue';
export default {
  name: 'FeedbackComponent',
  components: {
    FeedbackCardVue
  },
  data(){
    return {
      store
    }
  }
}
</script>

<template>

  <div class="em-container py-5">
    <div class="container text-center">
      <h4 class="text-primary mb-3">CUSTOMER TESTIMONIALS</h4>
      <span class="fs-1 text-white fw-bold">Trusted</span><span class="accent-text-negative fs-1 fw-bold ms-2">Feedback</span>
      <p class="text-secondary w-50 mx-auto mt-4">We work intensively in serach of ideals that can add up in the lives of our customers. This is what moves us and we are grateful for the recognition</p>

      <div class="row row-cols-3">
        <div class="col" v-for="(card, index) in store.businessInfo.feedbackCards" :key="index">
          <FeedbackCardVue :card="card"/>
        </div>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variables' as *;

.em-container {
  // min-height: 80vh;
  background-color: $bg-dark;
}

</style>