import { defineStore } from 'pinia';

import type { NewsItem } from '@/types/news';

type Status = 'idle' | 'loading' | 'success' | 'error';

interface NewsState {
  items: NewsItem[];
  status: Status;
  error: string | null;
}

export const useNewsStore = defineStore('news', {
  state: (): NewsState => ({
    items: [],
    status: 'idle',
    error: null,
  }),

  getters: {
    getById: (state) => {
      return (id: number) => state.items.find((item) => item.id === id);
    },
  },

  actions: {
    async fetchNews(options?: { force?: boolean }) {
      const force = options?.force ?? false;

      if (this.status === 'loading') {return;}
      if (!force && this.items.length) {return;}

      this.status = 'loading';
      this.error = null;

      try {
        // simulate async call
        const response = await fetch('/data/news.json');

        if (!response.ok) {throw new Error('Failed to load news');}

        const data = (await response.json()) as NewsItem[];

        // Optional: sort by date desc
        this.items = data.sort(
          (a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt),
        );

        this.status = 'success';
      } catch (err: unknown) {
        this.status = 'error';
        if (err instanceof Error) {
          this.error = err.message;
        } else {
          this.error = 'Unknown error';
        }
      }
    },
  },
});
