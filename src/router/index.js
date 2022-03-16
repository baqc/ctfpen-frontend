import {createRouter, createWebHistory} from 'vue-router'
import NotFoundView from "@/views/NotFoundView.vue";
const HomeView = () => import ('@/views/HomeView.vue');
const KnowLedgeView = () => import ('@/views/KnowLedgeView.vue');
const AccountView = () => import ('@/views/AccountView.vue');
import DefaultLayout from "@/layouts/DefaultLayout.vue";

export const loadingBarApiRef = {}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
          meta: {
            title: '主页',
            auth: false
          }
        },
        {
          path: 'knowledge',
          name: 'knowledge',
          component: KnowLedgeView,
          meta: {
            title: '资料库',
            auth: false
          }
        },
        {
          path: 'account',
          name: 'account',
          component: AccountView,
          meta: {
            title: '用户中心',
            auth: true
          }
        },
      ]
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
  document.title = to.meta.title + " | CTFPen";
  if (loadingBarApiRef.value) {
    loadingBarApiRef.value.start()
  }
  next();
})

export default router
