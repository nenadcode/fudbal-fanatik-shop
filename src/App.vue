<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/header/HeaderContainer.vue'

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style lang="scss">
  body {
    margin: 0;
    display: grid;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  #app {
    margin: 0;
    display: grid;
    font-family: 'Roboto', 'HelveticaNeue', 'Helvetica Neue', Helvetica , Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
  }
</style>
