<template>
  <el-image :class="imageClass" :src="src" :alt="alt" fit="scale-down">
    <template #error>
      <el-skeleton-item :class="skeletonClass" variant="image" />
    </template>
  </el-image>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps({
  alt: {
    type: String,
    required: true,
  },
  src: {
    type: String,
    required: true,
  },
  maxH: {
    type: String,
    required: false,
    default: '450px',
  },
  minH: {
    type: String,
    required: false,
    default: '450px',
  },
  lgMaxH: {
    type: String,
    required: false,
    default: '350px',
  },
  w: {
    type: String,
    required: false,
    default: '300px',
  },
});
const imageClass = `w-[${props.w}] lg:max-h-[${props.lgMaxH}] max-h-[${props.maxH}]  mx-4 my-2 rounded-xl shrink-0`;
const skeletonClass = `w-[${props.w}] min-h-[${props.minH}] `;
</script>
