<script>
import {store} from '../../../data/store'
export default {
  name: 'FooterCard',
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

    <h2 class="mb-3">{{card.title}}</h2>
    <ul class="p-0">
      <li v-for="(link, index) in card.links" :key="index">
        <font-awesome-icon icon="fa-solid fa-chevron-right" class="me-3 text-secondary"/>
        <a :href="link.href" @click.prevent="">
          <span class="text-secondary">{{link.text}}</span>
        </a>
      </li>
    </ul>
  </div>

</template>

<style lang="scss" scoped>
@use '../../../styles/partials/mixin' as *;
@use '../../../styles/partials/variables' as *;


.em-card {
  background-color: $bg-less-dark;
  border-radius: 8px;
}


</style>