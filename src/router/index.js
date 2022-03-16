import {createRouter, createWebHistory} from 'vue-router'
import NotFoundView from "@/views/NotFoundView.vue";
const HomeView = () => import ('@/views/HomeView.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: '主页',
        auth: false
      }
    },
    {
      path: '/:pathMatch(.*)',
      component: NotFoundView,
      meta: {
        title: '页面无法找到',
        auth: false
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
})

export default router
