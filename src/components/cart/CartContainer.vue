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
                <span>1</span> artikal
              </div>
              <div class="cart-total-price">
                <span class="total-label">ukupno </span>
                <span class="price total-value">
                  <span>300 RSD</span>
                </span>
              </div>
            </div>
            <div class="subtotal-actions">
              <button class="button submit-button">Plaćanje</button>
            </div>
          </div>
          <div class="cart-items">
            <h2>Vaša korpa</h2>
            <div class="cart-item-list">
              <div class="cart-item-row">
                <div class="col1">
                  <div class="cart-item-image">
                    <router-link
                      tag="a"
                      :to="`/klubovi/1`">
                      <img src="../../assets/products/narukvice.png" alt="Liverpool narukvica">
                    </router-link>
                  </div>
                </div>
                <div class="col2">
                  <div class="cart-item-description">
                    <p class="cart-item-description-title">
                      <router-link
                        tag="a"
                        :to="`/product/5e7fad8d1c9d4400005480cd`">
                        Liverpool f.c. crvena narukvica
                      </router-link>
                    </p>
                  </div>
                  <div class="cart-quantity-wrapper">
                    <a href="/" class="cart-quantity-selector cart-quantity-decrease">-</a>
                    <span class="cart-quantity-value">1</span>
                    <a href="/" class="cart-quantity-selector cart-quantity-increase">+</a>
                    <div class="money-wrapper">
                      <span class="money">300 RSD</span>
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
export default {
  name: "CartContainer",
  data() {
    return {
      emptyCart: false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
