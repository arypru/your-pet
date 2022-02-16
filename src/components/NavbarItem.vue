<template>
    <router-link exact-active-class="text-red-900 text-4xl font-sansita-regular underline decoration-wavy font-bold"  :to="link" class="hover:underline hover:decoration-wavy text-3xl hover:font-bold text-white hover:text-red-900 rounded-md font-sansita-regular">
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
