<!-- 

vue의 리스트 렌더링은 v-for 디렉티브를 사용하여 만들 수 있습니다.
vue는 내부적으로 proxy를 사용하기 때문에 immutable 데이터를 강제하지 않습니다.

vue 에서는 다른 반응형 데이터 소스를 기반으로 .value을 계산해야 할 때 computed() 를 사용할 수 있다.
computed 는 결과를 캐시하고 의존성이 변경될 때 자동으로 업데이트 합니다.
- 계산된 결과를 여러곳에서 사용해야 할 때
- 무거운 연산(정렬, 필터링, etc...)
- 반응형 데이터에 의존하는 계산을 할 때


vue 의 computed 는 react 의 useMemo 와 비슷함

computed는 자동으로 의존성 값을 추적합니다.
필요할 때만 업데이트 되기 때문에 성능 낭비 없이 여러 파생 상태를 만들 수 있습니다.
React 의 useMemo 는 남발하면 오히려 가독성이 떨어지고, 의존성 배열 관리가 더 복잡해진다.
그래서 보통 메모리 누수가 심한 곳만 useMemo 를 사용하는데
반면 vue 의 computed 는 자동 추적이라 side Effect(부수효과) 가 적습니다.


- 템플릿 로직에 3줄 이상 들어간다? computed.
- 하나의 computed 안에서 너무 많은 책임이 이루어진다? computed.

-->

<script setup lang="ts">
import { computed, ref } from 'vue';


let id = 0;

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

const todos = ref<Todo[]>([
  { id: id++, text: 'HTML 배우기', done: false },
  { id: id++, text: 'CSS 배우기', done: false },
  { id: id++, text: 'JavaScript 배우기', done: false },
  { id: id++, text: 'Vue 배우기', done: false },
])


const newTodo = ref('');
const hideCompleted = ref(false);
const forceRenderCount = ref(0);


const removeTodo = (id: number) => {
  todos.value = todos.value.filter(todo => todo.id !== id);
}

const addTodo = () => {
  if (newTodo.value.trim()) {
    // 배열은 push, 집합(Set) 에는 add
    todos.value.push({
      id: id++,
      text: newTodo.value.trim(),
      done: false
    })
    newTodo.value = '' // 입력 필드 초기화
  }
}

// 파생상태, 근데 vue 에선 이렇게 쓰면 안좋음
// 파생상태란? 원본 상태를 직접 저장하는 게 아니라, 원본 상태를 가공·변형해서 만든 상태
// 이건 여러군데서 호출하면 여러번 호출되어서, 호출코드가 많아지면 안좋음
const filteredTodo_ = () => {
  console.log('normal 파생 상태');

  return hideCompleted.value ? todos.value.filter(t => !t.done) : todos.value
}

// react 의 useMemo 와 비슷
// vue 의 계산된 파생상태는 ? computed () 안에 함수 구문 넣기
// 이건 여러군데서 호출해도 한번만 호출됨
const filteredTodo = computed(() => {
  console.log('computed 파생 상태');

  // hideCompleted 가 바뀌었다는걸 인지하고 computed 가 다시 호출되는 것.
  // 마치 의존성 배열에 추가한것처럼
  return hideCompleted.value ? todos.value.filter(t => !t.done) : todos.value
})

</script>


<template>

  <form @submit.prevent="addTodo">
    <input type="text" v-model="newTodo">
    <button type="submit">할 일 추가</button>
  </form>

  <div v-if="todos.length > 0">총 할 일 : {{ filteredTodo.length }} 개</div>
  <div v-else>할 일 끝!</div>
  <ul>
    <li v-for="todo in filteredTodo" :key="todo.id">
      <input type="checkbox" :id="`${todo.id}`" v-model="todo.done">
      <label :for="`${todo.id}`">

        <!-- :class="{done:todo.done}"
         -> todo.done 의 값이 trued면 done 을 class에 넣고
         아니면 넣지 않는다 -->

        <span :class="{ done: todo.done }">{{ todo.text }}</span>
      </label>
      <button type="button" @click="() => removeTodo(todo.id)">❌</button>
    </li>
  </ul>


  <button type="button" @click="hideCompleted = !hideCompleted">
    {{ hideCompleted ? 'show all' : 'hide completed' }}
  </button>

  <button type="button" @click="forceRenderCount++">강제 리-렌더링{{ forceRenderCount }}</button>

</template>

<style scoped>
.done {
  text-decoration: line-through;
}

form {
  margin-bottom: 1rem;
}

ul {
  li {
    margin-bottom: 1rem;
  }
}

button {
  margin-left: 2rem;
}
</style>