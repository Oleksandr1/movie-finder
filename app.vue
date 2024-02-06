<template>
  <div v-loading.fullscreen.lock="isLoad">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
const movieStore = useMovieStore();
const { isLoad } = storeToRefs(movieStore);
</script>
