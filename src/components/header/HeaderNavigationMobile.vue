<template>
  <div class="header-wrapper nav-wrapper">
    <nav id="header-nav" class="critical-hidden">
      <ul class="main-nav nav-left">
        <router-link
          tag="li"
          to="/"
          class="menu-item-headline"
          @click.native="multipleMenuChanges">
          početna
        </router-link>

        <li
          class="menu-item-headline"
          :class="{
            'headline-active': clubsMenuItemActive,
            'is-active': clubsMenuItemActive
          }"
          @click="changeClubsMenuItemActive">
            klubovi
            <span>
              <img src="../../assets/right.png" alt="arrow right" />
            </span>
            <ul :class="{ 'hovered': clubsMenuItemActive }">
              <router-link
                v-for="club in this.clubsRoutes"
                :key="club._id"
                tag="li"
                :to="`/klubovi/${club.clubShortName}`"
                class="secondary-link"
                @click.native="multipleMenuChanges">
                <div class="hovered-wrapper">
                  <div class="icon-wrapper">
                    <img :src="getClubImgUrl(club.clubShortName)" alt="club.clubName">
                  </div>
                  {{ club.clubName }}
                </div>
              </router-link>
            </ul>
        </li>

        <li
          class="menu-item-headline"
          :class="{
            'headline-active': productsMenuItemActive,
            'is-active': productsMenuItemActive
          }"
          @click="changeProductsMenuItemActive">
          proizvodi
          <span>
            <img src="../../assets/right.png" alt="arrow right" />
          </span>
          <ul :class="{ 'hovered': productsMenuItemActive }">
            <router-link
              v-for="product in this.productsRoutes"
              :key="product._id"
              tag="li"
              :to="`/proizvodi/${product.productShortName}`"
              class="secondary-link"
              @click.native="multipleMenuChanges">
              <div class="hovered-wrapper">
                <div class="icon-wrapper">
                  <img :src="getProductImgUrl(product.productShortName)" alt="Liverpool logo">
                </div>
                {{ product.productName }}
              </div>
            </router-link>
          </ul>
        </li>
      </ul>
      <ul class="main-nav nav-right">
        <router-link
          tag="li"
          to="/info/o-nama"
          class="menu-item-headline"
          @click.native="multipleMenuChanges">
          o nama
        </router-link>

        <li
          class="menu-item-headline"
          :class="{
            'headline-active': helpMenuItemActive,
            'is-active': helpMenuItemActive
          }"
          @click="changeHelpMenuItemActive">
            pomoć
          <span>
            <img src="../../assets/right.png" alt="arrow right" />
          </span>
          <ul :class="{ 'hovered': helpMenuItemActive }">
            <router-link
              tag="li"
              to="/info/uslovi-koriscenja"
              class="secondary-link"
              @click.native="multipleMenuChanges">
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
              class="secondary-link"
              @click.native="multipleMenuChanges">
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
              class="secondary-link"
              @click.native="multipleMenuChanges">
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
              class="secondary-link"
              @click.native="multipleMenuChanges">
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
            'is-active': contactMenuItemActive
          }"
          @click="changeContactMenuItemActive">
          kontakt
          <span>
            <img src="../../assets/right.png" alt="arrow right" />
          </span>
          <ul :class="{ 'hovered': contactMenuItemActive }">
            <router-link
              tag="li"
              to="/info/kontakt"
              class="secondary-link"
              @click.native="multipleMenuChanges">
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
              class="secondary-link"
              @click.native="multipleMenuChanges">
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
</template>

<script>
import { mapGetters } from 'vuex'
import routesApi from '../../api/navigation-routes'

export default {
  name: 'HeaderNavigationMobile',
  data() {
    return {
      helpMenuItemActive: false,
      contactMenuItemActive: false,
      productsMenuItemActive: false,
      clubsMenuItemActive: false,
      clubsRoutes: [],
      productsRoutes: []
    }
  },
  created() {
    this.gettingClubsRoutes()
    this.gettingProductsRoutes()
  },
  methods: {
    gettingClubsRoutes() {
      return routesApi.getClubsRoutes()
        .then(clubsRoutes => {
          this.clubsRoutes = clubsRoutes.data.clubsRoutes
        })
    },
    gettingProductsRoutes() {
      return routesApi.getProductsRoutes()
        .then(productsRoutes => {
          this.productsRoutes = productsRoutes.data.productsRoutes
        })
    },
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
    },
    getClubImgUrl(pic) {
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
  font-size: 0;
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
  li.menu-item-headline {
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
  // rotating arrow
  li.menu-item-headline.headline-active span {
    transform: rotate(90deg);
  }
  // sub-menu slide
  li.menu-item-headline>ul {
    max-height: 0;
    overflow-y: hidden;
    -webkit-transition: max-height .5s cubic-bezier(0,1,0,1);
    -moz-transition: max-height .5s cubic-bezier(0,1,0,1);
    -ms-transition: max-height .5s cubic-bezier(0,1,0,1);
    -o-transition: max-height .5s cubic-bezier(0,1,0,1);
    transition: max-height .5s cubic-bezier(0,1,0,1);
  }
  li.menu-item-headline>ul.hovered {
    max-height: 1000px;
    -webkit-transition: max-height 1s ease-in-out;
    -moz-transition: max-height 1s ease-in-out;
    -ms-transition: max-height 1s ease-in-out;
    -o-transition: max-height 1s ease-in-out;
    transition: max-height 1s ease-in-out;
  }

  li.dropdown .shop-menu {
    transition: max-height .5s cubic-bezier(0,1,0,1);
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
  #header-nav>ul>li {
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
  // sub-menu slide
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
  #header-nav>ul>li {
    -webkit-transform: translate(0,0);
    -moz-transform: translate(0,0);
    -ms-transform: translate(0,0);
    -o-transform: translate(0,0);
    transform: translate(0,0);
    opacity: 1;
  }
}
</style>
