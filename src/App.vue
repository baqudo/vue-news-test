<script lang="ts">
import FooterBar from '@/components/FooterBar.vue';
import HeaderBar from '@/components/HeaderBar.vue';
export default {
  components: { HeaderBar, FooterBar },
};
</script>

<template>
  <div class="app-wrapper">
    <HeaderBar />

    <main class="app-main">
      <RouterView />
    </main>

    <FooterBar />
  </div>
</template>

<style scoped>
.app-wrapper {
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 16px 24px 32px;
  background: var(--white);
}

.app-main {
  flex: 1;
  margin: 24px 0;
}

@media (max-width: 640px) {
  .app-wrapper {
    padding: 12px 12px 24px;
  }
}
</style>
