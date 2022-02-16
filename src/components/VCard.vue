<template>
  <div :class="background"
      class="
              grid content-center
              px-8 py-6
              flex flex-col space-y-6  items-stretch
              opacity-40 hover:opacity-100
              hover:shadow-transparent shadow-lg rounded-3xl bg-opacity-40"
       style="backdrop-filter: blur(2px);">

    <div class="grid grid-cols-3">
      <div>
        <img class="h-28" :src=" (imagen) " alt="perro y gato" title="Tu Mascota">
      </div>

      <div class="col-span-2 text-2xl">
        <p class="font-sansita-regular pb-2">
          <span class="material-icons "> {{ icon }}</span> {{ titulo }}
        </p>

        <p class="font-opensans-regular text-sm">
         {{descripcion}}
        </p>

      </div>

    </div>
  </div>
</template>


<script>
export default {
  props:{

    imagen:{
      type: String,
      default: 'no-text',
      required: true,
    },

    background: {
      type: String,
      default: 'no-text',
      required: true,
    },

    titulo: {
      type: String,
      default: 'no-text',
      required: true,
    },

    icon: {
      type: String,
      required: true,
    },

    descripcion:{
      type: String,
      default: 'no-text',
      required: false,
    }
  }
}
</script>