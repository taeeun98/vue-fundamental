<!-- 

조건부 표시 / 조건부 렌더링

v-if 조건부 렌더링
v-else
v-else-if
v-show 조건부 표시

-->
<script setup lang="ts">
import { ref } from 'vue';


const awesome = ref(false);
const type = ref('active');
// v-show = 조건부 표시, v-if = 조건부 렌더링

const toggle = () => {
  awesome.value = !awesome.value;
}

</script>

<template>
  <button type="button" @click="toggle">토글 버튼</button>
  <h1 v-if="type === 'active'">Programmers 친구들은 너무 대단해!</h1>
  <h1 v-else>윗 줄이 실행되면 안보이고, 실해안되면 보이는 거야.</h1>
  <h1 v-show="awesome">너무 멋진 친구들이야!</h1>
</template>


<style scoped>

</style>