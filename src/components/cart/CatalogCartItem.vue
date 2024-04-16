<template>
    <div class="catalog-cart-item">
        <div class="catalog-cart-item__wrap">
            <img :src="cart_item_data.image" 
                    :alt="cart_item_data.name" 
                    class="catalog-cart-item__image"
            >
        </div>
        <div class="catalog-cart-item__info">
            <p>{{ cart_item_data.name }}</p>
            <p>{{ cart_item_data.price }} грн.</p>
            <p>арт. {{ cart_item_data.article }}</p>
        </div>
        <div class="catalog-cart-item__quantity">
            <p class="catalog-cart-item__quantity__info">QTY:</p>
            <div class="catalog-cart-item__quantity__wrap">
                <button class="btn catalog-cart-item__quantity-increment" @click="incrementItem">+</button>
                <p class="catalog-cart-item__quantity__number">{{ cart_item_data.quantity }}</p> 
                <button class="btn catalog-cart-item__quantity-decrement" @click="decrementItem">-</button>
            </div>
        </div>
        <button class="btn" @click="deleteFromCart">Delete</button>
    </div>
</template>

<script>
    export default {
        name: 'CatalogCartItem',
        props: {
            cart_item_data: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        methods: {
            deleteFromCart(){
                this.$emit('deleteFromCart')
            },
            decrementItem() {
                this.$emit('decrementItem')
            },
            incrementItem() {
                this.$emit('incrementItem')
            }
            
        }
    }
</script>

<style lang="scss" scoped>
    .catalog-cart-item{
        display: grid;
        grid-template-columns: 180px 2.5fr 1.5fr auto;
        align-items: center;
        gap: 16px;
        padding: $padding*2;
        margin-bottom: $margin*2;
        box-shadow: 0 0 8px 0 $color-shadow;
        &__wrap{
            width: 180px;
            width: 100%;
            overflow: hidden;
        }
        &__image{
            height: 100%;
            width: 100%;
            object-fit: cover;
            object-position: center;
        }
        &__quantity{
            text-align: center;
        }
    }
    .catalog-cart-item__quantity{
        &__wrap{
            display: flex;
            align-items: center;
            justify-content: center;
        }
        &__info{
            margin: 0;
            padding: 8px 0;
        }
        &__number{
            font-size: 18px;
            font-weight: 500;
            padding: 0 8px;
        }
    }
    
</style>