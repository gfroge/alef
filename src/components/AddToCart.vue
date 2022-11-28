<template>
    <div class="add-to-cart">
        <span class="add-to-cart__counter">
            <button @click="count++">+</button>
            {{ count }}
            <button @click="(count > 1) ? count-- : count = 1">-</button>
        </span>
        <span class="add-to-cart__dark-btns">
            <button
                @click="showSnack(`Товар ${props.productName.toLowerCase()} в количестве ${count} единиц добавлен в корзину`);"
                class="add-to-cart__btn">
                Добавить в корзину
            </button>
            <button
                @click="showSnack(`Товар ${props.productName.toLowerCase()} в количестве ${count} единиц добавлен в избранное`);"
                class="add-to-cart__fav">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="transparent" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7.90002 3.0948C6.69981 -2.52108 -2.59119 1.90389 1.76037 7.60175C6.11193 13.2996 8.40002 15.4908 8.40002 15.4908"
                        stroke="white" />
                    <path
                        d="M7.89415 3.0948C9.09435 -2.52108 18.7304 1.90389 14.3789 7.60175C10.0273 13.2996 7.70001 15.5 7.70001 15.5"
                        stroke="white" />
                    <path d="M7.39099 2.70752L8.4043 2.70757L8.38337 3.24079H7.39099V2.70752Z" fill="white" />
                </svg>
            </button>
        </span>
    </div>
    <a href="" class="add-to-cart__link">Купить в 1 клик</a>
</template>

<script setup lang="ts">
import { useSnackbarStore } from '@/stores/snackbar';
import { ref } from 'vue';

const props = defineProps({
    productName: {
        type: String,
        required: true
    }
})

const count = ref(1);
const snack = useSnackbarStore();
const { showSnack } = snack;

</script>

<style scoped lang="scss">
.add-to-cart {
    display: flex;

    @media(max-width:1030px) {
        display: block;
    }

    &__counter {
        font-weight: 400;
        font-size: 14px;
        line-height: 143%;
        transition: all 0.5s ease 0s;
        background-color: $GREY-6;
        padding: 0 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 145px;
        width: 145px;
        height: 44px;

        button {
            height: 25px;
            width: 25px;
        }

        margin-right: 15px;

        @media(max-width:1030px) {
            margin: 0 0 15px 0;
        }
    }

    &__btn {
        font-size: 14px;
        line-height: 143%;
        letter-spacing: 0.04em;
        padding: 8px 28px;
        border: 1px solid $BLACK;
        background-color: $BLACK;
        color: #fff;
        font-weight: 400;
        font-size: 14px;
        line-height: 143%;
        transition: all 0.5s ease 0s;
        min-height: 44px;
        max-width: 251px;

        &:hover {

            color: $BLACK;
            background-color: #fff;
        }

        margin-right: 4px;

    }

    &__fav {
        width: 44px;
        height: 44px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: $BLACK;

        svg {
            transition: all 0.3s ease 0s;
        }

        &:hover {
            svg {
                fill: #fff
            }
        }


    }

    &__dark-btns {
        display: flex !important;
    }

    &__link {
        display: block;
        margin-top: 12px;
        font-size: 14px;
        line-height: 143%;

        letter-spacing: 0.04em;
        text-decoration-line: underline;
    }
}
</style>