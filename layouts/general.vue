<template>
  <div>
    <mf-header />
    <slot />
    <mf-footer />
  </div>
</template>
<script setup lang="ts">
import MfHeader from '~/components/general/MfHeader.vue';
import MfFooter from '~/components/general/MfFooter.vue';
</script>
