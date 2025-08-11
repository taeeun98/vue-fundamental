<script setup lang="ts">
import { computed, ref } from 'vue';
import TodoList from './TodoList.vue';
import TodoStats from './TodoStats.vue';
import TodoForm from './TodoForm.vue';
import TodoFilter from './TodoFilter.vue';

const todos = ref([
  { id: 1, text: 'Vue 학습하기', completed: false },
  { id: 2, text: '컴포넌트 만들기', completed: true },
  { id: 3, text: 'emit 이해하기', completed: false },
]);

const nextId = ref(4);

const filtered = ref(false);


// 보면 props 는 내려줘도 이벤트 (렌더링트리거)는 자식이 가지고 올라옴
// 리액트는 보통 부모가 다 내려주지만 vue 는 올라가는 것이 개발 철학
// props는 readOnly라 자식이 수정할수없음 => props 값을 수정하려면
// 자식에서 조건에 맞게 올려서 부모에서 처리해야함. 이때 emit 을 사용
function handleDeleteTodo(id:number) {
    const index = todos.value.findIndex(t => t.id === id);
    if(index > -1) {
        todos.value.splice(index, 1);
    }
}

function handleToggleTodo(id:number) {
    const todo = todos.value.find(t => t.id === id);
    if(todo) {
        todo.completed = !todo.completed;
    }
}

function handleAddTodo(todoText:string) {
    todos.value.push({
        id: nextId.value++,
        text : todoText,
        completed : false
    });
}

// 파생 상태
const completedCount = computed(()=> todos.value.filter(t => t.completed).length)
const filterdTodo = computed(()=> filtered.value ? todos.value.filter(t => !t.completed) : todos.value)


</script>

<template>
  <div class="todo-app">
    <h1>할 일 목록</h1>

    <TodoForm @add-todo="handleAddTodo"/>

    <TodoStats :total="filterdTodo.length" :completed="completedCount"/>

    <TodoList :todos = "filterdTodo" @toggle-todo="handleToggleTodo" @delete-todo="handleDeleteTodo"/>
  
    <TodoFilter :active="filtered" :remainder="todos.length - completedCount" @toggle="filtered = !filtered"/>
  </div>
</template>

<style scoped>
.todo-app {
  max-width: 608px;
  /* margin-top: 0 auto; */
  padding: 20px;
  border: 1px solid #fff;
  border-radius: 1rem;
}
</style>
