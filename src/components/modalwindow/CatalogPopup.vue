<template>
    <div class="catalog-popup__wrapper" ref="popup_wrapper">
        <div class="catalog-popup">
            <div class="catalog-popup__header">
                <span class="catalog-popup__title">{{ popupTitle }}</span>
                <span>
                    <i class="material-icons catalog-popup__icon"
                    @click="closePopup"   
                    >close</i>
                </span>
            </div>
            <div class="catalog-popup__content">
                <slot></slot>
            </div>
            <div class="catalog-popup__footer">
                <button class="btn catalog-popup__close"
                    @click="closePopup"
                    >Close</button>
                <div class="catalog-popup__cart-link">
                    <router-link :to="{ name: 'cart' }">
                        <p class="catalog-popup__go-cart">Cart&#8599;</p>
                    </router-link>
                </div>      
                <button class="btn"
                    @click="rightBtnAction"
                    >
                {{ rightButtonPopup }}</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CatalogPopup',
        props: {
            rightButtonPopup: {
                type: String,
                default: 'ok'
            },
            popupTitle: {
                type: String,
                default: 'Popup name'
            }
        },
        methods: {
            closePopup() {
                this.$emit('closePopup')
            },
            rightBtnAction() {
                this.$emit('rightBtnAction')
            }
        },
        mounted() {
            const c = this;
            document.addEventListener('click', function(item){
                if(item.target === c.$refs['popup_wrapper']) {
                    c.closePopup()
                }
            })
        }
    }
</script>

<style lang="scss" scoped>
.catalog-popup{
    position: fixed;
    padding: $padding*2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 500px;
    width: 100%;
    box-shadow: 0 0 $padding*2 0 $color-shadow;
    z-index: 500;
    background-color: $color-light;
    &__header, &__footer{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &__title{
        font-family: $font-main;
        font-size: $font-text;
        color: $main-color;
    }
    &__wrapper{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: $color-popup;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 100;
        width: 100%;
        height: 100%;
        overflow: auto;
    }
    &__content{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &__icon{
        cursor: pointer;
        &:hover{
            opacity: 0.8;
        }
    }
    &__close.btn{
        background-color: $color-btn;
    }
    &__go-cart {
        font-family: $font-main;
        font-size: $font-text;
        font-weight: 700;
        &:hover{
            color: $main-color;
            text-decoration: underline;
        }
    }
}
</style>