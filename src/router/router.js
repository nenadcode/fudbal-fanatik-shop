import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Conditions from '@/components/info/Conditions'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/info/uslovi-koriscenja',
      name: 'uslovi-koriscenja',
      component: Conditions
    }
  ],
  mode: 'history'
})

