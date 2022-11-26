<template>
    <div :class="snack.$state.isVisible ? `snackbar _visible` : `snackbar`">
        {{ snack.$state.text }}
    </div>
</template>
  
<script setup lang="ts">
// is white , center/right
// todo: use store to show it
import { ref, computed } from "vue";
import { useSnackbarStore } from '@/stores/snachbar';

const snack = useSnackbarStore();

// const element = ref();


// const changeWidth = (newWidth: number) => {
//     margin = computed(() => {
//         return ` margin-left:-${newWidth / 2}px;`;
//     })
//     console.log(` margin-left:-${newWidth / 2}px;`);

// }
// let margin = computed(() => {
//     return ` margin-left:0px;`;
// });

// snack.$subscribe((state) => {
//     if (state.events) {
//         setInterval(() => {
//             changeWidth(element.value.offsetWidth)
//             console.log(element.value.offsetWidth);
//         }, 1000)
//     }
// })
</script>
  
<style scoped lang="scss">
.snackbar {
    border: 1px solid $BLACK;
    background-color: #fff;
    padding: 12px 16px;
    text-align: center;
    font-size: 18px;
    line-height: 143%;

    position: fixed;
    max-width: 400px;
    bottom: 30px;
    right:3vw;
    cursor: default;
    z-index: 100;
    opacity: 0;
    transition: opacity 0.2s ease 0s;

    &._visible {
        opacity: 1;
    }
}
</style>
  