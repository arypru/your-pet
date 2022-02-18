<template>
  <div>
    <the-logo/>
    <the-header-image class="block lg:hidden"/>
    <div class="lg:grid lg:grid-cols-2 lg:gap-4">
      <div>
        <v-description/>
        <the-cards-home/>
      </div>

      <div>
        <the-header-image class="hidden lg:block"/>
      </div>
    </div>
  </div>
</template>

<script>
import TheLogo from "../components/TheLogo"
import VDescription from "@/components/VDescription";
import TheHeaderImage from "../components/TheHeaderImage"
import TheCardsHome from "@/components/TheCardsHome";

export default {
  name: 'HomeView',
  components: {TheLogo, VDescription,TheHeaderImage,TheCardsHome}
}
</script>
