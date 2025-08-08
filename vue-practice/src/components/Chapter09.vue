<script setup lang="ts">
import { ref, watch } from 'vue';
import LoadingSpinner from './LoadingSpinner.vue';


const todoId = ref(1);
const todoData = ref(null);
const isLoading = ref(false);

// 부수효과 가져올땐 script 에 적으면 된다
async function fetchData() {

  isLoading.value = true;

  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`);

    // await 이랑 .json() 잊지말기 ㅜㅜ
    //  ref() 값 set 할때 .value 에 넣는 것도
    todoData.value = await res.json();

  } catch {
    // 에러 핸들러
  } finally {
    isLoading.value = false;
  }


}

fetchData();

//watch 지속적으로 관찰하기
const { pause, stop, resume } = watch(todoId, fetchData, {
  // handle() : watch 멈추는 함수 = stop
});

</script>

<template>
  <div class="container">
    <p>할 일 ID: {{ todoId }}</p>
    <button type="button" @click="todoId++">다음 할 일 가져오기</button>
    <!-- <p v-if="isLoding">로딩 중....</p> -->
    <hr>
    <!-- <Suspense fallback="<>"></Suspense> -->
    <!-- 
      <Suspense>
        <template #fallback></template>
      </Suspense>
      -->
    <LoadingSpinner v-if="isLoading" />
    <pre v-else>
  <code> {{ todoData }} </code>
</pre>
  </div>
</template>

<style scoped>
.container {
  width: 500px;
  height: 500px;
}

pre {
  background-color: rgb(22, 22, 22);
  border-radius: 0.3rem;
  color: white;
}
</style>
