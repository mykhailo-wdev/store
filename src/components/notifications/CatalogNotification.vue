<template>
    <div class="catalog-notification">
        <TransitionGroup
            name="animate"
            class="catalog-notification__list"
            tag="div"
            >
            <div class="catalog-notification__content"
                v-for="message in messages" 
                :key="message.id"
                >
                <span>{{ message.name }}</span>
                <i class="material-icons">check_circle</i>
            </div>
        </TransitionGroup>
    </div>
</template>

<script>
    export default {
        name: 'CatalogNotovocation',
        props: {
            messages: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        methods: {
            hideNotification() {
                let vm = this
                if(!this.messages.length) {
                    setInterval(() => {
                        vm.messages.splice(vm.messages.length - 1, 1)
                    }, 2000);
                }
            }
        },
        mounted() {
            this.hideNotification()
        }
    }
</script>

<style lang="scss" scoped>
.catalog-notification{
        position: fixed;
        top: 80px;
        right: 16px;
        z-index: 10;
        &__content{
            padding: $padding*2;
            border-radius: 4px;
            color: $color-light;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: $margin*2;
            background-color: $color-special;
            max-width: 240px;
            text-align: left;
        }
        span{
            margin-right: 8px;
        }
        .animate {
            &-enter-from{
                transform: translateX(120px);
                opacity: 0;
            }
            &-enter-active{
                transition: all 0.6s ease;
            }
            &-leave-active{
                transition: transform 0.6s ease, opacity 0.6s, height 0.6s 0.2s;
            }
            &-leave-to{
                height: 0;
                transform: translateX(120px);
                opacity: 0;
            }
            &-move{
                transition: transform 0.6s ease;
            }
        }
    }
</style>