import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import CocktailView from '../views/CocktailView.vue'
import ErrorView from '../views/ErrorView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: () => {
      return { path: '/Cocktail/margarita'}
    },
  },
  {
    path: '/Cocktail/:name',
    name: 'Cocktail',
    component: CocktailView
  },
  { path: '/:pathMatch(.*)*', component: ErrorView }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
