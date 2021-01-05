import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductDetail from './pages/ProductDetail.vue'
import Home from './pages/Home.vue'
import Brand from './pages/Brand.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', component: Home},
        {path: '/brand', component: Brand},
        {path: '/product-detail', component: ProductDetail}
    ]
})