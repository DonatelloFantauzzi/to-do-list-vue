<template>
  <div class="max-w-lg mx-auto mt-5 p-4 bg-white shadow-md rounded-lg">
    <h2 class="text-2xl font-bold text-center">Lista delle attività</h2>
    <ToDoForm @addtask="addNewTask" />
    <div class="flex justify-between mb-4 mt-4">
      <ToDoButton :filter-task="filter" @update-filter-task="updateFilterTask" />
    </div>
    <ul>
      <ToDoItem
        v-for="todo in filteredTaskList"
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
import { ref, computed, watch } from 'vue'
import type { ToDo, FilterKey } from '@/types'
import ToDoItem from '@/components/ToDoItem.vue'
import ToDoForm from './ToDoForm.vue'
import ToDoButton from '@/components/ToDoButton.vue'

const filteredTaskList = computed(() => {
  switch (filter.value) {
    case 'completed':
      return todos.value.filter((todo) => todo.done)
    case 'todo':
      return todos.value.filter((todo) => !todo.done)
    default:
      return todos.value
  }
})

const filter = ref<FilterKey>('all')

const updateFilterTask = (filterKey: FilterKey) => {
  filter.value = filterKey
}

const todos = ref<ToDo[]>(JSON.parse(localStorage.getItem('todos') ?? '[]'))

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

watch(
  todos,
  () => {
    localStorage.setItem('todos', JSON.stringify(todos.value))
  },
  { deep: true },
)
</script>
