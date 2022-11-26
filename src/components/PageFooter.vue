<template>
    <footer class="footer">
        <div class="footer__col">
            <h4 class="footer__title">Покупателям</h4>
            <ul class="footer__links">
                <li><a class="link-underline" href="">Каталог</a></li>
                <li><a class="link-underline" href="">Акции</a></li>
                <li><a class="link-underline" href="">Бренды</a></li>
            </ul>
        </div>

        <div class="footer__col">
            <h4 class="footer__title">О Нас</h4>
            <ul class="footer__links">
                <li><a class="link-underline" href="">О компании</a></li>
                <li><a class="link-underline" href="">Новости</a></li>
                <li><a class="link-underline" href="">Команда</a></li>
            </ul>
        </div>

        <div class="footer__col email">
            <h4 class="footer__title email">Узнайте первыми о новинках и акциях</h4>
            <email-form />
        </div>
    </footer>
</template>

<script setup lang="ts">
import EmailForm from '@/components/UI/EmailForm.vue'

</script>

<style scoped lang="scss">
.footer {
    max-width: 1185px;
    padding: 70px 15px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 29% 29% 39.16%;

    @media(max-width:1070px) {
        grid-template-columns: fit-content(29%) fit-content(29%) auto;
        gap: 60px;
        justify-content: center;

    }

    @media(max-width:767px) {
        max-width: 480px;

        grid-template-columns: 1fr 1fr;
        grid-template-areas:
            "info1 info2"
            "form form";
        column-gap: 10px;
        row-gap: 38px;
    }

    @media(max-width:450px) {
        padding: 30px 15px 180px 15px;

    }

    &__col {
        @media(max-width:767px) {
            grid-area: info1;

            &:nth-child(2) {
                grid-area: info2
            }

            &.email {
                grid-area: form
            }
        }

    }

    &__title {
        font-size: 16px;
        line-height: 150%;
        letter-spacing: 0.04em;
        text-transform: uppercase;

        &.email {
            margin-bottom: 20px;
        }
    }

    &__links {
        margin-top: 8px;

        li {
            &:not(:last-child) {
                margin-bottom: 8px;
            }

            a {
                font-size: 14px;
                line-height: 143%;
                letter-spacing: 0.04em;
            }
        }
    }
}
</style>