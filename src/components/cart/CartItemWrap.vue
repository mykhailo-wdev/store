<template>
    <div class="cart-item-wrapp">
        <catalog-cart-item
            v-for="(item, idx) in cart_data" 
            :key="item.article"
            :cart_item_data="item"
            @deleteFromCart="deleteFromCart(idx)"
            @incrementItem="incrementItem(idx)"
            @decrementItem="decrementItem(idx)"
        ></catalog-cart-item>
    </div>
    <div class="cart-item-wrapp__total">
        <p class="cart-item-wrapp__total-title">Total: </p>
        <p class="cart-item-wrapp__total-sum">{{ cartTotlaCost }} грн.</p>
    </div>
</template>

<script>
import CatalogCartItem from './CatalogCartItem.vue'
import { mapActions } from 'vuex'
    export default {
        name: 'CartItemWrapp',
        props: {
            cart_data: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        methods: {
            ...mapActions([
                'DELETE_FROM_CART',
                'INCREMENT_CART_ITEM',
                'DECREMENT_CART_ITEM'
            ]),
            deleteFromCart (idx) {
                this.DELETE_FROM_CART(idx)
            },
            decrementItem(idx) {
                this.DECREMENT_CART_ITEM(idx)
            },
            incrementItem(idx) {
                this.INCREMENT_CART_ITEM(idx)
            }
        },
        computed: {
            cartTotlaCost () {
                let result = []
                for(let item of this.cart_data) {
                    result.push(item.price * item.quantity)
                }
                result = result.reduce(function(sum, el){
                    return sum + el
                })
                return result
            }
        },
        components: { CatalogCartItem }
    }
</script>

<style lang="scss" scoped>
.cart-item-wrapp{
    &__total{
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        padding: $padding*2;
        display: flex;
        justify-content: center;
        background-color: $color-special;
        font-size: 20px;
        color: $color-light;
    }
    &__total-title{
        margin-right: $margin*2;
    }
}
</style>