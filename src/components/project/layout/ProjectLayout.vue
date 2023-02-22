<script setup lang="ts">
  import ProjectHeader from './ProjectHeader.vue'
  import BaseLayout from '@/components/base/layout/BaseLayout.vue'
</script>
<template>
  <BaseLayout>
    <template #header>
      <ProjectHeader />
    </template>
    <slot />
  </BaseLayout>
</template>
