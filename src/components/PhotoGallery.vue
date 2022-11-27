<template>
    <div class="gallery">
        <nav class="gallery__slides slides">
            <button v-for="slide, index in data" @click="showImage(index)" class="slides__slide">
                <picture>
                    <source :srcset="slide.srcWebp">
                    <img :src="slide.src" :alt="slide.alt">
                </picture>
            </button>
        </nav>
        <div ref="mainImage" class="gallery__main-image">
            <picture>
                <source :srcset="data[elementIndex].largeSrcWebp">
                <img :src="data[elementIndex].largeSrc" :alt="data[elementIndex].alt">
            </picture>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const data = [
    { src: '/assets/images/gallery/1.min.jpg', alt: 'фото пижамы', srcWebp: '/assets/images/gallery/1.min.webp', largeSrc: '/assets/images/gallery/1.webp', largeSrcWebp: '/assets/images/gallery/1.webp' },
    { src: '/assets/images/gallery/2.min.jpg', alt: 'фото пижамы', srcWebp: '/assets/images/gallery/2.min.webp', largeSrc: '/assets/images/gallery/2.webp', largeSrcWebp: '/assets/images/gallery/2.webp' },
    { src: '/assets/images/gallery/3.min.jpg', alt: 'фото пижамы', srcWebp: '/assets/images/gallery/3.min.webp', largeSrc: '/assets/images/gallery/3.webp', largeSrcWebp: '/assets/images/gallery/3.webp' },
    { src: '/assets/images/gallery/4.min.jpg', alt: 'фото пижамы', srcWebp: '/assets/images/gallery/4.min.webp', largeSrc: '/assets/images/gallery/4.webp', largeSrcWebp: '/assets/images/gallery/4.webp' },
    { src: '/assets/images/gallery/5.min.jpg', alt: 'фото пижамы', srcWebp: '/assets/images/gallery/5.min.webp', largeSrc: '/assets/images/gallery/5.webp', largeSrcWebp: '/assets/images/gallery/5.webp' }
];

const mainImage = ref();
let elementIndex = ref(0);

const showImage = async (index: number) => {
    if (index != elementIndex.value) {
        mainImage.value.classList.add('_hidden');
        await new Promise((resolve: any) => {
            setTimeout(() => {
                mainImage.value.classList.remove('_hidden');
                resolve();
            }, 350);
        })
        elementIndex.value = index;
    }
}

</script>

<style scoped lang="scss">
.gallery {
    position: relative;
    max-width: 686px;
    &__slides {
        top: 24px;
        left: 24px;
    }

    &__main-image {
        transition: all 0.3s ease 0s;
        img{
            max-width: 100%;
        }
        &._hidden {
            opacity: 0;
        }
    }
}

.slides {
    position: absolute;
    z-index: 2;
    &__slide {
        display: block;
        max-width: 70px;
        max-height: 91px;
        opacity: 0.7;
        transition: all 0.3s ease 0s;
        margin-bottom: 7px;

        img {
            max-width: 100%;
        }

        &:hover {
            opacity: 1;
        }
    }
}
</style>