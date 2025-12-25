<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { computed, onMounted } from 'vue';

import { useNewsStore } from '@/stores/news';
import { formatDate } from '@/utils/date';

const props = defineProps<{ id: number }>();

const newsStore = useNewsStore();
const { items, status, error } = storeToRefs(newsStore);

onMounted(async () => {
  if (!items.value.length && status.value === 'idle') {
    await newsStore.fetchNews();
  }
});

const newsItem = computed(() => newsStore.getById(props.id));

const formattedDate = computed(() =>
  newsItem.value ? formatDate(newsItem.value.publishedAt) : '',
);

</script>

<template>
  <section v-if="status === 'loading'">
    <p>Loading news…</p>
  </section>

  <section v-else-if="status === 'error'">
    <p>Failed to load news: {{ error }}</p>
    <button @click="newsStore.fetchNews({ force: true })">
      Try again
    </button>
  </section>

  <section v-else-if="newsItem">
    <nav
      class="breadcrumbs"
      aria-label="Breadcrumb"
    >
      <RouterLink :to="{ name: 'news-list' }">
        Last news
      </RouterLink>
      <span> / News details</span>
    </nav>

    <div>
      <img
        :src="newsItem.imageUrl"
        :alt="newsItem.title"
      >
    </div>

    <h1 class="news-details__title">
      {{ newsItem.title }}
    </h1>

    <p class="news-details__meta">
      {{ formattedDate }} | written by {{ newsItem.author }}
    </p>

    <div class="news-details__content">
      <p
        v-for="(paragraph, index) in newsItem.content.split('\n\n')"
        :key="index"
      >
        {{ paragraph }}
      </p>
    </div>
  </section>

  <section v-else>
    <p>News not found.</p>
    <RouterLink :to="{ name: 'news-list' }">
      Back to list
    </RouterLink>
  </section>
</template>

<style scoped>
.breadcrumbs {
  margin-bottom: 12px;
  font-size: 12px;
  color: var(--gray-200);
}

.breadcrumbs a {
  color: var(--purple);
}

.news-details__title {
  margin: 16px 0 8px;
  font-size: 22px;
  font-weight: 700;
}

.news-details__meta {
  margin-bottom: 16px;
  font-size: 12px;
  color: var(--gray-200);
}

.news-details__content {
  max-width: 800px;
  font-size: 14px;
  line-height: 1.6;
}

.news-details__content p + p {
  margin-top: 12px;
}
</style>
