<template>
    <router-link exact-active-class="text-red-500 text-4xl font-italic underline decoration-wavy"  :to="link" class="hover:underline hover:decoration-wavy text-3xl hover:font-bold text-white hover:text-white rounded-md font-sansita"> {{ texto }}</router-link>
</template>

<script>
export default {
  props:{
    texto: {
      type: String,
      default: 'no-text',
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
