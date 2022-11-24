<template>
  <page-header ></page-header>
  <clothing-card :cardData="clothingCards[0]"></clothing-card>
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
      {link:'', likes: 7,imagePath:''}
    ];
    
    return{clothingCards}
  },
};
</script>

<style scoped></style>
