<template>
  <footer>
    <footer-information />
  </footer>
</template>

<script>
import FooterInformation from './FooterInformation.vue'

export default {
  name: 'FooterContainer',
  components: {
    FooterInformation
  }
}
</script>

<style lang="scss">
  footer {
    background-color: #e9e9e9;
    padding: 40px 20px;
  }

  .footer-box {
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    padding: 0 30px;

    h4 {
      font-family: "Source Sans Pro", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-size: 20px;
      text-transform: uppercase;
      color: #606060;
      font-weight: 600;
    }
  }
</style>
