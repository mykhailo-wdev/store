<template>
  <div class="catalog-item">
    <catalog-popup
      v-if="isPopupVisible"
      @closePopup="closePopup"
      rightButtonPopup="Add to cart"
      :popupTitle="product_data.name"
      @rightBtnAction="addToCart"
    >
      <div class="catalog-item__popup">
        <div class="catalog-item__image-wrap">
          <img
            :src="product_data.image"
            :alt="product_data.name"
            class="catalog-item__image"
          />
        </div>
        <div class="catalog-item__content">
          <p class="catalog-item__name">{{ product_data.name }}</p>
          <p class="catalog-item__price">{{ product_data.price }} грн.</p>
          <p class="catalog-item__category">{{ product_data.category }}</p>
        </div>
      </div>
    </catalog-popup>
    <div class="catalog-item__image-wrap">
      <img
        :src="product_data.image"
        :alt="product_data.name"
        class="catalog-item__image"
      />
    </div>
    <p class="catalog-item__name">{{ product_data.name }}</p>
    <p class="catalog-item__price">{{ product_data.price }} грн.</p>
    <div class="catalog-item__btns">
      <button class="btn catalog-item__show-info" @click="showPopup">
        Show info
      </button>
      <button class="btn catalog-item__btn" @click="addToCart">
        Add to cart
      </button>
    </div>
  </div>
</template>

<script>
import CatalogPopup from "../modalwindow/CatalogPopup.vue";
export default {
  name: "CatalogItem",
  props: {
    product_data: {
      type: Object,
      default: {},
    },
    imageWrapStyles: Object,
    contentStyles: Object,
    popupStyles: Object,
  },
  data() {
    return {
      isPopupVisible: false,
    };
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.product_data);
    },
    showPopup() {
      this.isPopupVisible = true;
    },
    closePopup() {
      this.isPopupVisible = false;
    },
  },
  components: { CatalogPopup },
};
</script>

<style lang="scss" scoped>
.catalog-item {
  box-shadow: 0 0 8px 0 $color-shadow;
  padding: $padding * 2;
  margin: 0 auto $margin * 2;
  display: grid;
  grid-template-rows: 230px 1fr auto auto auto;
  @media (max-width: 470px) {
    padding: $padding;
  }
  &__image-wrap {
    width: 180px;
    overflow: hidden;
    margin: 0 auto;
    display: flex;
    flex-shrink: 0;
  }
  &__image {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
  }
  &__name {
    text-align: center;
    margin-top: $margin * 2;
    font-family: $font-main;
    font-size: $font-sm;
    color: $main-color;
  }
  &__price {
    text-align: center;
    margin-top: $margin * 2;
    font-family: $font-main;
    font-size: $font-sm;
    color: $main-color;
    font-weight: 500;
  }
  &__category {
    font-family: $font-main;
    font-size: $font-text;
    color: $main-color;
    text-align: center;
    margin-top: $margin * 2;
  }
  &__show-info.btn {
    background-color: $main-color;
  }
  &__btns {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    margin: 16px 18px 0;
    gap: 8px;
  }
  &__popup {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 8px 0;
  }
  &__content {
    padding-left: 8px;
  }
  .catalog-item__popup {
    @media (max-width: 568px) {
      flex-direction: column;
    }
  }
}
</style>
