<script setup lang="ts">
import TodoItem from './TodoItem.vue';
import type { Todo } from './type';


defineProps<{
    todos : Todo[]
}>();

const emit = defineEmits<{
    'toggle-todo':[id:number],
    'delete-todo':[id:number],
}>();

const handleToggle = (id:number) => {
    emit('toggle-todo', id);
}

const handleDelete = (id:number) => {
    emit('delete-todo', id);
}

</script>

<template>
    <ul v-if="todos.length > 0" class="todo-list">
        <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" @delete="handleDelete" @toggle="handleToggle"/>
    </ul>
    <div v-else class="empty-state"> 
        <p>할 일이 없습니다.</p>
    </div>
</template>

<style scoped>
.todo-list {
  border: 1px solid #ddd;
  list-style: none;
}

.empty-state {
  padding: 40px;
  color: #888;
}

</style>