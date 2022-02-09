<template>
  <nav class="bg-red-500 w-48 h-full
              py-6 pl-10
              flex flex-col space-y-3 justify-items-center items-stretch
              sm:items-stretch sm:justify-start
              shadow-2xl bg-opacity-30"
       style="backdrop-filter: blur(2px);">

    <navbar-item texto="Inicio" link="/"/>
    <navbar-item texto="Nosotros" link="/nosotros"/>
    <navbar-item texto="Adoptar" link="/adoptar"/>
    <navbar-item texto="Requisitos" link="/nosotros"/>
    <navbar-item texto="Donar" link="/nosotros"/>
  </nav>
</template>

<script>
import NavbarItem from "../components/NavbarItem"

export default {
  components: {
    NavbarItem
  }
}
</script>