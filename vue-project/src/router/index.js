import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import AboutPage from '@/components/AboutPage.vue';
import LoginPage from '@/components/LoginPage.vue';
import DashboardPage from '@/components/Dashboard.vue';
import UserPage from '@/components/UserPage.vue';
import Transaction from '@/components/Transaction.vue';

const routes = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/about', name: 'About', component: AboutPage , meta: { requiresAuth: true }, },
    { path: '/login', name: 'Login', component: LoginPage },
    { path: '/dashboard', name: 'Dashboard', component: DashboardPage, meta: { requiresAuth: true }, },
    { path: '/users', name: 'Users', component: UserPage , meta: { requiresAuth: true }, },
    { path: '/transaction', name: 'Transaction', component: Transaction , meta: { requiresAuth: true }, },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (to.meta.requiresAuth && !isAuthenticated) {
      next('/login'); 
    } else {
      next(); 
    }
  });

export default router;