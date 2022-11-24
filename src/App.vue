<template>
  <page-header></page-header>
  <div class="container">
    <clothing-card :cardData="clothingCards[0]"></clothing-card>
  </div>

</template>

<script lang="ts">
import PageHeader from "@/components/PageHeader.vue";
import ClothingCard from '@/components/UI/ClothingCard.vue';

export default {
  name: "App",
  components: {
    PageHeader, ClothingCard
  },
  setup() {
    const clothingCards = [
      { link: 'link-to-a-product', likes: 7, imagePath: 'public/assets/images/cards/1.jpg', imagePathWbp: '', sizeInPx: 335 , islarge: false }
    ];

    return { clothingCards }
  },
};
</script>

<style lang="scss">
* {
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  color: $BLACK;
}
</style>

<style scoped>

</style>
