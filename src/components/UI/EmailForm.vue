<template>
    <form action="" class="email-sub">
        <div class="email-sub__container">
            <label ref="label" class="email-sub__label" for="input">{{ initialLabel }}</label>
            <input v-model="state.email" ref="input" @input="showCross()" @blur="v$.email.$touch"
                @focusin="toggleLableClass('in')" @focusout="toggleLableClass('out', v$.email.$error)" name="input"
                class="email-sub__input" type="email">
            <span class="email-sub__cross-wrap">
                <button @click.prevent="clearInput" ref="cross" class="email-sub__cross"></button>
            </span>
        </div>
        <button type="submit" class="white-button">Подписаться</button>
    </form>
</template>

<script setup lang="ts">
import { ref, reactive, } from "vue";
import { useVuelidate } from '@vuelidate/core'
import { email } from '@vuelidate/validators'

const state = reactive({
    email: ''
})

const rules = {
    email: { email }
}

const v$ = useVuelidate(rules, state);

const label = ref();
const input = ref();
const cross = ref()

const initialLabel: string = 'Адрес электронной почты';

const toggleLableClass = (type: string, isError: boolean = false) => {

    if (type == 'in') {
        label.value.classList.add('_active')
    } else if (!input.value.value.trim()) {
        input.value.value = '';
        label.value.classList.remove('_active');
    }
    if (isError && input.value.value) {
        label.value.classList.add('_error');
        input.value.classList.add('_error');
        label.value.innerHTML = 'Введите правильный адрес'
    } else {
        label.value.classList.remove('_error')
        input.value.classList.remove('_error')
        label.value.innerHTML = initialLabel
    }
}

const showCross = () => {
    if (input.value) {
        cross.value.classList.add('_visible');
    }
}

const clearInput = () => {
    input.value.value = '';
    cross.value.classList.remove('_visible');
    label.value.classList.remove('_active');
    toggleLableClass('out',false);
}


</script>

<style scoped lang="scss">
.email-sub {
    text-align: right;
    min-width: 280px;
    max-width: 452px;

    &__container {
        position: relative;
    }

    &__input {
        border-bottom: 1px solid $GREY-LIGHT;
        padding: 12px;
        text-align: left;
        width: 100%;
        max-width: 100%;
        font-weight: 400;
        font-size: 14px;
        line-height: 143%;
        letter-spacing: 0.04em;
        transition: color 0.3s ease 0s;

        &._error {
            color: rgb(214, 51, 51);
            border-color: rgb(214, 51, 51);
        }
    }

    &__label {
        position: absolute;
        color: $GREY-DARK;
        left: 12px;
        bottom: 12px;
        z-index: 3;
        font-weight: 400;
        font-size: 14px;
        line-height: 143%;
        letter-spacing: 0.04em;
        transition: all 0.3s ease 0s;
        pointer-events: none;

        &._active {
            font-size: 11px;
            bottom: 35px;
        }

        &._error {
            color: rgb(214, 51, 51);
        }
    }

    button.white-button {
        margin-top: 35px;

    }
    &__cross-wrap{
        position: absolute;
        right: 0;
        top: 8px;
    }
    &__cross {
        width: 16px;
        height: 16px;
        position: relative;
        margin-left: -22px;
        display: none;
        pointer-events: none;

        &::before,
        &::after {
            content: '';
            display: block;
            height: 1px;
            width: 16px;
            background-color: $GREY-LIGHT;
            position: absolute;
            top: 50%;
            left: 0;
        }

        &::before {
            transform: rotate(-45deg);
        }

        &::after {
            transform: rotate(45deg);
        }

        &._visible {
            display: inline;
            pointer-events: all;
        }
    }
}
</style>