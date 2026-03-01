<script setup lang="ts">
</script>

<template>
  <v-app class="app-layout">
    <v-main class="app-main">
      <RouterView />
    </v-main>
  </v-app>
</template>

<style scoped>
.app-layout {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: radial-gradient(circle at top, #1e293b 0, #020617 55%, #020617 100%);
  color: #e5e7eb;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Inter', sans-serif;
}

.app-main {
  flex: 1;
  width: 100%;
  padding-top: 0;
  padding-bottom: 0;
}

/* keep the rest for now if you want to reuse later */

.app-bar {
  backdrop-filter: blur(18px);
  background-color: rgba(15, 23, 42, 0.92) !important;
  border-bottom: 1px solid rgba(148, 163, 184, 0.25);
}

.app-footer {
  width: 100%;
  background-color: rgba(15, 23, 42, 0.98);
  border-top: 1px solid rgba(148, 163, 184, 0.25);
}

.app-title {
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.03em;
}

.app-subtitle {
  font-size: 0.78rem;
  color: #9ca3af;
}

.logo-text {
  font-weight: 700;
  font-size: 0.9rem;
}

.nav-link {
  color: #e5e7eb;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  opacity: 0.8;
  padding: 0.35rem 0.75rem;
  border-radius: 9999px;
  transition: all 0.18s ease-out;
}

.nav-link:hover,
.router-link-active.nav-link {
  background: rgba(56, 189, 248, 0.16);
  color: #f9fafb;
  opacity: 1;
}

.footer-text {
  font-size: 0.78rem;
  color: #9ca3af;
}
</style>
