<template>
  <div id="app" class="bg">
    <the-navbar/>
    <router-view/>
  </div>
</template>

<script>
import TheNavbar from "./layout/TheNavbar"

export default {
  components: {TheNavbar}
}
</script>

<style>
body, html {
  height: 100%;
}

.bg {
  /* The image used */
  background-image: url('/public/images/fondo-arriba.svg');

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>