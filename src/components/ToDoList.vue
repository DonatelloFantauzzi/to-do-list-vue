<template>
  <div class="max-w-xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
    <h2 class="text-2xl font-bold text-center">Lista delle attività</h2>
    <ul>
      <ToDoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ToDoItem from '@/components/ToDoItem.vue'
import type { ToDo } from '@/types'

const todos = ref<ToDo[]>([
  { id: 1, text: 'Learn Vue 3', done: true },
  { id: 2, text: 'Learn TypeScript', done: false },
  { id: 3, text: 'Learn Vite', done: false },
])
</script>
