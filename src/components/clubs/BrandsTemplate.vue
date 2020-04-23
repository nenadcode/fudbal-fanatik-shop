<template>
  <div class="main-content">
    <div v-if="brand._id != 4" class="brand-products">
      <h1 class="brand-title">{{ brand.name }}</h1>
      <section class="brand-content">
        <div class="brand-image">
          <img :src='`http://localhost:3000/${brand.backgroundImage}`' alt="" />
        </div>
        <div id="brand-description">
          <span>{{ brand.shortDescription }}</span>
        </div>
        <div id="brand-products-wrapper">
          <div
            v-for="product in this.products"
            :key="product._id"
            class="brand-product">
            <div class="brand-image-wrapper">
              <img :src='`http://localhost:3000/${product.image}`' alt="" />
            </div>
            <div class="brand-product-name">{{ product.title }}</div>
            <div class="brand-product-description">{{ product.description }}</div>
            <div class="brand-product-price">{{ product.price }} RSD</div>
            <router-link
              tag="a"
              to="/"
              class="button button-brand-product">
              Kupi
            </router-link>
          </div>
        </div>
      </section>
    </div>
    <div v-if="brand._id == 4" class="brand-ly2-products">
      <h1 class="brand-title">{{ brand.name }}</h1>
      <section class="brand-content">
        <div class="brand-image">
          <img :src='`http://localhost:3000/${brand.backgroundImage}`' alt="" />
        </div>
        <div id="brand-description">
          <span>{{ brand.shortDescription }}</span>
        </div>
        <div id="brand-ly2-products-wrapper">
          <div
            v-for="product in this.products"
            :key="product._id"
            class="brand-ly2-product">
            <router-link
              tag="a"
              to="/">
              <img :src='`http://localhost:3000/${product.image}`' alt="" />
              <div class="brand-ly2-product-name">{{ product.title }}</div>
              <div class="brand-ly2-product-description">{{ product.description }}</div>
              <span class="brand-ly2-product-price">{{ product.price }} RSD</span>
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
      products: []
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
        })
    }
  }
}

</script>

<style lang="scss">
.brand-products,
.brand-ly2-products {
  margin: 20px 0;
}
.brand-title {
  font-size: 30px;
  font-weight: 300;
  text-align: center;
  text-transform: lowercase;
  line-height: 1.3;
  margin-bottom: 1em;
  color: #000;
}
.brand-image img {
  max-width: 100%;
}
#brand-products-wrapper {
  text-align: center;

  .brand-product {
    display: block;
    width: 100%;
    margin-bottom: 50px;
    text-align: center;
  }
  .brand-image-wrapper {
    max-width: 80%;
    margin: 0 auto;
  }
  .brand-product-name {
    font-size: 23px;
    margin-top: -45px;
    color: #000;
  }
  .brand-product-description,
   .brand-product-price{
    font-size: 23px;
    color: #4c4c4c;
    font-weight: 300;
  }
  .button.button-brand-product {
    background: #000;
    margin-top: 30px;
  }
}
#brand-ly2-products-wrapper {
  box-sizing: border-box;

  .brand-ly2-product {
    display: inline-block;
    position: relative;
    width: 25%;
    padding: 0 1.5%;
    color: #222;
    font-size: 13px;
    text-align: center;
    vertical-align: top;
  }
  .brand-ly2-product img {
    max-width: 100%;
    max-height: 103px;
    vertical-align: middle;
    border: 0;
  }
  .brand-ly2-product-name {
    position: relative;
    margin-top: -15px;
    font-weight: 600;
  }
  .brand-ly2-product-description{
    font-weight: 300;
  }
}
@media screen and (max-width: 499px) {
  .brand-content {
    width: 100%;
    margin: 0;
  }
  #brand-description {
    margin: 15px 15px 55px 15px;
    font-size: 11px;
    line-height: 18px;
    color: #7b7b7b;
  }
  #brand-products-wrapper {
    .brand-image-wrapper img {
      width: 80%;
      margin: 0 0 30px;
    }
    .brand-product-name {
      font-size: 17px;
    }
    .brand-product-description {
      font-size: 15px;
      margin: 5px 0;
    }
    .brand-product-price {
      font-size: 15px;
    }
  }
  #brand-ly2-products-wrapper {
    .brand-ly2-product {
      width: 43%;
      padding: 0 3.5%;
      // letter-spacing: .01em;
      font-size: 11px;
      color: #222;
      line-height: 20px;
      margin-bottom: 20px;
    }
    .brand-ly2-product-name,
    .brand-ly2-product-description {
      font-size: 11px;
      color: #222;
    }
  }
}
</style>
