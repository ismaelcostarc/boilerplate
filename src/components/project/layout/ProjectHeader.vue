<script setup lang="ts">
  import BaseInput from '@/components/base/input/BaseInput.vue'
  import BaseNav from '@/components/base/navigation/BaseNav.vue'
  import BaseButton from '@/components/base/button/BaseButton.vue'
  import { ref, computed } from 'vue'
  import { useRoute } from 'vue-router'

  const customInput = ref('')

  const items = [
    {
      name: 'Home',
      route: '/',
    },
    {
      name: 'Videos',
      route: '/videos',
    },
    {
      name: 'Channels',
      route: '/channels',
    },
  ]

  const route = useRoute()

  const path = computed(() =>
    items.findIndex((elem) => elem.route === route.path)
  )
</script>

<template>
  <div
    class="flex items-center justify-between border-b-2 border-black border-solid"
  >
    <div class="min-h-40">
      <img src="../../../assets/youtube-logo-2020.svg" class="h-40" />
    </div>
    <div class="flex flex-col">
      <div class="flex gap-2">
        <BaseInput v-model="customInput" placeholder="Search" />

        <BaseButton type="bg-red-500" @click="() => {}">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </BaseButton>
      </div>
      <div class="py-4">
        <BaseNav :items="items" :active-index="path" />
      </div>
    </div>
    <BaseButton type="bg-white">
      <router-link to="/history">History</router-link>
    </BaseButton>
  </div>
</template>
