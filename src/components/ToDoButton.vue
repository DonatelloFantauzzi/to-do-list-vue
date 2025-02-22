<template>
  <button
    v-for="filter in filters"
    :key="filter.key"
    :class="[
      'px-4 py-2 rounded hover:cursor-pointer hover:underline',
      filterTask === filter.key ? filter.color : 'bg-gray-300',
    ]"
    @click="emit('update-filter-task', filter.key as FilterKey)"
  >
    {{ filter.text }}
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import type { FilterKey } from '@/types'

const props = defineProps<{ filterTask: FilterKey }>()

const filters = [
  {
    key: 'all',
    text: 'Tutti',
    color: 'bg-blue-500 text-white',
  },
  {
    key: 'completed',
    text: 'Completati',
    color: 'bg-green-500 text-white',
  },
  {
    key: 'todo',
    text: 'Da fare',
    color: 'bg-red-500 text-white',
  },
]

const emit = defineEmits<{
  (event: 'update-filter-task', key: 'all' | 'completed' | 'todo'): void
}>()
</script>
