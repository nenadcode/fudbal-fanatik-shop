<template>
  <div id="top-navigation">
    <div class="top-navigation-wrapper">
      <nav id="hdr-nav">
        <ul class="mn-nav nav-left">
          <li>
            <router-link
              tag="a"
              to="/pocetna">
              početna
            </router-link>
          </li>
          <li
            class="menu-item-headline"
            :class="{
              'headline-active': brandsMenuItemActive,
            }"
            @click="changeBrandsMenuItemActive"
            v-click-outside="hide">
              klubovi
              <span>
                <img src="../../assets/down.png" alt="arrow down" class="menu-arrow" />
              </span>
              <ul class='shop-menu' :class="{ 'hovered': brandsMenuItemActive }">
                <router-link
                  v-for="brand in this.brands"
                  :key="brand._id"
                  tag="li"
                  :to="`/klubovi/${brand._id}`"
                  class="secondary-link">
                  <div class="hovered-wrapper">
                    <div class="icon-wrapper">
                      <img :src="getBrandImgUrl(brand.shortName)" alt="brand.name">
                    </div>
                  </div>
                  {{ brand.name }}
                </router-link>
              </ul>
          </li>
          <li
            class="menu-item-headline"
            :class="{
              'headline-active': productsMenuItemActive,
            }"
            @click="changeProductsMenuItemActive">
            proizvodi
            <span>
              <img src="../../assets/down.png" alt="arrow right" class="menu-arrow" />
            </span>
            <ul class='shop-menu' :class="{ 'hovered': productsMenuItemActive }">
              <router-link
                v-for="category in this.categories"
                :key="category._id"
                tag="li"
                :to="`/proizvodi/${category._id}`"
                class="secondary-link">
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
        <ul class="mn-nav nav-right">
          <router-link
            tag="li"
            to="/info/o-nama"
            class="menu-item-headline">
            o nama
          </router-link>

          <li
            class="menu-item-headline"
            :class="{
              'headline-active': helpMenuItemActive,
            }"
            @click="changeHelpMenuItemActive">
              pomoć
            <span>
              <img src="../../assets/down.png" alt="arrow right" class="menu-arrow" />
            </span>
            <ul class='shop-menu' :class="{ 'hovered': helpMenuItemActive }">
              <router-link
                tag="li"
                to="/info/uslovi-koriscenja"
                class="secondary-link">
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
                class="secondary-link">
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
                class="secondary-link">
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
                class="secondary-link">
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
            }"
            @click="changeContactMenuItemActive">
            kontakt
            <span>
              <img src="../../assets/down.png" alt="arrow right" class="menu-arrow" />
            </span>
            <ul class='shop-menu' :class="{ 'hovered': contactMenuItemActive }">
              <router-link
                tag="li"
                to="/info/kontakt"
                class="secondary-link">
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
                class="secondary-link">
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
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'HeaderNavigation',
  props: [
    'brands',
    'categories'
  ],
  data() {
    return {
      helpMenuItemActive: false,
      contactMenuItemActive: false,
      productsMenuItemActive: false,
      brandsMenuItemActive: false
    }
  },
  methods: {
    hide() {
      this.brandsMenuItemActive = false
    },
    changeBrandsMenuItemActive() {
      this.productsMenuItemActive = false
      this.helpMenuItemActive = false
      this.contactMenuItemActive = false
      this.brandsMenuItemActive = !this.brandsMenuItemActive
    },
    changeProductsMenuItemActive() {
      this.brandsMenuItemActive = false
      this.helpMenuItemActive = false
      this.contactMenuItemActive = false
      this.productsMenuItemActive = !this.productsMenuItemActive
    },
    changeHelpMenuItemActive() {
      this.brandsMenuItemActive = false
      this.productsMenuItemActive = false
      this.contactMenuItemActive = false
      this.helpMenuItemActive = !this.helpMenuItemActive
    },
    changeContactMenuItemActive() {
      this.brandsMenuItemActive = false
      this.productsMenuItemActive = false
      this.helpMenuItemActive = false
      this.contactMenuItemActive = !this.contactMenuItemActive
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