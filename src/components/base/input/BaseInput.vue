<script setup lang="ts">
  const props = defineProps<{
    placeholder?: string
    modelValue: string
  }>()

  const emit = defineEmits(['update:modelValue'])

  const updateValue = (event: Event) => {
    emit('update:modelValue', (event.target as HTMLInputElement).value)
  }
</script>

<template>
  <input
    type="text"
    class="border border-solid border-gray-400 p-2 rounded-md"
    :placeholder="props.placeholder"
    :value="props.modelValue"
    @input="updateValue"
  />
</template>
