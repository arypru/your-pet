<template>
  <div>
    <div class="mt-8">
        <v-card
            subdescripcion="Conoce las historias"
            background="bg-red-200"
            descripcion="Hay muchos animales que se encuentran en busqueda de una casa nueva con mucho amor para dar. ¿Qué esperas para darles una oportunidad?"
            titulo="Mascotas"
            textolink="text-red-400"
            imagen="/images/gatito-perrito.png"/>
    </div>

    <div class="mt-8">
        <v-card
            subdescripcion="Leer los requisitos"
            textolink="text-emerald-500"
            background="bg-emerald-200"
            descripcion="Consulta los requisitos que se necesitan para ser adoptante. El más importante: Tener mucho amor que dar ♥."
            titulo="Requisitos"
            imagen="/images/requisitos1.png"/>
    </div>

    <div class="mt-8">
      <v-card
          subdescripcion="Enterate cómo hacerlo"
          textolink="text-cyan-500"
          background="bg-cyan-200"
          descripcion="Dona insumos, castracion, o lo que quieras. Cada aporte por mas pequeño que sea, significa mucho para ellos"
          titulo="Donar"
          imagen="/images/donar.png"/>
    </div>
  </div>
</template>

<script>
import VCard from "@/components/VCard";

export default {
  components: {VCard}
}
</script>