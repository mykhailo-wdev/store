<template>
  <div id="app">
    <catalog-wrapper></catalog-wrapper>
  </div>
</template>

<script>
import CatalogWrapper from './components/catalog/CatalogWrapper.vue'
export default {
  name: 'App',
  components: { CatalogWrapper }
}
</script>

<style lang="scss">
#app{
  text-align: center;
}
</style>
