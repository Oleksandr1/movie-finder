<template>
  <header class="bg-gray-500 p-4 text-white">
    <div class="container mx-auto flex flex-col sm:flex-row justify-between">
      <h1 class="text-2xl font-semibold">MovieFinder</h1>
      <div class="flex">
        <mf-search />

      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import { ElLoading } from 'element-plus'
import MfSearch from "~/components/general/MfSearch.vue";

</script>
