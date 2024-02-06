<template>
  <div class="mt-10">
    <mf-no-result v-if="movies.length === 0"></mf-no-result>

    <el-carousel class="bg-gray-200" :interval="4000" type="card" v-else-if="!isMobile" height="500px">
      <el-carousel-item v-for="item in movies" :key="item.imdbID"  >
        <mf-card :movie="item"></mf-card>
      </el-carousel-item>
    </el-carousel>

    <div v-for="item in movies" :key="item.imdbID" v-else>
      <mf-card class="mb-4" :movie="item"></mf-card>
    </div>
  </div>
</template>
<script setup lang="ts">
import MfCard from "~/components/finder/MfCard.vue";
import MfNoResult from "~/components/finder/MfNoResult.vue";

const movieStore  = useMovieStore()
const { movies }  = storeToRefs(movieStore)

const {isMobile } = useScreen()
// const  {movies} = useMovieStore()
</script>
