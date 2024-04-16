<template>
  <div class="catalog">
    <div class="catalog__link-wrap">
        <router-link :to="{ name: 'cart' }">
            <div class="catalog__link">Cart: {{ CART.length }}</div>
        </router-link>
    </div>
    <h1 class="catalog__title">Catalog</h1>
    <catalog-notification :messages="messages"></catalog-notification>
    <div class="catalog__filters">
      <catalog-selected
        :options="categories"
        @select="sortByCategories"
        :selected="selected"
      ></catalog-selected>
      <catalog-search></catalog-search>
    </div>
    <div class="catalog__list">
      <catalog-item
        v-for="product in filteredProducts"
        :key="product.article"
        :product_data="product"
        @addToCart="addToCart"
      ></catalog-item>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CatalogItem from "./CatalogItem.vue";
import CatalogSelected from "./CatalogSelected.vue";
import CatalogNotification from "../notifications/CatalogNotification.vue";
import CatalogSearch from "./CatalogSearch.vue";
export default {
  name: "CatalogMain",
  data() {
    return {
      categories: [
        { name: "All", value: "All" },
        { name: "Male", value: "M" },
        { name: "Female", value: "F" },
      ],
      sortedProducts: [],
      selected: "All",
      messages: [],
    };
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART", "SEARCH_QUERY"]),
    filteredProducts() {
      if (this.sortedProducts.length > 0) {
        return this.sortedProducts;
      } else if (this.PRODUCTS && this.PRODUCTS.length > 0) {
        return this.PRODUCTS;
      } else {
        return [];
      }
    },
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),
    addToCart(el) {
      this.ADD_TO_CART(el).then(() => {
        let timeStamp = Date.now().toLocaleString();
        this.messages.unshift({
          name: "The product has been added to the cart",
          id: timeStamp,
        });
      });
    },
    sortByCategories(category) {
      this.sortedProducts = this.PRODUCTS.filter(
        (item) => item.category === category.name
      );
      this.selected = category.name;
    },
    filteredByName(value) {
      this.sortedProducts = [...this.PRODUCTS];
      this.selected = "All";
      if (value) {
        this.sortedProducts = this.sortedProducts.filter(function (item) {
          return item.name.toLowerCase().includes(value.toLowerCase());
        });
      } else {
        this.sortedProducts = this.PRODUCTS;
      }
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API().catch((error) => {
      console.error("Error fetching products:", error);
    });
  },
  watch: {
    SEARCH_QUERY() {
      this.filteredByName(this.SEARCH_QUERY);
    },
  },
  components: {
    CatalogItem,
    CatalogSelected,
    CatalogNotification,
    CatalogSearch,
  },
};
</script>

<style lang="scss" scoped>
.catalog {
  padding-top: 24px;
  &__title {
    font-family: $font-main;
    font-size: $font-h1;
    color: $main-color;
    text-align: center;
    margin-bottom: $margin*4;
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
    margin-top: $margin*3;
  }
  &__link {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: $padding * 2;
    border: 1px solid #e8e8e8;
    cursor: pointer;
  }
  &__filters {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }
}
.catalog__link-wrap{
    display: flex;
    justify-content: flex-end;
}
.catalog__link {
  position: static;
  display: inline-flex;
  font-size: $font-btn;
  color: $main-color;
  font-family: $font-main;
  &:hover,
  &:active,
  &:visited {
    color: $color-hover;
  }
  &:hover{
    font-weight: 500;
  }
}
</style>
