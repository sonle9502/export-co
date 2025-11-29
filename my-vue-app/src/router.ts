import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Products from './pages/Products.vue'
import Contact from './pages/Contact.vue'
import ProductDetail from './pages/ProductDetail.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/products', name: 'Products', component: Products },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/product/:id', name: 'ProductDetail', component: ProductDetail, props: true},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
