<template>
  <header id="main-header" :class="{ 'menu-open': menuActive }">
    <div
      id="mobile-nav-button"
      v-if="isMobile()"
      :class="{ 'active': menuActive }"
      @click="changeMenu">
      <span class="menu-icon-bar"></span>
      <span class="menu-icon-bar"></span>
      <span class="menu-icon-bar"></span>
    </div>
    <router-link to="/pocetna" id="logo-f">
      <img src="../../assets/fudbal_fanatik.png" alt="Fudbal Fanatik logo">
    </router-link>
    <header-navigation-mobile
      v-if="menuActive"
      :brands="this.brands"
      :categories="this.categories"
    />
    <header-navigation
      v-if="!isMobile()"
      :brands="this.brands"
      :categories="this.categories"
    />
    <div class="hdr-right">
      <div class="mobile-cart-wrapper">
        <router-link to="/cart" id="cart-link">
          <font-awesome-icon class="shopping-cart" icon="shopping-cart" />
          <span class="mobile-cart-counter">0</span>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import routesApi from '../../api/navigation-routes'
import HeaderNavigationMobile from './HeaderNavigationMobile.vue'
import HeaderNavigation from './HeaderNavigation.vue'

export default {
  name: 'HeaderContainer',
  data() {
    return {
      brands: [],
      categories: []
    }
  },
  created() {
    this.gettingBrands()
    this.gettingCategories()
  },
  computed: {
    ...mapGetters([
      'menuActive'
    ])
  },
  methods: {
    changeMenu() {
      this.$store.commit('TOGGLE_MENU_ACTIVE')
      document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    },
    isMobile() {
      return screen.width < 1025 ? true : false
    },
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
    }
  },
  components: {
    HeaderNavigationMobile,
    HeaderNavigation
  }
}
</script>

<style lang="scss">

</style>
