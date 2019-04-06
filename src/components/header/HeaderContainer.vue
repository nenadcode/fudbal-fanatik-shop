<template>
  <header class="util">
    <div class="header-bar" @click="changeMenu">
      <font-awesome-icon class="menu-bars" icon="bars" />
      <span>Meni</span>
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
    }
  },
  components: {
    HeaderNavigationMobile
  }
}
</script>

<style lang="scss">
  .util {
    width: 100%;
    background-color: rgb(233, 233, 233);
    color: #505050;
    font-size: 0.75em;

    .header-bar {
      padding: 15px 20px;

      .menu-bars {
        font-size: 1.25em;
        margin-right: 5px;
      }
    }
  }
</style>
