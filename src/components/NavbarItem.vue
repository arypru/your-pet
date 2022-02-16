<template>
    <router-link
        exact-active-class="underline underline-offset-8 text-red-400 text-4xl font-sansita-regular font-bold"
        :to="link"
        class="hover:text-red-400 text-3xl hover:font-bold text-white font-sansita-regular">
      <span class="material-icons ">{{icon}}</span> {{ texto }}
    </router-link>
</template>

<script>
export default {
  props:{
    texto: {
      type: String,
      default: 'no-text',
      required: true,
    },

    icon: {
      type: String,
      required: true,
    },

    link:{
      type: String,
      default: 'no-text',
      required: false,
    }
  }
}
</script>
