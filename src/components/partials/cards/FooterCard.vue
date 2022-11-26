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

    <h2>{{card.title}}</h2>
    <ul>
      <li v-for="(link, index) in card.links" :key="index">
        <font-awesome-icon icon="fa-solid fa-chevron-right"/>
        <a :href="link.href">
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