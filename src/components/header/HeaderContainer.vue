<template>
  <header id="main-header" :class="{ 'menu-open': menuActive }">
    <div
      id="mobile-nav-button"
      :class="{ 'active': menuActive }"
      @click="changeMenu">
      <!-- <font-awesome-icon class="menu-bars" icon="bars" /> -->
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
#main-header {
  position: relative;
  width: 100%;
  height: 60px;
  background: #fff;
  line-height: 60px;
  z-index: 5000;
}

#mobile-nav-button {
  position: absolute;
  top: 14px;
  left: 20px;
  width: 32px;
  height: 32px;
  line-height: 32px;
  padding: 11px 14px 11px 0;
  border: none;
  border-radius: 2px;
  display: block;
  background: 0 0;
  z-index: 8000;
  cursor: pointer;
  -webkit-transition: all 80ms ease;
  -moz-transition: all 80ms ease;
  -ms-transition: all 80ms ease;
  -o-transition: all 80ms ease;
  transition: all 80ms ease;
}
#logo-f {
  position: absolute;
  height: 37px;
  top: 20%;
  left: 38%;
  margin: 0 auto;
  text-align: center;
  vertical-align: middle;
}

.menu-icon-bar {
  position: relative;
  display: block;
  width: 18px;
  height: 1px;
  background: #000;
  border-radius: 1px;
  -webkit-transition: all .2s ease;
  -moz-transition: all .2s ease;
  -ms-transition: all .2s ease;
  -o-transition: all .2s ease;
  transition: all .2s ease;
}

.menu-icon-bar+.menu-icon-bar {
  margin-top: 2px;
}

.menu-icon-bar:nth-of-type(2) {
  top: 1px;
}

.menu-icon-bar:nth-of-type(3) {
  top: 2px;
}

#mobile-nav-button.active {
  position: fixed;

  .menu-icon-bar:nth-of-type(1) {
    -webkit-transform: translateY(4px) rotate(45deg);
    -moz-transform: translateY(4px) rotate(45deg);
    -ms-transform: translateY(4px) rotate(45deg);
    -o-transform: translateY(4px) rotate(45deg);
    transform: translateY(4px) rotate(45deg);
  }

  .menu-icon-bar:nth-of-type(2) {
    top: 1px;
    background: 0 0!important;
  }

  .menu-icon-bar:nth-of-type(3) {
    top: 2px;
    -webkit-transform: translateY(-4px) rotate(-45deg);
    -moz-transform: translateY(-4px) rotate(-45deg);
    -ms-transform: translateY(-4px) rotate(-45deg);
    -o-transform: translateY(-4px) rotate(-45deg);
    transform: translateY(-4px) rotate(-45deg);
  }
}

.hdr-right {
  position: absolute;
  top: 0;
  right: 20px;
  font-size: 12px;
  transition: top 80ms,transform .25s ease-in-out;
}

.menu-open .hdr-right {
  -webkit-transform: translateX(200px);
  -moz-transform: translateX(200px);
  -ms-transform: translateX(200px);
  -o-transform: translateX(200px);
  transform: translateX(200px);
}
</style>
