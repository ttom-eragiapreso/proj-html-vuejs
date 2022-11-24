import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { 
  faPhone, 
  faTruckRampBox, 
  faTemperatureLow, 
  faBoxesStacked, 
  faLocationDot, 
  faTruckMonster, 
  faBoxes, 
  faClock,
  faEnvelope,
  faTruck  } from '@fortawesome/free-solid-svg-icons'

import { faFacebookF, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { faUser } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add( faFacebookF, faLinkedin, faTwitter, faPhone, faTruckRampBox, faTemperatureLow, faBoxesStacked, faLocationDot, faTruckMonster, faBoxes, faTruck, faEnvelope, faClock, faUser)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')