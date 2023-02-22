<script setup lang="ts">
  const props = defineProps<{
    items: {
      name: string
      route: string
    }[]
    activeIndex: number
  }>()
</script>

<template>
  <nav>
    <ul class="flex justify-between">
      <li
        v-for="(item, index) in props.items"
        :key="item.name"
        class="border-r last:border-0 border-black border-solid w-full text-center"
        :class="`text-gray-${index !== activeIndex ? 400 : 900}`"
      >
        <router-link :to="item.route">
          {{ item.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>
