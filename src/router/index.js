import { createRouter, createWebHistory } from 'vue-router';

// Async loading of Views
const Home = () => import('@/views/HomePage.vue');
const YesNoPage = () => import('@/views/YesNoPage.vue');
const About = () => import('@/views/AboutPage.vue');
const NotFound = () => import('@/views/NotFound.vue');
const Suspense = () => import('@/views/SuspensePage.vue');
const MonstersPage = () => import('@/views/monsters/MonstersListPage.vue');
const MonsterPage = () => import('@/views/monsters/MonsterDetailPage.vue');
const MonsterStats = () => import('@/components/monsters/MonsterStats.vue');
const MonsterInfo = () => import('@/components/monsters/MonsterInfo.vue');

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/yesno',
    name: 'yesno',
    component: YesNoPage,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/suspense-example',
    name: 'suspense',
    component: Suspense,
  },
  {
    path: '/monsters',
    name: 'monsters',
    component: MonstersPage,
  },
  {
    path: '/monsters/:id',
    component: MonsterPage,
    props: true,
    children: [
      { path: '', name: 'monster-info', component: MonsterInfo },
      { path: 'stats', name: 'monster-stats', component: MonsterStats },
    ],
  },
  { path: '/:pathMatch(.*)*', name: 'notFound', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
