<template>
    <router-link :to="{ name: 'catalog'}">
        <div class="cart__link">Return to Catalog</div>
    </router-link>
    <div class="catalog-cart">
        <h1>CART</h1>
        <p v-if="!CART.length">Cart is empty. Please add goods to Cart</p>
        <cart-item-wrap
            v-if="CART.length"
            :cart_data="CART"
        ></cart-item-wrap>
    </div>
</template>

<script>
import CartItemWrap from './CartItemWrap.vue'
import { mapGetters } from 'vuex'
    export default {
        name: 'CatalogCart',

        computed: {
            ...mapGetters(['CART'])
        },
        components: { CartItemWrap }
    }
</script>

<style lang="scss" scoped>
.cart__link{
    position: absolute;
    top: 10px;
    right: 10px;
    padding: $padding*2;
    border: 1px solid #e8e8e8;
    cursor: pointer;
}
</style>
