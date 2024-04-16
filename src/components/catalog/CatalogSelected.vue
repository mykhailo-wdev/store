<template>
    <div class="catalog-select">
        <p class="catalog-select__title" 
            @click="areOptionsVisible = !areOptionsVisible"
            >{{ selected }}</p>
        <div class="catalog-select__options"
            v-if="areOptionsVisible">
            <p class="catalog-select__options-item" 
                v-for="option in options" 
                :key="option.value"
                @click="selectOptions(option)"
                >{{ option.name }}</p> 
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CatalogSelected',
        data () {
            return {
                areOptionsVisible: false
            }
        },
        props: {
            options: {
                type: Array,
                default() {
                    return []
                }
            },
            selected: {
                type: String,
                default: ''
            }
        },
        methods: {
            selectOptions(option) {
                this.$emit('select', option)
                this.areOptionsVisible = false
            },
            hideSelect() {
                this.areOptionsVisible = false
            }
        },
        mounted() {
            document.addEventListener('click', this.hideSelect.bind(this), true)
        },
        unmounted() {
            document.removeEventListener('click', this.hideSelect)
        }
    }
</script>

<style lang="scss" scoped>
.catalog-select{
    position: relative;
    width: 120px;
    cursor: pointer;
    margin-left: $margin*3;
    &__title{
        border: 1px solid $color-border;
    }
    &__options{
        border: 1px solid $color-border;
        position: absolute;
        top: 40px;
        right: 0;
        width: 100%;
        background-color: $color-light;
        text-align: left;
    }
    &__options-item{
        margin: 0;
        cursor: pointer;
        &:hover{
            background-color: $color-shadow;
        }
    }
}
</style>