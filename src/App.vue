<script>
import HeaderComponentVue from './components/HeaderComponent.vue';
import JumboComponentVue from './components/JumboComponent.vue';
import WhoWeAreComponentVue from './components/WhoWeAreComponent.vue';
import ContactUsComponentVue from './components/ContactUsComponent.vue';
import FeedbackComponentVue from './components/FeedbackComponent.vue';
import FooterBottomComponentVue from './components/FooterBottomComponent.vue';
import FooterTopComponentVue from './components/FooterTopComponent.vue';
import MainServicesComponentVue from './components/MainServicesComponent.vue';
import NavbarComponentVue from './components/NavbarComponent.vue';
import ResultsComponentVue from './components/ResultsComponent.vue';
import LogisticsComponentVue from './components/LogisticsComponent.vue';
import {store} from './data/store'
export default {
  name: 'App',
  data(){
    return {
      store
    }
  },
  components: {
    HeaderComponentVue,
    JumboComponentVue,
    WhoWeAreComponentVue,
    ContactUsComponentVue,
    FeedbackComponentVue,
    FooterTopComponentVue,
    FooterBottomComponentVue,
    MainServicesComponentVue,
    NavbarComponentVue,
    LogisticsComponentVue,
    ResultsComponentVue
  }
}
</script>

<template>
  
  <HeaderComponentVue/>
  <JumboComponentVue/>
  <WhoWeAreComponentVue/>
  <MainServicesComponentVue/>
  <LogisticsComponentVue/>
  <ResultsComponentVue/>
  <FeedbackComponentVue/>
  <ContactUsComponentVue/>
  <FooterTopComponentVue/>
  <FooterBottomComponentVue/>

</template>

<style lang="scss">
@use './styles/general.scss' as *;


</style>