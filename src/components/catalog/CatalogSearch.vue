<template>
    <form class="catalog-search">
        <i class="catalog-search__icon material-icons"
            @click="$event => searchByName(searchQuery)"
        >search</i>
        <input 
            name="query" 
            type="text"
            placeholder="Search..."
            class="catalog-search__input"
            v-model="searchQuery"
            @keypress.enter.prevent="searchByName(searchQuery)"
        >
        <i class="catalog-search__clear material-icons"
            @click="clearSearch"
            >clear</i>
    </form>
</template>

<script>
import { mapActions } from 'vuex'
    export default {
        name: 'CatalogSearch',
        data() {
            return {
                searchQuery: ''
            }
        },
        methods: {
            ...mapActions(['GET_SEARCH_QUERY']),
            searchByName(value) {
                this.GET_SEARCH_QUERY(value)
            },
            clearSearch() {
                this.searchQuery = ''
                this.GET_SEARCH_QUERY()
            }
        }
    }
</script>

<style lang="scss" scoped>
.catalog-search {
  position: relative;
  &__icon,
  &__clear {
    position: absolute;
    color: $main-color;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }
  &__icon {
    top: 3px;
    left: 5px;
    border-right: 1px solid $color-border;
  }
  &__clear {
    top: 3px;
    right: 25px;
  }
  &__input {
    border: 1px solid $color-border;
    margin-right: 24px;
    padding: 6px 0 6px 35px;
    width: 150px;
    &:focus::-webkit-input-placeholder {
      color: transparent;
    }

    &:focus::-moz-placeholder {
      color: transparent;
    }

    &:focus:-moz-placeholder {
      color: transparent;
    }

    &:focus:-ms-input-placeholder {
      color: transparent;
    }
  }
}
</style>