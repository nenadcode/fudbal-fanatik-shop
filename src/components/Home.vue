<template>
  <div>
    Pocetna
  </div>
</template>

<script>
export default {
  name: 'Home'
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
      font-weight: 300;
      font-size: 30px;
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
      font-size: 13px;
      color: #8a8a8a;
      max-width: 500px;
      margin: auto;
      line-height: 1.6;
    }

    .bold-text {
      font-weight: bold;
    }
  }
</style>
