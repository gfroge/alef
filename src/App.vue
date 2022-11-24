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
      { link: '', likes: 7, imagePath: 'public/assets/images/cards/1.jpg', imagePathWbp: ''}
    ];

    return { clothingCards }
  },
};
</script>

<style scoped>

</style>
