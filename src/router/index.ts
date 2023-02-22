import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import ChannelsPage from '@/views/ChannelsPage.vue'
import VideosPage from '@/views/VideosPage.vue'
import HistoryPage from '@/views/HistoryPage.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/channels',
    name: 'ChannelsPage',
    component: ChannelsPage,
  },
  {
    path: '/videos',
    name: 'VideosPage',
    component: VideosPage,
  },
  {
    path: '/',
    name: 'history',
    component: HistoryPage,
  },
  {
    path: '/:pathMatch(.*)',
    name: 'NotFound',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
