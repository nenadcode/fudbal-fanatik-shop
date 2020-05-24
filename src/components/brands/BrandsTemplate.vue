<template>
  <div class="main-content">
    <div v-if="productsCount < 3" class="item-products">
      <h1 class="item-title">{{ brand.name }}</h1>
      <section class="item-content">
        <div class="item-image">
          <img :src='`http://localhost:3000/${brand.backgroundImage}`' alt="" />
        </div>
        <div class="item-description">
          <span>{{ brand.shortDescription }}</span>
        </div>
        <div class="item-products-wrapper">
          <div
            v-for="product in this.products"
            :key="product._id"
            class="item-product">
            <router-link
              tag="a"
              :to="`/product/${product._id}`"
              class="item-product-wrapper">
              <div class="item-image-wrapper">
                <img v-if="product.image" :src='`http://localhost:3000/${product.image}`' alt="" />
                <img v-else :src='`http://localhost:3000/${product.images[0]}`' alt="">
              </div>
              <div class="item-product-name">{{ product.title }}</div>
              <div class="item-product-price">{{ product.price }} RSD</div>
            </router-link>
          </div>
        </div>
      </section>
    </div>
    <div v-else class="item-ly2-products">
      <h1 class="item-title">{{ brand.name }}</h1>
      <section class="item-content">
        <div class="item-image">
          <img :src='`http://localhost:3000/${brand.backgroundImage}`' alt="" />
        </div>
        <div class="item-description">
          <span>{{ brand.shortDescription }}</span>
        </div>
        <div class="item-ly2-products-wrapper">
          <div
            v-for="product in this.products"
            :key="product._id"
            class="item-ly2-product">
            <router-link
              tag="a"
              :to="`/product/${product._id}`">
              <div class="item-ly2-image-wrapper">
                <img v-if="product.image" :src='`http://localhost:3000/${product.image}`' alt="" />
                <img v-else :src='`http://localhost:3000/${product.images[0]}`' alt="">
              </div>
              <div class="item-ly2-product-name">{{ product.title }}</div>
              <span class="item-ly2-product-price">{{ product.price }} RSD</span>
            </router-link>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import routesApi from '../../api/navigation-routes'

export default {
  name: 'BrandsTemplate',
  data() {
    return {
      routeId: this.$route.params.id,
      brand: {},
      products: [],
      productsCount: null
    }
  },
  created() {
    this.gettingBrand()
  },
  methods: {
    gettingBrand() {
      return routesApi.getBrand(this.routeId)
        .then(brand => {
          this.brand = brand.data.resources.brand
          this.products = brand.data.resources.products
          this.productsCount = brand.data.productsCount
        })
    }
  }
}
</script>
