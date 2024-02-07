<template>
  <el-input v-model.trim="search" class="w-50 m-2" size="large" placeholder="search movie" />
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { watchDebounced } from '@vueuse/core';
import { useMovieStore } from '~/stores/storeMovie';

const search = ref('');
const { searchMovies } = useMovieStore();

watchDebounced(
  search,
  async (newValue) => {
    await searchMovies(newValue);
  },
  { debounce: 1000, maxWait: 5000 },
);
</script>
