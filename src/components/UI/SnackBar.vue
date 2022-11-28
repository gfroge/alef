<template>
    <div :class="snack.$state.isVisible ? `snackbar _visible` : `snackbar`">
        {{ snack.$state.text }}
    </div>
</template>
  
<script setup lang="ts">
import { useSnackbarStore } from '@/stores/snackbar';
const snack = useSnackbarStore();
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
    margin-left: 3vw;
    cursor: default;
    z-index: 100;
    opacity: 0;
    transition: opacity 0.2s ease 0s;

    &._visible {
        opacity: 1;
    }
}
</style>
  