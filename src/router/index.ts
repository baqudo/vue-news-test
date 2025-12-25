import { createRouter, createWebHistory } from 'vue-router';

import NewsDetailsView from '@/views/NewsDetailsView.vue';
import NewsListView from '@/views/NewsListView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'news-list',
      component: NewsListView,
    },
    {
      path: '/news/:id',
      name: 'news-details',
      component: NewsDetailsView,
      props: (route) => ({ id: Number(route.params.id) }),
    },
  ],
});

export default router;
