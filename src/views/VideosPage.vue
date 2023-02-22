<script setup lang="ts">
  import ProjectLayout from '@/components/project/layout/ProjectLayout.vue'
  import { useVideosStore } from '@/store/videos'

  const store = useVideosStore()

  store.fetchPopularVideos()
</script>

<template>
  <ProjectLayout>
    <div>a</div>
  </ProjectLayout>
</template>
