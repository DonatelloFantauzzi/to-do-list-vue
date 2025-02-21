<template>
  <li class="flex justify-between items-center bg-gray-100 p-3 rounded-lg mt-2 cursor-pointer">
    <span>
      {{ todo.text }}
    </span>
    <button class="text-red-500 hover:text-red-700">❌</button>
  </li>
</template>

<script setup lang="ts">
import type { ToDo } from '@/types'

const props = defineProps<{ todo: ToDo }>()
</script>
