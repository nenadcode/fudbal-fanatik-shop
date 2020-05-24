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
    <header-navigation-mobile v-if="menuActive" />
    <header-navigation v-if="!isMobile()" />
    <div class="hdr-right">
      <font-awesome-icon class="" icon="shopping-cart" />
      0
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import HeaderNavigationMobile from './HeaderNavigationMobile.vue'
import HeaderNavigation from './HeaderNavigation.vue'

export default {
  name: 'HeaderContainer',
  components: {
    HeaderNavigationMobile,
    HeaderNavigation
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
    }
  }
}
</script>

<style lang="scss">

</style>
