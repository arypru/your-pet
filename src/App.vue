<template>
  <div id="app" class="bg">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>


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