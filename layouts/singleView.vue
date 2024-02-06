<template>
  <div class="min-h-screen flex flex-col">
    <mf-back-to-home-btn />
    <el-main class="bg-gray-200 min-h-full">
      <slot />
    </el-main>
    <mf-footer class="sticky top-[100vh]" />
  </div>
</template>
<script setup lang="ts">
import MfFooter from '~/components/general/MfFooter.vue';
import MfBackToHomeBtn from '~/components/movie/MfBackToHomeBtn.vue';
</script>
