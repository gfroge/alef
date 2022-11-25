<template>
  <page-header />
  <main>
    <section class="cards">
      <div class="cards__container container">
        <clothing-card :cardData="clothingCards[0]" />
        <div class="cards__grid">
          <clothing-card :cardData="clothingCards[1]" />
          <clothing-card :cardData="clothingCards[2]" />
          <clothing-card :cardData="clothingCards[3]" />
          <clothing-card :cardData="clothingCards[4]" />
        </div>
      </div>
    </section>
  </main>
  <snack-bar/>
</template>

<script lang="ts">
import PageHeader from "@/components/PageHeader.vue";
import ClothingCard from '@/components/UI/ClothingCard.vue';
import SnackBar from '@/components/UI/SnackBar.vue';



export default {
  name: "App",
  components: {
    PageHeader, ClothingCard, SnackBar
  },
  setup() {

    const clothingCards = [
      { link: 'link-to-a-product', likes: 170, imagePath: '/assets/images/cards/0.jpg', imagePathWbp: '', sizeInPx: 686, islarge: true },
      { link: 'link-to-a-product', likes: 112, imagePath: '/assets/images/cards/1.jpg', imagePathWbp: '', sizeInPx: 335, islarge: false },
      { link: 'link-to-a-product', likes: 85, imagePath: '/assets/images/cards/2.jpg', imagePathWbp: '', sizeInPx: 335, islarge: false },
      { link: 'link-to-a-product', likes: 200, imagePath: '/assets/images/cards/3.jpg', imagePathWbp: '', sizeInPx: 335, islarge: false },
      { link: 'link-to-a-product', likes: 200, imagePath: '/assets/images/cards/4.jpg', imagePathWbp: '', sizeInPx: 335, islarge: false }
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

<style lang="scss" scoped>
 .cards{
  &__container{
    display: flex;
  }
  &__grid{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-left: 16px;
  }
 }
</style>
