<template>
  <el-card class="h-full">
    <template #header>
      <div class="flex">
        <span class="align-middle text-2xl font-bold">{{ movie?.Title }}({{ movie?.Year }})</span>
      </div>
    </template>
    <div class="flex flex-col lg:flex-row max-h-fit min-h-[470px] items-center">
      <mf-image-viewer :src="movie?.Poster" :alt="movie?.Title" w="50px" lg-max-h="60px" max-h="60px"></mf-image-viewer>
      <div class="ms-4 overflow-auto">
        <div class="lg:text-xl text-lg font-bold">{{ movie?.Title }}</div>
        <div class="text-wrap text-lg"><span class="font-bold">Year:</span> {{ movie?.Year }}</div>
        <div class="text-lg"><span class="font-bold">Director:</span> {{ movie?.Director }}</div>
        <div class="text-lg"><span class="font-bold">Genre:</span> {{ movie?.Genre }}</div>
        <div class="text-lg"><span class="font-bold">Actors:</span> {{ movie?.Actors }}</div>
        <div class="text-lg"><span class="font-bold">Language:</span> {{ movie?.Language }}</div>
        <div class="text-lg"><span class="font-bold">Time:</span> {{ movie?.Runtime }}</div>

        <div><span class="font-bold">Description:</span></div>
        <div class="text-lg text-wrap" v-html="movie?.Plot"></div>
      </div>
    </div>
  </el-card>
</template>
<script setup lang="ts">
import MfImageViewer from '~/components/finder/MfImageViewer.vue';

definePageMeta({
  layout: 'single-view',
});

const { id } = useRoute().params;

const movieStore = useMovieStore();
const movie = await movieStore.getMovieById(id as string);
</script>
