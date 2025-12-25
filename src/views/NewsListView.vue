<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

import NewsCard from '@/components/news/NewsCard.vue';
import { useNewsStore } from '@/stores/news';

const newsStore = useNewsStore();
const { items, status, error } = storeToRefs(newsStore);

onMounted(() => {
  newsStore.fetchNews();
});
</script>

<template>
  <section>
    <h1 class="news-header">
      Last news
    </h1>

    <div v-if="status === 'loading'">
      Loading news…
    </div>
    <div v-else-if="status === 'error'">
      Failed to load news: {{ error }}
      <button @click="newsStore.fetchNews({ force: true })">
        Try again
      </button>
    </div>
    <div v-else-if="items.length === 0">
      No news yet.
    </div>
    <div
      v-else
      class="news-grid"
    >
      <NewsCard
        v-for="item in items"
        :key="item.id"
        :item="item"
      />
    </div>
  </section>
</template>

<style scoped>
.news-header {
  margin-bottom: 16px;
  font-size: 22px;
  font-weight: 700;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

@media (max-width: 960px) {
  .news-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .news-grid {
    grid-template-columns: 1fr;
  }
}
</style>
