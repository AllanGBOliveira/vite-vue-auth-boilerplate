import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';

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


router.beforeEach(async (to) => {
  const userStore = useUserStore();
  const { token } = storeToRefs(userStore)
  const { setToken } = userStore
  setToken();


  if (!token.value && to.name !== 'login' && to.name !== 'register') {
    return { name: 'login' }
  }
})

export default router
