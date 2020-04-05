<template>
  <header id="main-header" :class="{ 'menu-open': menuActive }">
    <div
      id="mobile-nav-button"
      :class="{ 'active': menuActive }"
      @click="changeMenu">
      <span class="menu-icon-bar"></span>
      <span class="menu-icon-bar"></span>
      <span class="menu-icon-bar"></span>
    </div>
    <router-link to="/" id="logo-f">
      <img src="../../assets/fudbal-fanatik-small.png" alt="">
    </router-link>
    <div class="hdr-right">
      <font-awesome-icon class="" icon="shopping-cart" />
      0
    </div>
    <header-navigation-mobile />
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import HeaderNavigationMobile from './HeaderNavigationMobile.vue'

export default {
  name: 'HeaderContainer',
  computed: {
    ...mapGetters([
      'menuActive'
    ])
  },
  methods: {
    changeMenu() {
      this.$store.commit('TOGGLE_MENU_ACTIVE')
      document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }
  },
  components: {
    HeaderNavigationMobile
  }
}
</script>

<style lang="scss">

</style>
