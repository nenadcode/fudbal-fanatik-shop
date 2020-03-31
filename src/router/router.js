import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

import ClubsLiverpool from '@/components/clubs/ClubsLiverpool'
import ClubsChelsea from '@/components/clubs/ClubsChelsea'
import ClubsManUtd from '@/components/clubs/ClubsManUtd'
import ClubsArsenal from '@/components/clubs/ClubsArsenal'
import ClubsRealMadrid from '@/components/clubs/ClubsRealMadrid'
import ClubsBarcelona from '@/components/clubs/ClubsBarcelona'
import ClubsJuventus from '@/components/clubs/ClubsJuventus'
import ClubsMilan from '@/components/clubs/ClubsMilan'

/* import ProductsBracelets from '@/components/products/ProductsBracelets'
import ProductsBracelets from '@/components/products/ProductsBracelets'
import ProductsBracelets from '@/components/products/ProductsBracelets'
import ProductsBracelets from '@/components/products/ProductsBracelets'
import ProductsBracelets from '@/components/products/ProductsBracelets'
import ProductsBracelets from '@/components/products/ProductsBracelets'
import ProductsBracelets from '@/components/products/ProductsBracelets'
import ProductsBracelets from '@/components/products/ProductsBracelets'
import ProductsBracelets from '@/components/products/ProductsBracelets'
import ProductsBracelets from '@/components/products/ProductsBracelets' */

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
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/klubovi/liverpool',
      name: 'clubs-liverpool',
      component: ClubsLiverpool
    },
    {
      path: '/klubovi/chelsea',
      name: 'clubs-chelsea',
      component: ClubsChelsea
    },
    {
      path: '/klubovi/man-utd',
      name: 'clubs-man-utd',
      component: ClubsManUtd
    },
    {
      path: '/klubovi/arsenal',
      name: 'clubs-arsenal',
      component: ClubsArsenal
    },
    {
      path: '/klubovi/real-madrid',
      name: 'clubs-real-madrid',
      component: ClubsRealMadrid
    },
    {
      path: '/klubovi/barcelona',
      name: 'clubs-barcelona',
      component: ClubsBarcelona
    },
    {
      path: '/klubovi/juventus',
      name: 'clubs-juventus',
      component: ClubsJuventus
    },
    {
      path: '/klubovi/milan',
      name: 'clubs-milan',
      component: ClubsMilan
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
  mode: 'history'
})

