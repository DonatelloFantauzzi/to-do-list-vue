<template>
  <div class="max-w-xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
    <h2 class="text-2xl font-bold text-center">Lista delle attività</h2>
    <ToDoForm @addtask="addNewTask" />
    <ul>
      <ToDoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @delete-task="deleteTask"
        @edit-task="editTask"
        @done-task="doneTask"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ToDo } from '@/types'
import ToDoItem from '@/components/ToDoItem.vue'
import ToDoForm from './ToDoForm.vue'

const todos = ref<ToDo[]>([
  { id: 1, text: 'Learn Vue 3', done: true },
  { id: 2, text: 'Learn TypeScript', done: false },
  { id: 3, text: 'Learn Vite', done: false },
])

const addNewTask = (text: string) => {
  todos.value.push({ id: Date.now(), text, done: false })
}

const deleteTask = (id: number) => {
  return (todos.value = todos.value.filter((todo) => todo.id !== id))
}

const editTask = (id: number, newText: string) => {
  const index = todos.value.findIndex((todo) => todo.id === id)
  return (todos.value[index].text = newText)
}

const doneTask = (id: number) => {
  const todo = todos.value.find((todo) => todo.id === id)
  if (todo) {
    todo.done = !todo.done
  }
}
</script>
