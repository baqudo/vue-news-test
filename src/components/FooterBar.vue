<script setup lang="ts"></script>

<template>
  <footer class="app-footer">
    <div>Copyright 2025 Test. All rights reserved.</div>

    <div>
      <span>📧 </span>
      <a href="mailto:info@test.com">info@test.com</a>
      &nbsp;&nbsp;
      <span>📞 </span>
      <a href="tel:+380953908751">+380 95 390 87 51</a>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;
  padding-top: 16px;
  font-size: 12px;
  color: var(--gray-200);
  border-top: 1px solid var(--gray-100);
}

.app-footer a {
  color: var(--purple);
}
</style>
