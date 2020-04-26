import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

import BrandsTemplate from '@/components/clubs/BrandsTemplate'
import CategoriesTemplate from '@/components/categories/CategoriesTemplate'

import AboutUs from '@/components/info/AboutUs'
import Conditions from '@/components/info/Conditions'
import HowToBuy from '@/components/info/HowToBuy'
import Payment from '@/components/info/Payment'
import DeliveryAndReturn from '@/components/info/DeliveryAndReturn'
import Contact from '@/components/info/Contact'
import FAQ from '@/components/info/FAQ'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/pocetna',
      name: 'Home',
      component: Home
    },
    {
      path: '/klubovi/:id',
      component: BrandsTemplate
    },
    {
      path: '/proizvodi/:id',
      component: CategoriesTemplate
    },
    {
      path: '/info/o-nama',
      name: 'o-nama',
      component: AboutUs
    },
    {
      path: '/info/uslovi-koriscenja',
      name: 'uslovi-koriscenja',
      component: Conditions
    },
    {
      path: '/info/kako-kupiti',
      name: 'kako-kupiti',
      component: HowToBuy
    },
    {
      path: '/info/placanje',
      name: 'placanje',
      component: Payment
    },
    {
      path: '/info/isporuka-i-povracaj',
      name: 'isporuka-i-povracaj',
      component: DeliveryAndReturn
    },
    {
      path: '/info/kontakt',
      name: 'kontakt',
      component: Contact
    },
    {
      path: '/info/najcesca-pitanja',
      name: 'najcesca-pitanja',
      component: FAQ
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  mode: 'history'
})

