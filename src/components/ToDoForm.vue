<template>
  <div class="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-md mt-4">
    <input
      type="text"
      placeholder="Aggiungi un nuovo task..."
      class="p-2 w-full rounded-l-lg border border-gray-300"
      v-model="task"
      @keydown="handleEnter"
    />
    <button
      class="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
      @click="addNewTask"
    >
      Aggiungi
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'

const task = ref<string>('')

const addNewTask = () => {
  if (task.value.trim() !== '') {
    emit('addtask', task.value)
    task.value = ''
  }
}

const handleEnter = (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    addNewTask()
  }
}

const emit = defineEmits<{ (event: 'addtask', task: string): void }>()
</script>
