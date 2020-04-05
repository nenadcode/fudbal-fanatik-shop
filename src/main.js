import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import { store } from './store/store.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRight, faArrowDown, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/';

library.add(faArrowRight, faArrowDown, faShoppingCart)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
