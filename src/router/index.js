import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Tu Mascota',
    component: HomeView
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});

export default router
