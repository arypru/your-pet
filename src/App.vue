<template>
  <div id="app" class="bg">

    <div class="grid grid-cols-6 h-full" >
      <div>
        <the-navbar/>
      </div>

      <div class="col-span-5">
        <router-view/>
      </div>
    </div>

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