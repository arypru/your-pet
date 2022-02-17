<template>
  <nav class="bg-red-500 w-52 h-full
              grid content-center
              py-6 pl-6
              flex flex-col space-y-6  items-stretch
              shadow-2xl bg-opacity-30"
       style="backdrop-filter: blur(2px);">

    <!--SEO - alt="describir el contenido del elemento grafico"
    <img class="h-28 ml-6" :src=" '/images/bff.png' " alt="perro y gato" title="Tu Mascota">-->

    <navbar-item icon="home" texto="Inicio" link="/"/>
    <navbar-item icon="people_alt" texto="Nosotros" link="/nosotros"/>
    <navbar-item icon="pets" texto="Mascotas" link="/adoptar"/>
    <navbar-item icon="text_snippet" texto="Requisitos" link="/requisitos"/>
    <navbar-item icon="volunteer_activism" texto="Donar" link="/donar"/>
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