<template>
  <div class="min-h-screen flex flex-col">
    <mf-header />
    <el-main class="bg-gray-200 min-h-full">
      <slot />
    </el-main>
    <mf-footer class="sticky top-[100vh]" />
  </div>
</template>
<script setup lang="ts">
import MfHeader from '~/components/general/MfHeader.vue';
import MfFooter from '~/components/general/MfFooter.vue';
</script>
