<script setup lang="ts">
import { computed } from 'vue';

import type { NewsItem } from '@/types/news';
import { formatDate } from '@/utils/date';

const props = defineProps<{
  item: NewsItem;
}>();

const formattedDate = computed(() => formatDate(props.item.publishedAt));
</script>

<template>
  <RouterLink
    class="news-card"
    :to="{ name: 'news-details', params: { id: item.id } }"
    :aria-label="`Open ${item.title}`"
  >
    <article>
      <div class="news-card__image">
        <img
          :src="item.imageUrl"
          :alt="item.title"
          loading="lazy"
        >
      </div>
      <div class="news-card__body">
        <h3 class="news-card__title">
          {{ item.title }}
        </h3>
        <p class="news-card__desc">
          {{ item.shortDescription }}
        </p>
        <p class="news-card__meta">
          {{ formattedDate }} | written by {{ item.author }}
        </p>
      </div>
    </article>
  </RouterLink>
</template>

<style scoped>
.news-card {
  display: block;
  height: 100%;
  overflow: hidden;
  background: var(--bg-page);
  border-radius: var(--border-radius-lg);
}

.news-card > article {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.news-card__image img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.news-card__body {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px 16px 16px;
}

.news-card__title {
  font-size: 16px;
  font-weight: 700;
  color: var(--purple);
}

.news-card__desc {
  font-size: 14px;
  color: var(--black);
}

.news-card__meta {
  font-size: 12px;
  color: var(--gray-200);
}
</style>
