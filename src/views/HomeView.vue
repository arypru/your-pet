<template>
  <div>
    <the-logo/>
    <div class="grid grid-cols-2 gap-4">
      <div>
        <v-description/>
        <the-cards-home/>
      </div>

      <div>
        <the-header-image/>
      </div>
    </div>
  </div>
</template>

<script>
import TheLogo from "../components/TheLogo"
import VDescription from "@/components/VDescription";
import TheHeaderImage from "../components/TheHeaderImage"
//import TheCardsHome from "@/components/TheCardsHome";

export default {
  name: 'HomeView',
  components: {TheLogo, VDescription,TheHeaderImage}
}
</script>
