import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

import type { NewsItem } from '@/types/news';

type Status = 'idle' | 'loading' | 'success' | 'error';

const normalizeError = (err: unknown) =>
  err instanceof Error ? err.message : 'Unknown error';

export const useNewsStore = defineStore('news', () => {
  const items = ref<NewsItem[]>([]);
  const status = ref<Status>('idle');
  const error = ref<string | null>(null);

  const getById = computed(() => (id: number) =>
    items.value.find((item) => item.id === id),
  );

  const fetchNews = async (options?: { force?: boolean }) => {
    const force = options?.force ?? false;

    if (status.value === 'loading') {return;}
    if (!force && items.value.length) {return;}

    status.value = 'loading';
    error.value = null;

    try {
      // simulate async call
      const response = await fetch('/data/news.json');

      if (!response.ok) {throw new Error('Failed to load news');}

      const data = (await response.json()) as NewsItem[];

      // Optional: sort by date desc
      items.value = data.sort(
        (a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt),
      );

      status.value = 'success';
    } catch (err: unknown) {
      status.value = 'error';
      error.value = normalizeError(err);
    }
  };

  return {
    items,
    status,
    error,
    getById,
    fetchNews,
  };
});
