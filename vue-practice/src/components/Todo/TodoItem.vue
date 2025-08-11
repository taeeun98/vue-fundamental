<script setup lang="ts">
import { useId } from 'vue';
import type { Todo } from './type';


const props = defineProps<{
    todo: Todo
}>();

// 리액트랑 똑같이 
const checkboxId = useId();

const emit = defineEmits<{
    toggle: [id:number],
    delete: [id:number]
}>();

const toggleTodo = () => {
    emit('toggle', props.todo.id);
}

const deleteTodo = () => {
    emit('delete', props.todo.id);
}

</script>

<template>
    <li class="todo-item">

        <input
        type="checkbox"
        class="todo-checkbox"
        :id="checkboxId"
        :checked="todo.completed"
        @change="toggleTodo"
        />

        <label :for="checkboxId">
            <span class="todo-text">{{ todo.text }}</span>
        </label>

        <button type="button" class="delete-btn" @click="deleteTodo">삭제</button>
    </li>
</template>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  transition: all .2s;

  label {
    margin: 0 1rem;
  }
}

.todo-item:hover {
  background-color: #fff;
  color: black;
}

.todo-item.completed {
  background-color: #adadad;
  color: black;
}

.todo-item.completed .todo-text {
  text-decoration: line-through;
}

.delete-btn {
  padding: 5px 10px;
  background-color: rgb(255, 54, 54);
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: red;
  }
}

</style>