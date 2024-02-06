<template>
  <el-footer class="bg-gray-500 p-4 text-white flex justify-center items-center">
    @{{ year }} Movie Finder
  </el-footer>
</template>
<script setup lang="ts">
const year = new Date().getFullYear()
</script>
