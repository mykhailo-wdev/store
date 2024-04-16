<template>
  <div class="cart__link-wrap">
    <router-link :to="{ name: 'catalog' }">
        <div class="cart__link">Return to Catalog</div>
    </router-link>
  </div>
  <div class="catalog-cart">
    <h1 class="catalog-cart__title">CART</h1>
    <p class="catalog-cart__subtitle" v-if="!CART.length">
      Cart is empty. Please add goods to Cart
    </p>
    <cart-item-wrap v-if="CART.length" :cart_data="CART"></cart-item-wrap>
  </div>
</template>

<script>
import CartItemWrap from "./CartItemWrap.vue";
import { mapGetters } from "vuex";
export default {
  name: "CatalogCart",

  computed: {
    ...mapGetters(["CART"]),
  },
  components: { CartItemWrap },
};
</script>

<style lang="scss" scoped>
.cart__link-wrap {
  padding-top: $padding * 3;
  display: flex;
  justify-content: flex-end;
}
.catalog-cart {
  &__title {
    font-family: $font-main;
    font-size: $font-h2;
    text-align: center;
    color: $main-color;
  }
  &__subtitle {
    font-family: $font-main;
    font-size: $font-sm;
    text-align: center;
    color: $main-color;
    margin-top: $margin * 2;
  }
}
.cart__link {
  cursor: pointer;
  padding: $padding * 2;
  border: 1px solid #e8e8e8;
  text-decoration: none;
  display: inline-flex;
  font-size: $font-btn;
  color: $main-color;
  font-family: $font-main;
  &:hover,
  &:active,
  &:visited {
    color: $color-hover;
  }
  &:hover {
    font-weight: 500;
  }
}
</style>
