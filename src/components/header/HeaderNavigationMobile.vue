<template>
  <div class="header-wrapper nav-wrapper">
    <nav id="header-nav" class="critical-hidden">
      <ul class="main-nav nav-left">
        <router-link
          tag="li"
          to="/pocetna"
          class="menu-item-headline"
          @click.native="multipleMenuChanges">
          početna
        </router-link>

        <li
          class="menu-item-headline"
          :class="{
            'headline-active': clubsMenuItemActive,
            'is-active': clubsMenuItemActive
          }"
          @click="changeClubsMenuItemActive">
            klubovi
            <span>
              <img src="../../assets/right.png" alt="arrow right" />
            </span>
            <ul :class="{ 'hovered': clubsMenuItemActive }">
              <router-link
                v-for="brand in this.brands"
                :key="brand._id"
                tag="li"
                :to="`/klubovi/${brand._id}`"
                class="secondary-link"
                @click.native="multipleMenuChanges">
                <div class="hovered-wrapper">
                  <div class="icon-wrapper">
                    <img :src="getBrandImgUrl(brand.shortName)" alt="brand.name">
                  </div>
                  {{ brand.name }}
                </div>
              </router-link>
            </ul>
        </li>

        <li
          class="menu-item-headline"
          :class="{
            'headline-active': productsMenuItemActive,
            'is-active': productsMenuItemActive
          }"
          @click="changeProductsMenuItemActive">
          proizvodi
          <span>
            <img src="../../assets/right.png" alt="arrow right" />
          </span>
          <ul :class="{ 'hovered': productsMenuItemActive }">
            <router-link
              v-for="category in this.categories"
              :key="category._id"
              tag="li"
              :to="`/proizvodi/${category._id}`"
              class="secondary-link"
              @click.native="multipleMenuChanges">
              <div class="hovered-wrapper">
                <div class="icon-wrapper">
                  <img :src='`http://localhost:3000/${category.image}`' alt="Liverpool logo">
                </div>
                {{ category.name }}
              </div>
            </router-link>
          </ul>
        </li>
      </ul>
      <ul class="main-nav nav-right">
        <router-link
          tag="li"
          to="/info/o-nama"
          class="menu-item-headline"
          @click.native="multipleMenuChanges">
          o nama
        </router-link>

        <li
          class="menu-item-headline"
          :class="{
            'headline-active': helpMenuItemActive,
            'is-active': helpMenuItemActive
          }"
          @click="changeHelpMenuItemActive">
            pomoć
          <span>
            <img src="../../assets/right.png" alt="arrow right" />
          </span>
          <ul :class="{ 'hovered': helpMenuItemActive }">
            <router-link
              tag="li"
              to="/info/uslovi-koriscenja"
              class="secondary-link"
              @click.native="multipleMenuChanges">
              <div class="hovered-wrapper">
                <div class="icon-wrapper">
                  <img src="../../assets/info/terms-and-conditions.png" alt="Terms and conditions">
                </div>
                uslovi koršićenja
              </div>
            </router-link>
            <router-link
              tag="li"
              to="/info/kako-kupiti"
              class="secondary-link"
              @click.native="multipleMenuChanges">
                <div class="hovered-wrapper">
                  <div class="icon-wrapper">
                    <img src="../../assets/info/how-to-buy.png" alt="How to buy">
                  </div>
                  kako kupiti
                </div>
              </router-link>
            <router-link
              tag="li"
              to="/info/placanje"
              class="secondary-link"
              @click.native="multipleMenuChanges">
              <div class="hovered-wrapper">
                <div class="icon-wrapper">
                  <img src="../../assets/info/payment-methods.png" alt="Payment methods">
                </div>
                načini plaćanja
              </div>
            </router-link>
            <router-link
              tag="li"
              to="/info/isporuka-i-povracaj"
              class="secondary-link"
              @click.native="multipleMenuChanges">
              <div class="hovered-wrapper">
                <div class="icon-wrapper">
                  <img src="../../assets/info/delivery-return.png" alt="Delivery and return">
                </div>
                isporuka i povraćaj
              </div>
            </router-link>
          </ul>
        </li>

        <li
          class="menu-item-headline"
          :class="{
            'headline-active': contactMenuItemActive,
            'is-active': contactMenuItemActive
          }"
          @click="changeContactMenuItemActive">
          kontakt
          <span>
            <img src="../../assets/right.png" alt="arrow right" />
          </span>
          <ul :class="{ 'hovered': contactMenuItemActive }">
            <router-link
              tag="li"
              to="/info/kontakt"
              class="secondary-link"
              @click.native="multipleMenuChanges">
              <div class="hovered-wrapper">
                <div class="icon-wrapper">
                  <img src="../../assets/info/contact-us.png" alt="Contact us">
                </div>
                pišite nam
              </div>
            </router-link>
            <router-link
              tag="li"
              to="/info/najcesca-pitanja"
              class="secondary-link"
              @click.native="multipleMenuChanges">
              <div class="hovered-wrapper">
                <div class="icon-wrapper">
                  <img src="../../assets/info/faq.png" alt="FAQ">
                </div>
                najčeśće postavljena pitanja
              </div>
            </router-link>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import routesApi from '../../api/navigation-routes'

export default {
  name: 'HeaderNavigationMobile',
  data() {
    return {
      helpMenuItemActive: false,
      contactMenuItemActive: false,
      productsMenuItemActive: false,
      clubsMenuItemActive: false,
      brands: [],
      categories: []
    }
  },
  created() {
    this.gettingBrands()
    this.gettingCategories()
  },
  methods: {
    gettingBrands() {
      return routesApi.getBrands()
        .then(brands => {
          this.brands = brands.data.brands
        })
    },
    gettingCategories() {
      return routesApi.getCategories()
        .then(categories => {
          this.categories = categories.data.categories
        })
    },
    changeMenu() {
      this.$store.commit('TOGGLE_MENU_ACTIVE')
      document.body.style.backgroundColor = "white";
    },
    changeClubsMenuItemActive() {
      return this.clubsMenuItemActive = !this.clubsMenuItemActive
    },
    changeProductsMenuItemActive() {
      return this.productsMenuItemActive = !this.productsMenuItemActive
    },
    changeHelpMenuItemActive() {
      return this.helpMenuItemActive = !this.helpMenuItemActive
    },
    changeContactMenuItemActive() {
      return this.contactMenuItemActive = !this.contactMenuItemActive
    },
    multipleMenuChanges() {
      this.changeMenu()
      this.helpMenuItemActive = false
      this.contactMenuItemActive = false
      this.clubsMenuItemActive = false
      this.productsMenuItemActive = false
    },
    getBrandImgUrl(pic) {
      return require('../../assets/logos/' + pic + '-logo.png')
    },
    getProductImgUrl(pic) {
      return require('../../assets/products/' + pic + '.png')
    }
  },
  computed: {
    ...mapGetters([
      'menuActive'
    ])
  }
}
</script>
