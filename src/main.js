import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import { store } from './store/store.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRight, faArrowDown, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/';

library.add(faArrowRight, faArrowDown, faShoppingCart, faFacebookF, faInstagram)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.directive('click-outside', {
  bind: function (el, binding, vnode) {
    el.event = function (event) {
      if (!(el == event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener('click', el.event)
  },
  unbind: function (el) {
    document.body.removeEventListener('click', el.event)
  },
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
