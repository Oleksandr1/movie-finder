<template>
    <el-button class="m-3" type="info" :icon="ArrowLeft" circle @click="backToHome" />
</template>
<script setup lang="ts">
import {ArrowLeft} from "@element-plus/icons-vue";

const backToHome = async () => {
  console.log('back to home')
  await navigateTo('/')
}
</script>
