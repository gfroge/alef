<template>
    <div @click="openMenu" class="size">
        <span>{{ sizeChosen }}</span>
        <button>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.75 3.75L7.75 11.75L1.25 3.75" stroke="#333333" />
            </svg>
        </button>
        <ul ref="list" class="size__list">
            <li @click="chooseSize('XS')" class="link-underline">XS</li>
            <li @click="chooseSize('S')" class="link-underline">S</li>
            <li @click="chooseSize('M')" class="link-underline">M</li>
            <li @click="chooseSize('L')" class="link-underline">L</li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const sizeChosen = ref('Выбрать размер')
const list = ref()

const openMenu = () => {
    list.value.classList.toggle('_active')
}

const chooseSize = (size:string) => {
    sizeChosen.value = size;
}

</script>

<style scoped lang="scss">
.size {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    padding: 12px 16px;
    font-weight: 400;
    font-size: 14px;
    line-height: 143%;
    letter-spacing: 0.04em;
    border: 1px solid $BLACK;
    max-width: 315px;
    position: relative;

    &__list {
        position: absolute;
        z-index: 3;
        top: 50px;
        left: 0;
        background-color: #fff;
        width: 100%;
        border: 1px solid $BLACK;
        padding: 20px;
        text-align: center;

        &>li {
            cursor: pointer;
            transition: all 0.3s ease 0s;
            font-size: 22px;

            &:not(:last-child) {
                margin-bottom: 15px;
            }

        }

        opacity: 0;
        pointer-events: none;
        transition: all 0.3s ease 0s;
        &._active {
            opacity: 1;
            pointer-events: all;
        }
    }
}
</style>