<template>
    <div class="testimonials">
        <h5 class="testimonials__title">Отзывы</h5>
        <span class="testimonials__stars">
            <svg v-for="star in props.stars" width="13" height="13" viewBox="0 0 10 10" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M5 7.635L8.09 9.5L7.27 5.985L10 3.62L6.405 3.315L5 0L3.595 3.315L0 3.62L2.73 5.985L1.91 9.5L5 7.635Z"
                    fill="#333333" />
            </svg>
            <svg v-for="star in (5 - props.stars)" width="13" height="13" viewBox="0 0 10 10" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M5 2.565L5.485 3.71L5.72 4.265L6.32 4.315L7.555 4.42L6.615 5.235L6.16 5.63L6.295 6.22L6.575 7.425L5.515 6.785L5 6.465L4.485 6.775L3.425 7.415L3.705 6.21L3.84 5.62L3.385 5.225L2.445 4.41L3.68 4.305L4.28 4.255L4.515 3.7L5 2.565ZM5 0L3.595 3.315L0 3.62L2.73 5.985L1.91 9.5L5 7.635L8.09 9.5L7.27 5.985L10 3.62L6.405 3.315L5 0Z"
                    fill="#333333" />
            </svg>
        </span>
        <a href="" class="testimonials__number link-underline">
            {{ props.testimonialsNumber }}
            отзывов
            <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L9 8L1 14.5" stroke="#333333" />
            </svg>
        </a>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    stars: {
        type: Number,
        default: 5
    },
    testimonialsNumber: {
        type: Number,
        default: 0
    }
})
</script>

<style scoped lang="scss">
.testimonials {
    font-size: 16px;
    line-height: 43%;
    letter-spacing: 0.04em;

    &__title {
        display: inline;
        margin-right: 12px;
    }

    &__stars {
        margin-right: 4px;
    }

    &__number {
        display: inline-flex;
        align-items: center;
        svg{
            margin-left: 4px;
            margin-top: 1px;
        }
    }
}
</style>