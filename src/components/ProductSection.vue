<template>
    <section class="product">
        <photo-gallery />
        <div class="product__body">
            <h2 class="product__title">Пижама для девочек</h2>
            <div class="product__vendor-code">Арт. 02765/46</div>
            <product-testimonials/>
            <product-discount>скидка -36%</product-discount>
            <product-discount>акция -20%</product-discount>
            <product-size/>
        </div>
        <a href="" class="product__all-styles">Посмотреть все стили</a>
    </section>
</template>

<script setup lang="ts">
import PhotoGallery from "@/components/PhotoGallery.vue";
import ProductTestimonials from "@/components/UI/ProductTestimonials.vue";
import ProductDiscount from "@/components/UI/ProductDiscount.vue";
import ProductSize from "@/components/UI/ProductSize.vue";
</script>

<style scoped>

</style>