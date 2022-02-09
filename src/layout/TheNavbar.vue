<template>
  <nav class="bg-red-500 w-52 h-full
              grid content-center
              py-6 pl-10
              flex flex-col space-y-6  items-stretch
              sm:items-stretch sm:justify-start
              shadow-2xl bg-opacity-30"
       style="backdrop-filter: blur(2px);">

      <navbar-item texto="Inicio" link="/"/>
      <navbar-item texto="Nosotros" link="/nosotros"/>
      <navbar-item texto="Mascotas" link="/adoptar"/>
      <navbar-item texto="Requisitos" link="/requisitos"/>
      <navbar-item texto="Donar" link="/donar"/>
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