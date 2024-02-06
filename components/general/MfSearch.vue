<template>
  <el-input
      v-model.trim="search"
      class="w-50 m-2"
      size="large"
      placeholder="search movie"
  />
</template>
<script setup lang="ts">
import { ref } from 'vue';
import {useMovieStore} from "~/stores/storeMovie";
import { watchDebounced } from '@vueuse/core'

const search = ref('');
const {searchMovies} = useMovieStore()

watchDebounced(search, async(newValue) => {
  await searchMovies(newValue)
}, { debounce: 1000, maxWait: 5000 })


watch(search, async (newQuestion, oldQuestion)=>{
  console.log('search', newQuestion);

});

</script>
