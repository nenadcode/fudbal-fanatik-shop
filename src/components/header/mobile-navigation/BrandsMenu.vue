<template>
  <li
    class="menu-item-headline"
    :class="{
      'headline-active': brandsMenuItemActive,
    }"
    @click="brandsMenuItemActive = !brandsMenuItemActive">
      klubovi
      <span>
        <img src="../../../assets/right.png" alt="arrow right" />
      </span>
      <ul :class="{ 'hovered': brandsMenuItemActive }">
        <router-link
          v-for="brand in this.brands"
          :key="brand._id"
          tag="li"
          :to="`/klubovi/${brand._id}`"
          class="secondary-link"
          @click.native="multipleMenuChanges">
          <div class="hovered-wrapper">
            <div class="icon-wrapper">
              <img :src="getBrandImgUrl(brand.shortName)" alt="brand.name">
            </div>
          </div>
          {{ brand.name }}
        </router-link>
      </ul>
  </li>
</template>

<script>
export default {
  name: 'BrandsMenu',
  props: ['brands'],
  data() {
    return {
      brandsMenuItemActive: false
    }
  },
  methods: {
    getBrandImgUrl(pic) {
      return require('../../../assets/logos/' + pic + '-logo.png')
    },
  }
}
</script>