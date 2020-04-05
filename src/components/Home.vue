<template>
  <div>
    Pocetna
  </div>
</template>

<script>
import { http } from '../services/http'

export default {
  name: 'Home',

  created() {
    http.get('http://localhost:3000/products');
  }
}
</script>

<style lang="scss">
  .router-link-exact-active,
  .router-link-exact-active.submenu-item {
    font-weight: 600;
  }
  .info-page-top {
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      display: flex;
      justify-content: center;
      width: 100%;
      font-family: 'Source Sans Pro', 'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      padding: 20px 0 8px 0;
      border-bottom: 1px solid #ededed;
      text-transform: uppercase;
      font-size: 2em;
      font-weight: 400;
      line-height: 1.4;
      color: #000;
    }

    .ff-logo-image-wrapper {
      display: flex;
      justify-content: center;
      height: 80px;
      padding: 30px 0 0;

      .ff-logo-image {
        width: 60%
      }
    }
  }

  .info-page-content {
    padding: 0 20px;

    h2, h3 {
      font-family: 'Source Sans Pro', 'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      font-weight: 400;
      margin: 0 0 0.5em;
      line-height: 1.4;
      color: #000;
      text-transform: uppercase;
    }

    a {
      color: #003cff;
    }

    p {
      font-family: "Roboto","HelveticaNeue","Helvetica Neue",Helvetica,Arial,sans-serif;
      font-weight: 400;
      line-height: 1.6;
      font-size: 16px;
      color: #4f4f4f;
      -webkit-font-smoothing: antialiased;
    }

    .bold-text {
      font-weight: bold;
    }
  }
</style>
