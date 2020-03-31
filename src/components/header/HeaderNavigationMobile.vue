<template>
  <div class="header-wrapper nav-wrapper">
    <nav id="header-nav" class="critical-hidden">
      <div :class="{ 'navigation-mobile-active': menuActive }" class="navigation-mobile-drawer">
        <ul class="main-nav nav-left">
          <router-link tag="li" to="/" @click.native="multipleMenuChanges">
            <div class="menu-item-headline">
              početna
            </div>
          </router-link>

          <li class="dropdown">
            <div
              class="menu-item-headline"
              :class="{ 'headline-active': clubsMenuItemActive }"
              @click="changeClubsMenuItemActive">
              klubovi
              <span>
                <font-awesome-icon v-if="!clubsMenuItemActive" icon="arrow-right" />
                <font-awesome-icon v-if="clubsMenuItemActive" icon="arrow-down" />
              </span>
            </div>
            <div v-if="clubsMenuItemActive">
              <ul class="hovered">
                <router-link
                  tag="li"
                  to="`/klubovi/${liverpool}`"
                  class="secondary-link"
                  @click.native="multipleMenuChanges">
                  <div class="hovered-wrapper">
                    <div class="icon-wrapper">
                      <img src="../../assets/liverpool-logo.png" alt="Liverpool logo">
                    </div>
                    liverpool
                  </div>
                </router-link>
                <router-link
                  tag="li"
                  to="/klubovi/chelsea"
                  class="secondary-link"
                  @click.native="multipleMenuChanges">
                  <div class="hovered-wrapper">
                    <div class="icon-wrapper">
                      <img src="../../assets/chelsea-logo.png" alt="Chelsea logo">
                    </div>
                    chelsea
                  </div>
                </router-link>
                <router-link
                  tag="li"
                  to="/klubovi/man-utd"
                  class="secondary-link"
                  @click.native="multipleMenuChanges">
                  <div class="hovered-wrapper">
                    <div class="icon-wrapper">
                      <img src="../../assets/man-utd-logo.png" alt="Manchester United logo">
                    </div>
                    man utd
                  </div>
                </router-link>
                <router-link
                  tag="li"
                  to="/klubovi/arsenal"
                  class="secondary-link"
                  @click.native="multipleMenuChanges">
                  <div class="hovered-wrapper">
                    <div class="icon-wrapper">
                      <img src="../../assets/arsenal-logo.png" alt="Arsenal logo">
                    </div>
                    arsenal
                  </div>
                </router-link>
                <router-link
                  tag="li"
                  to="/klubovi/real-madrid"
                  class="secondary-link"
                  @click.native="multipleMenuChanges">
                  <div class="hovered-wrapper">
                    <div class="icon-wrapper">
                      <img src="../../assets/real-madrid-logo.png" alt="Real Madrid logo">
                    </div>
                    Real Madrid
                  </div>
                </router-link>
                <router-link
                  tag="li"
                  to="/klubovi/barcelona"
                  class="secondary-link"
                  @click.native="multipleMenuChanges">
                  <div class="hovered-wrapper">
                    <div class="icon-wrapper">
                      <img src="../../assets/barcelona-logo.png" alt="Barcelona logo">
                    </div>
                    Barcelona
                  </div>
                </router-link>
                <router-link
                  tag="li"
                  to="/klubovi/juventus"
                  class="secondary-link"
                  @click.native="multipleMenuChanges">
                  <div class="hovered-wrapper">
                    <div class="icon-wrapper">
                      <img src="../../assets/juventus-logo.png" alt="Juventus logo">
                    </div>
                    Juventus
                  </div>
                </router-link>
                <router-link
                  tag="li"
                  to="/klubovi/milan"
                  class="secondary-link"
                  @click.native="multipleMenuChanges">
                  <div class="hovered-wrapper">
                    <div class="icon-wrapper">
                      <img src="../../assets/milan-logo.png" alt="Milan logo">
                    </div>
                    Milan
                  </div>
                </router-link>
              </ul>
            </div>
          </li>

          <li class="dropdown">
            <div
              class="menu-item-headline"
              :class="{ 'headline-active': productsMenuItemActive }" @click="changeProductsMenuItemActive">
              proizvodi
              <span>
                <font-awesome-icon v-if="!productsMenuItemActive" icon="arrow-right" />
                <font-awesome-icon v-if="productsMenuItemActive" icon="arrow-down" />
              </span>
            </div>
            <div v-if="productsMenuItemActive">
              <ul class="hovered">
                <router-link
                  tag="li"
                  to="/proizvodi/narukvice"
                  class="secondary-link"
                  @click.native="multipleMenuChanges">
                  <div class="hovered-wrapper">
                    <div class="icon-wrapper">
                      <img src="../../assets/liverpool-logo.png" alt="Liverpool logo">
                    </div>
                    Narukvice
                  </div>
                </router-link>
              </ul>
            </div>
          </li>

          <router-link
            tag="li"
            to="/info/o-nama"
            @click.native="multipleMenuChanges">
            <div class="menu-item-headline">
              o nama
            </div>
          </router-link>

          <li>
            <div class="menu-item-headline" :class="{ 'headline-active': helpMenuItemActive }">
              pomoć
              <span @click="changeHelpMenuItemActive">
                <font-awesome-icon v-if="!helpMenuItemActive" icon="arrow-right" />
                <font-awesome-icon v-if="helpMenuItemActive" icon="arrow-down" />
              </span>
            </div>
            <div v-if="helpMenuItemActive">
              <ul class="navigation-mobile-submenu">
                <li>
                  <ul>
                    <router-link
                      tag="li"
                      to="/info/uslovi-koriscenja"
                      class="submenu-item"
                      @click.native="multipleMenuChanges">uslovi koršićenja</router-link>
                  </ul>
                </li>
              </ul>

              <ul class="navigation-mobile-submenu">
                <li>
                  <ul>
                    <router-link
                      tag="li"
                      to="/info/kako-kupiti"
                      class="submenu-item"
                      @click.native="multipleMenuChanges">kako kupiti?</router-link>
                    <router-link
                      tag="li"
                      to="/info/placanje"
                      class="submenu-item"
                      @click.native="multipleMenuChanges">načini plaćanja</router-link>
                    <router-link
                      tag="li"
                      to="/info/isporuka-i-povracaj"
                      class="submenu-item"
                      @click.native="multipleMenuChanges">isporuka i povraćaj</router-link>
                  </ul>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <div class="menu-item-headline" :class="{ 'headline-active': contactMenuItemActive }">
              kontakt
              <span @click="changeContactMenuItemActive">
                <font-awesome-icon v-if="!contactMenuItemActive" icon="arrow-right" />
                <font-awesome-icon v-if="contactMenuItemActive" icon="arrow-down" />
              </span>
            </div>
            <div v-if="contactMenuItemActive">
              <ul class="navigation-mobile-submenu">
                <li>
                  <ul>
                    <router-link
                      tag="li"
                      to="/info/kontakt"
                      class="submenu-item"
                      @click.native="multipleMenuChanges">kontaktirajte nas</router-link>
                    <router-link
                      tag="li"
                      to="/info/najcesca-pitanja"
                      class="submenu-item"
                      @click.native="multipleMenuChanges">najčeśće postavljena pitanja</router-link>
                  </ul>
                </li>
              </ul>
            </div>

          </li>

        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'HeaderNavigationMobile',
  data() {
    return {
      helpMenuItemActive: false,
      contactMenuItemActive: false,
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
    changeContactMenuItemActive() {
      return this.contactMenuItemActive = !this.contactMenuItemActive
    },
    multipleMenuChanges() {
      this.changeMenu()
      this.helpMenuItemActive = false
      this.contactMenuItemActive = false
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
.nav-wrapper {
  position: absolute;
  width: 100%;
  top: 60px;
  height: calc(100vh - 60px);
  background: #fff;
  padding-bottom: 80px;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
}
.critical-hidden {
  visibility: visible;
}
#header-nav {
  .nav-left,
  .nav-right {
    width: 100%;
    box-sizing: border-box;
  }
  ul {
    font-size: 0;
  }
  li {
    font-size: 14px;
    margin: 0;
    border-bottom: 1px solid #F5F5F5;
    -webkit-transition: all .15s ease-in-out;
    -moz-transition: all .15s ease-in-out;
    -ms-transition: all .15s ease-in-out;
    -o-transition: all .15s ease-in-out;
    transition: all .15s ease-in-out;
  }
  img {
    filter: grayscale(1);
  }
  li .menu-item-headline {
    color: #000;
    padding: 0 20px;

    span {
      position: absolute;
      right: 20px;
      -webkit-transition: transform .15s ease-in-out,right .35s ease-in-out .15s;
      -moz-transition: transform .15s ease-in-out,right .35s ease-in-out .15s;
      -ms-transition: transform .15s ease-in-out,right .35s ease-in-out .15s;
      -o-transition: transform .15s ease-in-out,right .35s ease-in-out .15s;
      transition: transform .30s ease-in-out,right .35s ease-in-out .15s;
    }
  }
  li .menu-item-headline.headline-active span {
    transform: rotate(360deg);
  }
  .svg-inline--fa {
    font-size: 12px;
  }
  // secondary links
  .secondary-link {
    line-height: 1;
    font-size: 12px;
    display: inline-block;
    background: #fff;
    width: 33.33%;
    max-width: 170px;
    margin: 0;
    vertical-align: top;
    border: none!important;
    position: relative;
    text-align: center;
    padding: 0;

    .hovered-wrapper {
      padding: 10px 30px 30px;
      text-transform: uppercase;
      letter-spacing: .1em;
      font-size: 9px;
      line-height: 1.4;
      font-weight: 500;
      color: #8a8a8a;
    }
    .icon-wrapper {
      height: 55px;
      line-height: 55px;
      margin: 10px auto;
    }
  }
}
@media (max-width: 768px) {
  #hdr-nav>ul>li {
    opacity: 0;
    -webkit-transition: all .35s ease-in-out;
    -moz-transition: all .35s ease-in-out;
    -ms-transition: all .35s ease-in-out;
    -o-transition: all .35s ease-in-out;
    transition: all .35s ease-in-out;
    -webkit-transform: translate(-100px,0);
    -moz-transform: translate(-100px,0);
    -ms-transform: translate(-100px,0);
    -o-transform: translate(-100px,0);
    transform: translate(-100px,0);
    transition-delay: .15s;
  }
}
@media screen and (max-width: 1024px) {
  .nav-wrapper {
    left: -100%;
    opacity: 0;
    -webkit-overflow-scrolling: touch;
    -webkit-transform: translate(0,50px);
    -moz-transform: translate(0,50px);
    -ms-transform: translate(0,50px);
    -o-transform: translate(0,50px);
    transform: translate(0,50px);
    -webkit-transition: transform .15s ease-in-out,opacity .15s ease-in-out;
    -moz-transition: transform .15s ease-in-out,opacity .15s ease-in-out;
    -ms-transition: transform .15s ease-in-out,opacity .15s ease-in-out;
    -o-transition: transform .15s ease-in-out,opacity .15s ease-in-out;
    transition: transform .15s ease-in-out,opacity .15s ease-in-out;
  }
  .menu-open .nav-wrapper {
    left: 0;
    opacity: 1;
    -webkit-transform: translate(0,0);
    -moz-transform: translate(0,0);
    -ms-transform: translate(0,0);
    -o-transform: translate(0,0);
    transform: translate(0,0);
  }
  .menu-open #hdr-nav>ul>li {
    -webkit-transform: translate(0,0);
    -moz-transform: translate(0,0);
    -ms-transform: translate(0,0);
    -o-transform: translate(0,0);
    transform: translate(0,0);
    opacity: 1;
  }
}



  /* .navigation-mobile-drawer {
    position: fixed;
    width: 0px;
    height: 100%;
    z-index: 1;
    top: 0;
    left: 0;
    overflow-x: hidden;
    transition: .3s;
  }
  .navigation-mobile-active {
    width: 100%;
    margin-top: 46px;
  }
  .navigation-mobile-menu {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    font-size: 14px;
    color: #000;
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
      font-weight: 600;
    }
  }

  .navigation-mobile-submenu {
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
      font-size: 12px;
      text-transform: none;
      color: #888888;
      letter-spacing: 0;
      padding: 5px 0;
    }
  } */

</style>
