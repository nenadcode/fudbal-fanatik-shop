<template>
  <div class="main-content">
    <div v-if="productsCount < 3" class="item-products">
      <h1 class="item-title">{{ category.name }}</h1>
      <section class="item-content">
        <div class="item-description" v-if="category.shortDescription">
          <span>{{ category.shortDescription }}</span>
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
      <h1 class="item-title">{{ category.name }}</h1>
      <section class="item-content">
        <div class="item-description" v-if="category.shortDescription">
          <span>{{ category.shortDescription }}</span>
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
  name: 'CategoriesTemplate',
  data() {
    return {
      routeId: this.$route.params.id,
      category: {},
      products: [],
      productsCount: null
    }
  },
  created() {
    this.gettingCategory()
  },
  methods: {
    gettingCategory() {
      return routesApi.getCategory(this.routeId)
        .then(category => {
          this.category = category.data.resources.category
          this.products = category.data.resources.products
          this.productsCount = category.data.productsCount
        })
    }
  }
}
</script>
