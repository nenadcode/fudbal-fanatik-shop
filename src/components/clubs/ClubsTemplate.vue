<template>
  <div>
    Clubs {{ brand.name }} Template
  </div>
</template>

<script>
import routesApi from '../../api/navigation-routes'

export default {
  name: 'ClubsTemplate',
  data() {
    return {
      routeId: this.$route.params.id,
      brand: {}
    }
  },
  created() {
    this.gettingBrand()
  },
  methods: {
    gettingBrand() {
      return routesApi.getBrand(this.routeId)
        .then(brand => {
          this.brand = brand.data.brand
        })
    }
  }
}

</script>
