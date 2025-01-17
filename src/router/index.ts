import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/components/LoginView.vue';
import RegisterView from '@/components/RegisterView.vue';
import { useUserStore } from '@/stores/user';

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
  ],
});


router.beforeEach(async (to, from) => {
  const { token } = useUserStore();

  if (!token && to.name !== 'login' && to.name !== 'register') {
    return { name: 'login' }
  }
})

export default router
