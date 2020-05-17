<template>
  <div id="app" :class="{ 'no-scroll': menuActive }">
    <Header />
    <router-view :key="$route.fullPath"></router-view>
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '@/components/header/HeaderContainer.vue'
import Footer from '@/components/footer/FooterContainer.vue'

export default {
  name: 'app',
  components: {
    Header,
    Footer
  },
  computed: {
    ...mapGetters([
      'menuActive'
    ])
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat');
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
@import url('https://fonts.googleapis.com/css?family=Raleway:300,400,600,700&display=swap');
@import "@/assets/scss/style.scss";
@import "@/assets/scss/navigation.scss";
@import "@/assets/scss/brand-category-template.scss";
@import "@/assets/scss/product-template.scss";
@import "@/assets/scss/footer.scss";
@import "@/assets/scss/info-pages.scss";

#app {
  margin: 0;
  // display: grid;
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  overflow-x: hidden;
}
@media screen and (max-width: 1024px) {
  .no-scroll {
    position: fixed;
    width: 100%;
  }
}
</style>
