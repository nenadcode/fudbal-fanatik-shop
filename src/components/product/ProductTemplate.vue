<template>
  <div id="single-product-area">
    <div class="wrapper">
      <div class="mobile-product-row">
        <div class="product-hdr">
          <h3 class="product-category">{{ this.categoryName }}</h3>
          <h1 id="product-title">{{ this.product.title }}</h1>
          <p class="pricea">{{ this.product.price }} RSD</p>
        </div>
      </div>
      <div id="mobile-product-gallery">
        <carousel :perPage="1" v-if="this.product.images">
          <slide v-for="image in this.product.images" :key="image.id">
            <img :src='`http://localhost:3000/${image}`' class="carousel-img"/>
          </slide>
        </carousel>
        <div v-else class="product-image-wrapper">
          <img :src='`http://localhost:3000/${this.product.image}`' class="product-image" />
        </div>
      </div>
      <div id="product-gallery">
        <carousel :perPage="1" v-if="this.product.images">
          <slide v-for="image in this.product.images" :key="image.id">
            <img :src='`http://localhost:3000/${image}`' class="carousel-img"/>
          </slide>
        </carousel>
        <div v-else class="product-image-wrapper">
          <img :src='`http://localhost:3000/${this.product.image}`' class="product-image" />
        </div>
      </div>
      <div class="product-details">
        <div class="product-hdr">
          <h3 class="product-category">{{ this.categoryName }}</h3>
          <h1 id="product-title">{{ this.product.title }}</h1>
          <p class="pricea">{{ this.product.price }} RSD</p>
        </div>
        <p class="product-description" v-for="paragraph in this.product.description" :key="paragraph.id">{{ paragraph }}</p>
        <div class="submit-wrapper">
          <button class="button submit-button" @click="addProductToCart">Dodaj u korpu</button>
        </div>
        <div class="product-info-links">
          <router-link
            tag="a"
            to="/info/isporuka-i-povracaj">
            isporuka i povraćaj
          </router-link>
          <router-link
            tag="a"
            to="/info/kako-kupiti">
            kako kupiti?
          </router-link>
        </div>
      </div>
    </div>
    <div class="item-ly2-products" v-if="this.brandProducts.length">
      <section class="item-content">
        <div class="item-ly2-products-wrapper">
          <h2 class="item-title">Proizvodi istog kluba</h2>
          <div
            v-for="brandProduct in this.brandProducts"
            :key="brandProduct._id"
            class="item-ly2-product">
            <router-link
              tag="a"
              :to="`/product/${brandProduct._id}`">
              <div class="item-ly2-image-wrapper">
                <img v-if="brandProduct.image" :src='`http://localhost:3000/${brandProduct.image}`' alt="" />
                <img v-else :src='`http://localhost:3000/${brandProduct.images[0]}`' alt="">
              </div>
              <div class="item-ly2-product-name">{{ brandProduct.title }}</div>
              <span class="item-ly2-product-price">{{ brandProduct.price }} RSD</span>
            </router-link>
          </div>
        </div>
      </section>
    </div>
    <div class="item-ly2-products" v-if="this.categoryProducts.length">
      <section class="item-content">
        <div class="item-ly2-products-wrapper">
          <h2 class="item-title">Povezani proizvodi</h2>
          <div
            v-for="categoryProduct in this.categoryProducts"
            :key="categoryProduct._id"
            class="item-ly2-product">
            <router-link
              tag="a"
              :to="`/product/${categoryProduct._id}`">
              <div class="item-ly2-image-wrapper">
                <img v-if="categoryProduct.image" :src='`http://localhost:3000/${categoryProduct.image}`' alt="" />
                <img v-else :src='`http://localhost:3000/${categoryProduct.images[0]}`' alt="">
              </div>
              <div class="item-ly2-product-name">{{ categoryProduct.title }}</div>
              <span class="item-ly2-product-price">{{ categoryProduct.price }} RSD</span>
            </router-link>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import routesApi from '../../api/navigation-routes'
import EventBus from '../../services/event-bus'
import { Carousel, Slide } from 'vue-carousel'
import localStorageService from '../../services/localStorageService'

export default {
  name: 'ProductTemplate',
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      routeId: this.$route.params.id,
      product: {},
      brandName: '',
      brandId: '',
      brandProducts: {},
      categoryName: '',
      categoryId: '',
      categoryProducts: {},
      cartLocalStorage: [],
      productsCart: {},
      selectedProduct: {}
    }
  },
  created() {
    this.gettingProduct(),
    this.setCartLocalStorage()
  },
  methods: {
    gettingProduct() {
      return routesApi.getProduct(this.routeId)
        .then(product => {
          this.product = product.data.product
          this.brandId = product.data.product.brand._id
          this.brandName = product.data.product.brand.name
          this.categoryId = product.data.product.category._id
          this.categoryName = product.data.product.category.name
        })
        .then(() => {
          return routesApi.getBrand(this.brandId)
            .then(brand => {
              this.brandProducts = brand.data.resources.products.filter(productBrand => {
                return productBrand._id != this.product._id
              })
            })
        })
        .then(() => {
          return routesApi.getCategory(this.categoryId)
            .then(category => {
              this.categoryProducts = category.data.resources.products.filter(productCategory => {
                return productCategory._id != this.product._id
              })
            })
        })
    },
    addProductToCart() {
      EventBus.$emit('CART_UPDATED', () => {
        return true
      })
      this.productsCart = this.cartLocalStorage
      this.selectedProduct = {
        _id: this.product._id,
        title: this.product.title,
        image: this.product.image,
        price: this.product.price,
        qty: 1
      }

      if (!this.productsCart) {
        this.productsCart = {
          itemsQtyTotal: 0,
          itemsPrice: 0,
          products: []
        }
        this.productsCart.products.push(this.selectedProduct)
        this.selectedProduct = {}
        localStorageService.addToLocalStorage('cart', this.productsCart)
      } else {
        let sameProduct = this.productsCart.products.filter(matchedProduct => {
          return matchedProduct._id == this.selectedProduct._id
        })
        if (sameProduct.length > 0) {
          // debugger
          sameProduct[0].qty = sameProduct[0].qty + this.selectedProduct.qty
          sameProduct[0].price = sameProduct[0].price + this.selectedProduct.price

          // this.productsCart.products.splice(this.selectedProduct, 1, sameProduct[0])
          localStorageService.addToLocalStorage('cart', this.productsCart)
          this.selectedProduct = {}
        } else {
          this.productsCart.products.push(this.selectedProduct)
          localStorageService.addToLocalStorage('cart', this.productsCart)
          this.selectedProduct = {}
        }
      }

      this.productsCart.itemsQtyTotal = 0
      this.productsCart.itemsPrice = 0

      this.productsCart.products.map(item => {
        this.productsCart.itemsQtyTotal += item.qty
        this.productsCart.itemsPrice += item.price
      })

      localStorageService.addToLocalStorage('cart', this.productsCart)
      this.$router.push({ name: 'cart' })
    },
    setCartLocalStorage() {
      this.cartLocalStorage = localStorageService.parseFromLocalStorage('cart')
      if (!this.cartLocalStorage) {
        localStorageService.addToLocalStorage('cart', this.cartLocalStorage);
      }
    }
  }
}
</script>

<style scoped lang="scss">
#single-product-area {
  .item-title {
    font-size: 24px;
    font-weight: 600;
    margin: 0 0 30px 13px;
  }
}
@media screen and (min-width: 1025px) {
  #single-product-area {
  .item-title {
    margin-top: 50px;
  }
}
}
</style>
