<template>
  <div>
    <div class="mobile-product-gallery">
      <carousel :perPage="1" v-if="this.productsImageSlider.length">
        <slide v-for="image in this.productsImageSlider" :key="image.id">
          <img :src='`http://localhost:3000/${image.options.mainPageSliderImage}`' class="carousel-img"/>
        </slide>
      </carousel>
    </div>
    <section class="company-description">
      <h1>Fudbal Fanatik</h1>
      <p>Tražite suvenir omiljenog stranog fudbalskog kluba? Treba Vam idealan poklon za fudbalskog fanatika? Na pravom ste mestu! Dobro došli u prvi i jedini Srpski online shop suvenira stranih Evropskih klubova. Uživajte u kupovini</p>
    </section>
    <div class="item-ly2-products">
      <section class="item-content">
        <div class="item-ly2-products-wrapper">
          <h2 class="item-title">Najprodavaniji proizvodi</h2>
          <div
            v-for="productMostWanted in this.productsMostWanted"
            :key="productMostWanted._id"
            class="item-ly2-product">
            <router-link
              tag="a"
              :to="`/product/${productMostWanted._id}`">
              <img v-if="productMostWanted.image" :src='`http://localhost:3000/${productMostWanted.image}`' alt="" />
              <img v-else :src='`http://localhost:3000/${productMostWanted.images[0]}`' alt="">
              <div class="item-ly2-product-name">{{ productMostWanted.title }}</div>
              <span class="item-ly2-product-price">{{ productMostWanted.price }} RSD</span>
            </router-link>
          </div>
        </div>
      </section>
    </div>
    <div class="item-ly2-products">
      <section class="item-content">
        <div class="item-ly2-products-wrapper">
          <h2 class="item-title">Izdvajamo iz ponude</h2>
          <div
            v-for="productRecommended in this.productsRecommended"
            :key="productRecommended._id"
            class="item-ly2-product">
            <router-link
              tag="a"
              :to="`/product/${productRecommended._id}`">
              <img v-if="productRecommended.image" :src='`http://localhost:3000/${productRecommended.image}`' alt="" />
              <img v-else :src='`http://localhost:3000/${productRecommended.images[0]}`' alt="">
              <div class="item-ly2-product-name">{{ productRecommended.title }}</div>
              <span class="item-ly2-product-price">{{ productRecommended.price }} RSD</span>
            </router-link>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import routesApi from '../api/navigation-routes'
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'Home',
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      products: [],
      productsImageSlider: [],
      productsMostWanted: [],
      productsRecommended: []
    }
  },
  created() {
    this.gettingHomePageProducts()
  },
  methods: {
    gettingHomePageProducts() {
      return routesApi.getHomePageProducts()
        .then(products => {
          this.products = products.data.products
          this.productsImageSlider = this.products.filter(product => {
            return product.options.mainPageSliderImage
          })
          this.productsMostWanted = this.products.filter(product => {
            return product.options.mostWanted
          })
          this.productsRecommended = this.products.filter(product => {
            return product.options.recommended
          })
        })
    }
  }
}
</script>

<style lang="scss">
.router-link-exact-active,
.router-link-exact-active.submenu-item {
  font-weight: 600;
}
.mobile-product-gallery {
  text-align: center;

  .carousel-img {
    width: 80%;
  }
}
.company-description {
  text-align: center;
  margin: 80px auto 100px;
  letter-spacing: .02em;
  color: #111;

  h1 {
    font-size: 27px;
    font-weight: 700;
    letter-spacing: .04em;
  }
  p {
    margin: 10px auto 0;
    letter-spacing: 0;
  }
}
.item-title {
  font-size: 20px;
  font-weight: 600;
  text-align: left;
  margin: 0 0 30px 13px;
}

@media screen and (max-width: 499px) {
  .company-description {
    width: 90%;

    p {
      width: 100%;
      max-width: 100%;
      font-size: 15px;
      line-height: 1.8;
    }
  }
}

@media screen and (max-width: 800px) {
  .company-description {
    font-size: 22px;
  }
}
</style>
