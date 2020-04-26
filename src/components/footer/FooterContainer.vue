<template>
  <footer id="footer-main">
    <nav id="footer-navigation">
      <ul>
        <li>
          <router-link tag="a" to="/info/kako-kupiti">Kako kupiti?</router-link>
        </li>
        <li>
          <router-link tag="a" to="/info/placanje">Načini plaćanja</router-link>
        </li>
        <li>
          <router-link tag="a" to="/info/isporuka-i-povracaj">Isporuka i povraćaj</router-link>
        </li>
        <li>
          <router-link tag="a" to="/info/o-nama">O nama</router-link>
        </li>
        <li>
          <router-link tag="a" to="/info/uslovi-koriscenja">Uslovi koršićenja</router-link>
        </li>
      </ul>
    </nav>
    <div id="footer-content">
      <ul class="footer-social">
        <li>
          <a href="https://www.facebook.com/fudbalfanatiksuveniri">
            <font-awesome-icon class="facebook-icon" :icon="['fab', 'facebook-f' ]" />
          </a>
        </li>
        <li>
          <a href="">
            <font-awesome-icon class="instagram-icon" :icon="['fab', 'instagram' ]" />
          </a>
        </li>
      </ul>
      <div class="footer-details">
        <router-link tag="a" to="/pocetna">
          <img src="../../assets/fudbal-fanatik-footer.png" alt="Fudbal Fanatik logo" class="ff-logo-small">
        </router-link>
        <div class="footer-small">
          &#169; Fudbal Fanatik doo 2020
        </div>
      </div>
    </div>
  </footer>
</template>

<script>

export default {
  name: 'FooterContainer'
}
</script>
