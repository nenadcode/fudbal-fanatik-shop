<template>
  <nav>
    <div :class="{ 'navigation-mobile-active': menuActive }" class="navigation-mobile-drawer">
      <ul class="navigation-mobile-menu">
        <div class="close-menu" @click="changeMenu">
          <font-awesome-icon icon="times" size="2x"/>
        </div>
        <router-link tag="li" to="/">
          Početna
        </router-link>

        <li class="menu-item">
          Klubovi
          <span @click="menuItemActive = !menuItemActive">
            <font-awesome-icon icon="angle-down" />
          </span>
          <ul class="navigation-mobile-submenu">

          </ul>
        </li>

        <li class="menu-item">
          Proizvodi
          <span><font-awesome-icon icon="angle-down" /></span>
        </li>

        <router-link tag="li" to="/">O nama</router-link>

        <li>
          <div class="menu-item-headline" :class="{ 'headline-active': menuItemActive }">
            Pomoć & Kontakt
            <span @click="menuItemActive = !menuItemActive">
              <font-awesome-icon v-if="!menuItemActive" icon="angle-down" />
              <font-awesome-icon v-if="menuItemActive" icon="times" />
            </span>
          </div>
          <div v-if="menuItemActive">
            <ul class="navigation-mobile-submenu">
              <li>
                <div class="navigation-mobile-submenu-headline-wrapper">
                  <h3>Informacije</h3>
                </div>
                <ul>
                  <router-link tag="li" to="/" class="submenu-item">Uslovi koršićenja</router-link>
                </ul>
              </li>
            </ul>

            <ul class="navigation-mobile-submenu">
              <li>
                <div class="navigation-mobile-submenu-headline-wrapper">
                  <h3>Plaćanje i Isporuka</h3>
                </div>
                <ul>
                  <router-link tag="li" to="/" class="submenu-item">Kako kupiti?</router-link>
                  <router-link tag="li" to="/" class="submenu-item">Načini plaćanja</router-link>
                  <router-link tag="li" to="/" class="submenu-item">Isporuka i povraćaj</router-link>
                </ul>
              </li>
            </ul>

            <ul class="navigation-mobile-submenu">
              <li>
                <div class="navigation-mobile-submenu-headline-wrapper">
                  <h3>Podrška</h3>
                </div>
                <ul>
                  <router-link tag="li" to="/" class="submenu-item">Kontaktirajte nas</router-link>
                  <router-link tag="li" to="/" class="submenu-item">Najčeśće postavljena pitanja</router-link>
                </ul>
              </li>
            </ul>
          </div>
        </li>

      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'HeaderNavigationMobile',
  data() {
    return {
      menuItemActive: false
    }
  },
  methods: {
    changeMenu() {
      this.$store.commit('TOGGLE_MENU_ACTIVE')
    }
  },
  computed: {
    ...mapGetters([
      'menuActive'
    ])
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Montserrat');
  .navigation-mobile-drawer {
    position: fixed;
    width: 0px;
    height: 100%;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: rgb(233, 233, 233);
    overflow-x: hidden;
    transition: .3s;
  }
  .navigation-mobile-active {
    width: 200px;
  }
  .navigation-mobile-menu {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    color: #333333;
    margin: 0;

    .close-menu {
      display: flex;
      align-self: flex-end;
      padding: 20px 20px 0 0;
    }

    li {
      padding: 15px 20px;
    }

    .menu-item {
      display: flex;
      justify-content: space-between;
    }

    .menu-item-headline {
      display: flex;
      justify-content: space-between;
    }

    .headline-active {
      color: #1391a4;
    }
  }

  .navigation-mobile-submenu {
    font-family: 'Montserrat', sans-serif;
    padding: 0 10px;

    ul {
      padding: 10px;
    }

    li {
      padding: 0;
    }

    h3 {
      font-size: 13px;
      text-transform: uppercase;
      font-weight: 400;
      margin: 10px 0;
    }

    .navigation-mobile-submenu-headline-wrapper {
      padding: 15px 0 5px;
      border-bottom: 1px solid #e0e0e0;
    }

    .submenu-item {
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
      font-size: 12px;
      text-transform: none;
      color: #888888;
      letter-spacing: 0;
      padding: 5px 0;
    }
  }

</style>
