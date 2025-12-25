<script setup lang="ts"></script>

<template>
  <header class="app-header">
    <div class="app-logo">
      Test logo
    </div>

    <div class="user-info">
      <span>Ronnie Radke</span>
      <div class="user-avatar">
        <img
          src="https://i.pravatar.cc/64?img=12"
          alt="User avatar"
        >
      </div>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--gray-100);
}

.app-logo {
  font-size: 24px;
  font-weight: 600;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
}

.user-avatar {
  width: 32px;
  height: 32px;
  overflow: hidden;
  border-radius: 999px;
}
</style>
