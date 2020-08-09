<template>
  <div class="main-content">
    <section id="cart-page">
      <div class="wrapper">
        <p class="empty" v-if="this.emptyCart">
          Vaša korpa je trenutno prazna, <router-link to="/pocetna">nastavite kupovinu</router-link>
        </p>
        <div class="cart-main" v-else>
          <div class="cart-subtotal">
            <div class="subtotal-info">
              <div class="cart-items-count">
                <span>{{ this.cartItems.itemsQtyTotal }}</span> artikal
              </div>
              <div class="cart-total-price">
                <span class="total-label">ukupno </span>
                <span class="price total-value">
                  <span>{{ this.cartItems.itemsPrice }} RSD</span>
                </span>
              </div>
            </div>
            <div class="subtotal-actions">
              <button class="button submit-button">Plaćanje</button>
            </div>
          </div>
          <div class="cart-items" v-for="product in this.cartItems.products" :key="product._id">
            <h2>Vaša korpa</h2>
            <div class="cart-item-list">
              <div class="cart-item-row">
                <div class="col1">
                  <div class="cart-item-image">
                    <router-link
                      tag="a"
                      :to="`/product/${product._id}`">
                      <img :src='`http://localhost:3000/${product.image}`' alt="Liverpool narukvica">
                    </router-link>
                  </div>
                </div>
                <div class="col2">
                  <div class="cart-item-description">
                    <p class="cart-item-description-title">
                      <router-link
                        tag="a"
                        :to="`/product/${product._id}`">
                        {{ product.title }}
                      </router-link>
                    </p>
                  </div>
                  <div class="cart-quantity-wrapper">
                    <a href="/" class="cart-quantity-selector cart-quantity-decrease">-</a>
                    <span class="cart-quantity-value">{{ product.qty }}</span>
                    <a href="/" class="cart-quantity-selector cart-quantity-increase">+</a>
                    <div class="money-wrapper">
                      <span class="money">{{ product.price }} RSD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import routesApi from '../../api/navigation-routes'
import localStorageService from '../../services/localStorageService'

export default {
  name: "CartContainer",
  data() {
    return {
      emptyCart: false,
      cartItems: []
    }
  },
  created() {
    this.getProductsFromLocalStorage()
  },
  methods: {
    addingProduct() {
      return routesApi.addToCart()
    },
    getProductsFromLocalStorage() {
      this.cartItems = localStorageService.parseFromLocalStorage('cart')
      if (!this.cartItems) this.emptyCart = true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
