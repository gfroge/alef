<template>
  <div class="clothing-card">
    <picture>
      <source srcset="">
      <img :src="props.cardData" alt="фото одежды">
    </picture>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  cardData: {
      type: Array,
      required: true
    },
})
</script>

<style scoped></style>
