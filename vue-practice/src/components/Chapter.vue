<script setup lang="ts">
import { inject } from 'vue';
import ChildComp from './ChildComp.vue';
import { scoreKey, type ScoreContext } from '../store/score';


// props 를 차례로 내리지 않고 한번에 원하는 곳에서 받기 (전역 상태 관리)
// provide('키이름', 값) 으로 보내고, inject('키이름') 로 받기

const ctx = inject(scoreKey);
const {score, comment} = ctx as ScoreContext;
</script>

<template>

  <ChildComp />
  <p>score : {{ score }}</p>
  <p>comment : {{ comment }}</p>

</template>

<style scoped>

</style>