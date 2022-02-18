<template>
    <router-link
         exact-active-class="text-red-600 lg:text-2xl xl:text-3xl font-sansita-regular font-bold"
         :to="link"
         class="hover:text-red-600 hover:font-bold text-white font-sansita-regular lg:text-xl xl:text-2xl">
         <div class="flex flex-col justify-center items-center
                      lg:flex-row xl:flex-row 2xl:flex-row lg:justify-start ">
           <span class="material-icons">{{ icon }}</span>
           <p>{{ texto }}</p>
         </div>
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

<style>
.material-icons {
  font-size: 32px;
}
</style>