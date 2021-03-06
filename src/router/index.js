import {createRouter, createWebHistory} from 'vue-router'
import NotFoundView from "@/views/NotFoundView.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

const HomeView = () => import ('@/views/HomeView.vue');
const KnowledgeView = () => import ('@/views/KnowledgeView.vue');
const AccountView = () => import ('@/views/AccountView.vue');
// const ChallengesView = () => import('@/views/ChallengesView.vue');
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
          component: KnowledgeView,
          meta: {
            title: '资料库',
            auth: false
          }
        },
        // {
        //   path: 'challenges',
        //   name: 'challenges',
        //   component: ChallengesView,
        //   meta: {
        //     title: '挑战',
        //     auth: false
        //   }
        // },
        {
          path: 'account',
          name: 'account',
          component: AccountView,
          meta: {
            title: '用户中心',
            auth: true
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
    },
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
