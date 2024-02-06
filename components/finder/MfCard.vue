<template>
  <el-card  :body-style="{ padding: '0px' }" @click="goToDetails">
    <div class="flex flex-col lg:flex-row lg:max-h-[470px] max-h-fit min-h-[470px] items-center bg-gray-300">
<mf-image-viewer :src="movie.Poster" :alt="movie.Title"></mf-image-viewer>
      <div class="ms-4 flex flex-col items-center">
        <div class="lg:text-xl text-lg font-bold">{{ movie.Title }}</div>
        <div class="text-sm">Year: {{ movie.Year }}</div>
      </div>
    </div>
  </el-card>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';
import MfImageViewer from "~/components/finder/MfImageViewer.vue";

const props = defineProps({
  movie: {
    type:Object as () => iMovie,
    required: true
  }
});
const goToDetails = async () => {
  console.log('go to details')
  await navigateTo(`/movie/${props.movie.imdbID}`)
}
</script>
