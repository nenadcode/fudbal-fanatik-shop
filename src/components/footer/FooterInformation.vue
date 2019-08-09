<template>
  <div>
    <div class="footer-box">
      <h4>Plaćanje i Isporuka</h4>
      <p>Sve o Vašoj kupovini</p>
      <ul>
        <router-link
          tag="li"
          to="/info/kako-kupiti"
          @click.native="multipleMenuChanges">Kako kupiti?</router-link>
        <router-link
          tag="li"
          to="/info/placanje"
          @click.native="multipleMenuChanges">Načini plaćanja</router-link>
        <router-link
          tag="li"
          to="/info/isporuka-i-povracaj"
          @click.native="multipleMenuChanges">Isporuka i povraćaj</router-link>
      </ul>
    </div>
    <div class="footer-box">
      <h4>Informacije</h4>
      <p>Sve o nama</p>
      <ul>
        <router-link
          tag="li"
          to="/info/o-nama"
          @click.native="multipleMenuChanges">O nama</router-link>
        <router-link
          tag="li"
          to="/info/uslovi-koriscenja"
          @click.native="multipleMenuChanges">Uslovi koršićenja</router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterInformation'
}
</script>

<style>

</style>
