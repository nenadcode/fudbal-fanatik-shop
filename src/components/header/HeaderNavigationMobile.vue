<template>
  <nav>
    <div :class="{ 'navigation-mobile-active': menuActive }" class="navigation-mobile-drawer">
      <ul class="navigation-mobile-menu">
        <div class="close-menu" @click="changeMenu">
          <font-awesome-icon icon="times" size="2x"/>
        </div>
        <router-link tag="li" to="/" @click.native="multipleMenuChanges">
          Početna
        </router-link>

        <li>
          <div class="menu-item-headline" :class="{ 'headline-active': clubsMenuItemActive }">
            Klubovi
            <span @click="changeClubsMenuItemActive">
              <font-awesome-icon v-if="!clubsMenuItemActive" icon="angle-down" />
              <font-awesome-icon v-if="clubsMenuItemActive" icon="times" />
            </span>
          </div>
          <div v-if="clubsMenuItemActive">
            <ul class="navigation-mobile-submenu">
              <li>
                  <div class="navigation-mobile-submenu-headline-wrapper">
                    <h3>Klubovi - test</h3>
                  </div>
                  <ul>
                    <router-link
                      tag="li"
                      to="/"
                      class="submenu-item">test</router-link>
                  </ul>
                </li>
              </ul>
          </div>
        </li>

        <li>
          <div class="menu-item-headline" :class="{ 'headline-active': productsMenuItemActive }">
            Proizvodi
            <span @click="changeProductsMenuItemActive">
              <font-awesome-icon v-if="!productsMenuItemActive" icon="angle-down" />
              <font-awesome-icon v-if="productsMenuItemActive" icon="times" />
            </span>
          </div>
          <div v-if="productsMenuItemActive">
            <ul class="navigation-mobile-submenu">
              <li>
                  <div class="navigation-mobile-submenu-headline-wrapper">
                    <h3>Proizvodi - test</h3>
                  </div>
                  <ul>
                    <router-link
                      tag="li"
                      to="/"
                      class="submenu-item">test</router-link>
                  </ul>
                </li>
              </ul>
          </div>
        </li>

        <router-link
          tag="li"
          to="/info/o-nama"
          @click.native="multipleMenuChanges">O nama</router-link>

        <li>
          <div class="menu-item-headline" :class="{ 'headline-active': helpMenuItemActive }">
            Pomoć & Kontakt
            <span @click="changeHelpMenuItemActive">
              <font-awesome-icon v-if="!helpMenuItemActive" icon="angle-down" />
              <font-awesome-icon v-if="helpMenuItemActive" icon="times" />
            </span>
          </div>
          <div v-if="helpMenuItemActive">
            <ul class="navigation-mobile-submenu">
              <li>
                <div class="navigation-mobile-submenu-headline-wrapper">
                  <h3>Informacije</h3>
                </div>
                <ul>
                  <router-link
                    tag="li"
                    to="/info/uslovi-koriscenja"
                    class="submenu-item"
                    @click.native="multipleMenuChanges">Uslovi koršićenja</router-link>
                </ul>
              </li>
            </ul>

            <ul class="navigation-mobile-submenu">
              <li>
                <div class="navigation-mobile-submenu-headline-wrapper">
                  <h3>Plaćanje i Isporuka</h3>
                </div>
                <ul>
                  <router-link
                    tag="li"
                    to="/info/kako-kupiti"
                    class="submenu-item"
                    @click.native="multipleMenuChanges">Kako kupiti?</router-link>
                  <router-link
                    tag="li"
                    to="/info/placanje"
                    class="submenu-item"
                    @click.native="multipleMenuChanges">Načini plaćanja</router-link>
                  <router-link
                    tag="li"
                    to="/info/isporuka-i-povracaj"
                    class="submenu-item"
                    @click.native="multipleMenuChanges">Isporuka i povraćaj</router-link>
                </ul>
              </li>
            </ul>

            <ul class="navigation-mobile-submenu">
              <li>
                <div class="navigation-mobile-submenu-headline-wrapper">
                  <h3>Podrška</h3>
                </div>
                <ul>
                  <router-link
                    tag="li"
                    to="/info/kontakt"
                    class="submenu-item"
                    @click.native="multipleMenuChanges">Kontaktirajte nas</router-link>
                  <router-link
                    tag="li"
                    to="/info/najcesca-pitanja"
                    class="submenu-item"
                    @click.native="multipleMenuChanges">Najčeśće postavljena pitanja</router-link>
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
      helpMenuItemActive: false,
      productsMenuItemActive: false,
      clubsMenuItemActive: false
    }
  },
  methods: {
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
    multipleMenuChanges() {
      this.changeMenu()
      this.helpMenuItemActive = false
      this.clubsMenuItemActive = false
      this.productsMenuItemActive = false
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
