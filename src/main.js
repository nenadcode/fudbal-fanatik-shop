import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import { store } from './store/store.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faAngleDown, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBars, faAngleDown, faTimes)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
