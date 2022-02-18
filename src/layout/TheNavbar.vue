<template>
  <nav class="bg-red-500
              h-20 md:h-20 lg:h-full
              w-full lg:w-40 xl:w-52 2xl:w-52
              grid sm:content-end md:content-end lg:content-center xl:content-center 2xl:content-center
              md:py-3 lg:py-6 lg:pl-6
              shadow-2xl bg-opacity-30
              fixed bottom-0 left-0 right-0 "
              style="backdrop-filter: blur(2px);"
  >
    <div class="flex flex-row md:flex-row lg:flex-col lg:justify-start justify-between px-3 pt-3 md:px-12 md:pt-0 lg:px-0">
      <navbar-item class="lg:pb-5" icon="home" texto="Inicio" link="/"/>
      <navbar-item class="lg:pb-5" icon="people_alt" texto="Nosotros" link="/nosotros"/>
      <navbar-item class="lg:pb-5" icon="pets" texto="Mascotas" link="/adoptar"/>
      <navbar-item class="lg:pb-5" icon="text_snippet" texto="Requisitos" link="/requisitos"/>
      <navbar-item class="lg:pb-5" icon="volunteer_activism" texto="Donar" link="/donar"/>
    </div>
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