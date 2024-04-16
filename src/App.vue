<template>
  <div id="app">
    <catalog-wrapper></catalog-wrapper>
  </div>
</template>

<script>
import CatalogWrapper from "./components/catalog/CatalogWrapper.vue";
export default {
  name: "App",
  components: { CatalogWrapper },
};
</script>

<style lang="scss">
body {
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: #fcf9f0;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #374a55;
    border-radius: 6px;
  }
}
</style>
