import { createRouter, createWebHistory } from "vue-router"; 
import CatalogMain from '@/components/catalog/CatalogMain.vue'
import CatalogCart from '@/components/cart/CatalogCart.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
       {
        path: '/',
        name: 'catalog',
        component: CatalogMain
       },
       {
        path: '/cart',
        name: 'cart',
        component: CatalogCart,
        props: true
       }
    ]

})

export default router
