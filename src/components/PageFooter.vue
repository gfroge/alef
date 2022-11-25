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

        <div class="footer__col">
            <h4 class="footer__title">Узнайте первыми о новинках и акциях</h4>
            <email-form/>
        </div>
    </footer>
</template>

<script setup lang="ts">
import EmailForm from '@/components/UI/EmailForm.vue'

</script>

<style scoped lang="scss">
.footer {
    max-width: 1185px;
    padding: 0 15px;
    margin: 0 auto;

    &__col {}

    &__title {
        font-size: 16px;
        line-height: 150%;
        letter-spacing: 0.04em;
        text-transform: uppercase;
    }

    &__links {
        margin-top: 4px;
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