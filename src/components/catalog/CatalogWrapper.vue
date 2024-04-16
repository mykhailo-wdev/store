<template>
    <div class="catalog-wrapper">
        <router-view></router-view>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
    export default {
        name: 'CatalogWrapper',
        props: {

        },
        data() {
            return {
                
            }
        },
        methods: {},
        watch: {},
        computed: {
            ...mapGetters(['CART'])
        }
    }
</script>

<style lang="scss" scoped>
    .catalog-wrapper {
        max-width: 900px;
        margin: 0 auto;
    }
</style>