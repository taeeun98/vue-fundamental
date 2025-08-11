<!-- 

pinia는 vue에서 사용할 수 있는 전역 상태관리 도구입니다.
pinia는 options syntax와 composition syntax 2가지를 사용할 수 있습니다.

store를 구조분해 하려면, storeToRefs 함수가 필요합니다.
*단 actions는 구조분해되지 않음. 

-->
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCounterStore } from '../store/counter-options';
// import { useCounterStore } from '../store/counter-composition';

const counter = useCounterStore();
// 구조분해하면서 반응성 유지시키는 법
// storeToRefs() 안에 감싸기
// const { count } = storeToRefs(useCounterStore());


// $patch
// 값을 바로 바꿀수있다. 보통 이걸 핸들러에 넣어 실행
counter.$patch({
    count:10000
})

counter.$patch((state)=>{
    // state.count.push();
})


</script>


<template>
  <div>
    <h2>카운터 앱</h2>
    <button type="button" @click="counter.decrement"> - </button>
    <div> {{ counter.count }} </div>
    <button type="button" @click="counter.increment"> + </button>
    <hr />
    <button type="button" @click="counter.$reset">Reset</button>
  </div>
</template>

<style scoped>

</style>