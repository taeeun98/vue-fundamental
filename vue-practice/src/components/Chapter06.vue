<!-- 

vue의 리스트 렌더링은 v-for 디렉티브를 사용하여 만들 수 있습니다.



-->

<script setup lang="ts">
import { ref } from 'vue';

let id = 0;

const newTodo = ref('');

interface Todo {
  id: number;
  text: string;
}

const todos = ref<Todo[]>([
  { id: id++, text: 'HTML 배우기' },
  { id: id++, text: 'CSS 배우기' },
  { id: id++, text: 'JavaScript 배우기' },
  { id: id++, text: 'Vue 배우기' },
])


const handleRemove = (id: number) => {
  todos.value = todos.value.filter(todo => todo.id !== id);
}

const addTodo = () => {
  // 배열은 push, 집합(Set) 에는 add
  if (newTodo.value.trim()) {
    todos.value.push({
      id: id++, text: newTodo.value
    })
    newTodo.value = '';
  }
}

</script>

<template>

  <div v-if="todos.length > 0">총 할 일 : {{ todos.length }} 개</div>
  <div v-else>할 일 끝!</div>


  <form @submit.prevent="addTodo">
    <input type="text" v-model="newTodo">
    <button type="submit">할 일 추가</button>
  </form>


  <ul>
    <!-- v-bind 는 생략 가능, : 부터 쓰면 됨 -->
    <li v-for="todo in todos" v-bind:key="todo.id">{{ todo.text }}
      <button type="button" @click="() => handleRemove(todo.id)">❌</button>
    </li>
  </ul>
</template>

<style scoped>
ul {
  li {
    margin-bottom: 1rem;
  }
}

button {
  margin-left: 2rem;
}
</style>