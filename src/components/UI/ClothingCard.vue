<template>
  <div class="clothing-card" :style="`max-width:${cardData.sizeInPx}px;max-height:${cardData.sizeInPx}px`">
    <picture>
      <source :srcset="cardData.imagePathWebp">
      <img :src="cardData.imagePath" alt="фото одежды">
    </picture>
    <div class="clothing-card__overlay">
      <div ref="content" class="clothing-card__content">
        <a @click.prevent="copyLink(cardData.link)" href="" class="clothing-card__copy">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="2.5" width="13" height="13" rx="1.5" stroke="white" />
            <path
              d="M2.33784 2.63126L2.33784 2.49958C2.33784 1.39501 3.23327 0.499584 4.33784 0.499585L13.5 0.49959C14.6045 0.49959 15.5 1.39502 15.5 2.49959L15.5 11.9382C15.5 12.9853 14.5159 13.7537 13.5 13.4997V13.4997"
              stroke="white" />
          </svg>
        </a>
        <a :href="cardData.link" class="clothing-card__explore">
          <svg width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.752161 10.9953C0.638177 9.54198 1.78674 8.2998 3.24451 8.2998H28.7555C30.2133 8.2998 31.3618 9.54198 31.2478 10.9953L29.5851 32.1953C29.4831 33.4962 28.3976 34.4998 27.0927 34.4998H4.90725C3.60235 34.4998 2.51694 33.4962 2.41491 32.1953L0.752161 10.9953Z"
              stroke="white" />
            <path d="M7.004 18.4857C7.004 18.4857 6.54373 1 15.5 1C24.4563 1 23.996 18.4857 23.996 18.4857"
              stroke="white" />
          </svg>
          Узнай, что на мне
        </a>
        <div class="clothing-card__likes">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.42873 3.25725L9.76116 1.03654L13.1965 1.46595L14.5 3.63849V6.32062L8.01449 14.1959L1.93878 6.2507L1.05633 4.04458L2.34555 1.89588L5.35443 0.606363L7.61587 3.32009L8.06654 3.86089L8.42873 3.25725Z"
              fill="white" stroke="white" />
            <path
              d="M7.9 3.0948C6.6998 -2.52108 -2.59121 1.90389 1.76035 7.60175C6.11191 13.2996 8.40001 15.4908 8.40001 15.4908"
              stroke="white" />
            <path d="M7.89413 3.0948C9.09434 -2.52108 18.7304 1.90389 14.3788 7.60175C10.0273 13.2996 7.7 15.5 7.7 15.5"
              stroke="white" />
            <path d="M7.39098 2.70752L8.40429 2.70757L8.38335 3.24079H7.39098V2.70752Z" fill="white" />
          </svg>
          {{ cardData.likes }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import {useSnackbarStore} from '@/stores/snachbar';

// snackbar
const snack = useSnackbarStore();
const {showSnack} = snack;

const props = defineProps({
  cardData: {
    type: Object,
    required: true
  },
})
const copyLink = (data: string) => {
  navigator.clipboard.writeText(data);
  showSnack('Ссылка скопирована!');
}
const content = ref();
onMounted(() => {
  if (props.cardData.islarge) {
    content.value.classList.add('_large-image');
  }
})
</script>

<style scoped lang="scss">
.clothing-card {
  position: relative;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }

  &__overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba($color: $BLACK, $alpha: 0.7);
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
    opacity: 0;
    transition: all 0.3s ease 0s;
  }

  &:hover &__overlay {
    pointer-events: all;
    opacity: 1;
  }

  &__content {
    max-width: 335px;
    max-height: 335px;
    width: 100%;
    height: 100%;
    padding: 12px 12px 16px 12px;
    display: grid;
    justify-items: center;
    grid-template-rows: 45% 20.3333% 34.6666%;

    &._large-image {
      border-radius: 20px;
      border: 1px solid rgba($color: #fff, $alpha: 0.5);
    }
  }

  &__copy {
    justify-self: end;
    width: 16px;
    height: 16px;

    >svg {
      transition: all 0.3s ease 0s;
    }

    &:hover>svg {
      box-shadow: 2px 2px 7px 1px rgba(255, 255, 255, 0.8);
    }
  }

  &__explore {
    color: #fff;
    font-size: 14px;
    line-height: 143%;
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 40px;
    padding: 5px 15px 15px 15px;
    transition: all 0.3s ease 0s;

    &:hover {
      box-shadow: 2px 2px 70px 1px rgba(255, 255, 255, 0.8);
      background-color: rgba(255, 255, 255, 0.3);
    }

    >svg {
      margin-bottom: 7px;
    }
  }

  &__likes {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #fff;
    align-self: end;
    cursor: default;

    >svg {
      margin-right: 2px;
      margin-bottom: -3px;
    }
  }
}
</style>
