<template>
    <section class="cards">
        <div class="cards__container">
            <clothing-card :cardData="clothingCards[0]" />
            <div class="cards__grid">
                <clothing-card :cardData="clothingCards[1]" />
                <clothing-card :cardData="clothingCards[2]" />
                <clothing-card :cardData="clothingCards[3]" />
                <clothing-card :cardData="clothingCards[4]" />
            </div>
        </div>
    </section>
</template>
  
<script setup lang="ts">
import ClothingCard from '@/components/UI/ClothingCard.vue';

const isLarge = (size:number) => {
    const width =  Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
  return (width > 450 && size > 400)
}

const clothingCards = [
    { link: 'link-to-a-product', likes: 170, imagePath: '/assets/images/cards/0.jpg', imagePathWbp: '', sizeInPx: 686, islarge: isLarge(686) },
    { link: 'link-to-a-product', likes: 112, imagePath: '/assets/images/cards/1.jpg', imagePathWbp: '', sizeInPx: 335, islarge: isLarge(335) },
    { link: 'link-to-a-product', likes: 85, imagePath: '/assets/images/cards/2.jpg', imagePathWbp: '', sizeInPx: 335, islarge: isLarge(335) },
    { link: 'link-to-a-product', likes: 200, imagePath: '/assets/images/cards/3.jpg', imagePathWbp: '', sizeInPx: 335, islarge: isLarge(335) },
    { link: 'link-to-a-product', likes: 200, imagePath: '/assets/images/cards/4.jpg', imagePathWbp: '', sizeInPx: 335, islarge: isLarge(335) }
];
</script>
  
<style scoped lang="scss">
.cards {
    &__container {
        display: flex;

        >div {
            width: 50%;
        }

        @media(max-width: 900px) {
            >div {
                width: 100%;
                max-width: 550px !important;
            }

            flex-wrap: wrap;
            justify-content: center;
        }

    }

    &__grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
        margin-left: 16px;

        @media(max-width: 900px) {
            margin: 16px 0 0 0;
            justify-items: center;

        }
        @media(max-width: 450px) {
            margin-top: 8px;
            gap: 8px;
        }
        @media(max-width: 330px) {
            grid-template-columns: 1fr;
            >div {
                max-width: 100% !important;
                max-height: 100% !important;
            }
        }
    }
}
</style>
  