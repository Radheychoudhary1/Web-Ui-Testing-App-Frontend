import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import TestView from '../views/TestView.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/test-ui', name: 'test-ui', component: TestView },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
