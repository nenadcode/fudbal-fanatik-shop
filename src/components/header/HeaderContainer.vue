<template>
  <header id="main-header" :class="{ 'menu-open': menuActive }" :key="componentKey">
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
        <router-link to="/add-to-cart" id="cart-link">
          <font-awesome-icon class="shopping-cart" icon="shopping-cart" />
          <span class="mobile-cart-counter">{{ this.cartItemQty }}</span>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import EventBus from '../../services/event-bus'
import routesApi from '../../api/navigation-routes'
import HeaderNavigationMobile from './HeaderNavigationMobile.vue'
import HeaderNavigation from './HeaderNavigation.vue'
import localStorageService from '../../services/localStorageService'

export default {
  name: 'HeaderContainer',
  data() {
    return {
      brands: [],
      categories: [],
      cartLocalStorage: [],
      cartItemQty: 0,
      componentKey: 0
    }
  },
  created() {
    this.gettingBrands()
    this.gettingCategories()
    this.getCartItemQty()
  },
  mounted() {
    EventBus.$on('CART_UPDATED', () => {
      this.componentKey += 1
    })
  },
  updated() {
    this.getCartItemQty()
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
    },
    getCartItemQty() {
      this.cartLocalStorage = localStorageService.parseFromLocalStorage('cart')
      this.cartLocalStorage == null
        ? this.cartItemQty = 0
        : this.cartItemQty = this.cartLocalStorage.itemsQtyTotal
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
