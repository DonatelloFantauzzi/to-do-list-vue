<template>
  <li class="flex justify-between items-center bg-gray-100 p-3 rounded-lg mt-2">
    <div class="flex items-center gap-2">
      <input type="checkbox" class="cursor-pointer" v-model="isDone" @change="handleDone" />
      <input
        type="text"
        v-if="isEditing"
        v-model="editedText"
        class="border px-2 py-1 rounded"
        @blur="saveEdit"
        @keydown="handleEnterEdit"
      />
      <span :class="[isDone ? 'line-through text-gray-500' : '']" v-else>
        {{ todo.text }}
      </span>
    </div>

    <div class="flex space-x-2 gap-2">
      <button v-if="!isEditing" class="text-yellow-500 cursor-pointer" @click="isEditing = true">
        ✏️
      </button>
      <button
        class="text-red-500 hover:text-red-700 cursor-pointer"
        @click="emit('delete-task', todo.id)"
      >
        ❌
      </button>
    </div>
  </li>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue'
import type { ToDo } from '@/types'

const props = defineProps<{ todo: ToDo }>()
const isEditing = ref<boolean>(false)
const editedText = ref<string>(props.todo.text)
const isDone = ref<boolean>(props.todo.done)

const saveEdit = () => {
  if (editedText.value.trim() !== '') {
    emit('edit-task', props.todo.id, editedText.value)
    isEditing.value = false
  }
}

const handleDone = () => {
  emit('done-task', props.todo.id)
}

const handleEnterEdit = (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    saveEdit()
  }
}

const emit = defineEmits<{
  (event: 'delete-task', id: number): void
  (event: 'edit-task', id: number, text: string): void
  (event: 'done-task', id: number): void
}>()
</script>
