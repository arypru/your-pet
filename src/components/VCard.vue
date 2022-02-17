<template>
    <div :class="background"
          class="px-8 py-6
              opacity-40 hover:opacity-100
              hover:shadow-transparent shadow-lg rounded-3xl bg-opacity-40"
          style="backdrop-filter: blur(2px);">

      <div class="grid grid-cols-4 justify-center content-center">
        <div>
          <img class="h-28" :src="(imagen)" alt="perro y gato" title="Tu Mascota">
        </div>

        <div class="col-span-3">
          <p :class="textolink" class="font-sansita-regular pb-2 text-3xl hover:font-bold">{{ titulo }}</p>
          <p class="font-opensans-regular text-base text-gray-600">{{descripcion}}</p>
          <p :class="textolink" class="font-opensans-regular text-red text-base pt-2">{{subdescripcion}}</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props:{

    //color dinamico del link para que coincida con el background
    textolink: {
      type: String,
      default: 'no-text',
      required: false,
    },

    //texto que incentiva a ir alguna parte de la pagina
    subdescripcion:{
      type: String,
      default: 'no-text',
      required: true,
    },

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

    descripcion:{
      type: String,
      default: 'no-text',
      required: false,
    }
  }
}
</script>