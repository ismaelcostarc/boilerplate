<script setup lang="ts">
  const emit = defineEmits(['click'])
  const props = defineProps<{
    type?: string
  }>()

  const tailwindClasses = `
    ${
      props.type === 'bg-white'
        ? 'border-2 border-solid border-black'
        : 'text-white'
    }
    ${props.type || 'bg-black'}
  `

  const updateValue = () => emit('click')
</script>

<template>
  <div>
    <button
      :class="tailwindClasses"
      class="h-full w-full min-h-[2rem] min-w-[2rem] px-2 rounded-md hover:opacity-80"
      @click="updateValue"
    >
      <slot></slot>
    </button>
  </div>
</template>
