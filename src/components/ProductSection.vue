<template>
    <section class="product">
        <photo-gallery />
        <div>
            <div class="product__body">
                <div>
                    <h2 class="product__title">{{ productName }}</h2>
                    <div class="product__vendor-code">Арт. 02765/46</div>
                </div>

                <product-testimonials :stars="4" :testimonialsNumber="14" />

                <div class="product__price price">
                    <div class="price__wrapper">
                        <span class="price__number">800 ₽</span>
                        <span class="price__old">1 500 ₽</span>
                        <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L9 8L1 14.5" stroke="#333333" />
                        </svg>

                    </div>
                    <div class="price__discount-wrapper">
                        <product-discount>скидка -36%</product-discount>
                        <product-discount>акция -20%</product-discount>
                    </div>
                </div>

                <product-size />

                <div class="product__cart">
                    <add-to-cart :productName="productName" />
                </div>
            </div>
            <div class="product__divider-wrap">
                <div class="product__divider"></div>
            </div>
            <div class="product__body">
                <product-other-links />
            </div>
        </div>
    </section>
    <a href="" class="product__all-styles">Посмотреть все стили</a>
</template>

<script setup lang="ts">
import PhotoGallery from "@/components/PhotoGallery.vue";
import ProductTestimonials from "@/components/UI/ProductTestimonials.vue";
import ProductDiscount from "@/components/UI/ProductDiscount.vue";
import ProductSize from "@/components/UI/ProductSize.vue";
import AddToCart from "@/components/AddToCart.vue";
import ProductOtherLinks from "@/components/ProductOtherLinks.vue";

const productName: string = 'Пижама для девочек';
</script>

<style scoped lang="scss">
.price {
    &__number {
        font-weight: 700;
        font-size: 24px;
        line-height: 100%;
        letter-spacing: 0.04em;
        text-transform: uppercase;
    }

    &__old {
        font-size: 14px;
        line-height: 143%;
        letter-spacing: 0.04em;
        text-decoration-line: line-through;
        margin: 0 12px;
        color: $GREY-DARK
    }

    &__wrapper {
        display: flex;
        align-items: center;
    }

    &__discount-wrapper {
        display: flex;
        margin-top: 12px;

        span {
            &:not(:last-child) {
                display: block;
                margin-right: 9px;
            }
        }
    }
}

.product {
    max-width: 1390px;
    margin: 0 auto;
    display: flex;

    >div {
        width: 50%;
    }

    @media(max-width:767px) {
        max-width: 450px;
        margin: 0 auto;
        display: block;

        >div {
            width: auto;
        }
    }

    &__body {
        &:first-child {
            padding: 22px 36px 0 36px;
        }

        &:last-child {
            padding: 0px 36px 22px 36px;
        }

        @media(max-width:767px) {
            padding: 24px 20px;

            &:first-child {
                padding: 24px 20px 0 20px;
            }

            &:last-child {
                padding: 0px 20px 24px 20px;
            }
        }

    }

    &__title {
        font-weight: 600;
        font-size: 18px;
        line-height: 133%;
        margin-bottom: 8px;
    }

    &__vendor-code {
        font-size: 12px;
        line-height: 133%;
        letter-spacing: 0.04em;
        color: $GREY-DARK;
        margin-bottom: 16px;
    }

    &__price {
        margin-top: 46px;
        margin-bottom: 33px;
    }

    &__cart {
        margin-top: 40px;
    }

    &__divider {
        background-color: $GREY-LIGHT;
        height: 1px;
        width: 100%;
        margin: 28px 0;

        &-wrap {
            @media(min-width:768px) {
                margin-left: 16px;
            }
        }

    }

    &__all-styles {
        margin: 32px 0;
        display: block;
        width: 100%;
        text-align: center;
        font-size: 14px;
        line-height: 143%;

        letter-spacing: 0.04em;
        text-decoration-line: underline;
    }

}
</style>