<script setup lang="ts">
import { ref } from 'vue';
import ChildComp from './ChildComp10-1.vue';

// const handler = () => console.log('clikced!');

const message = ref('hello world')

</script>

<template>
  <div>
    <!-- v-bind 를 사용해 props 를 전달할 수 있습니다
      문자 보낼땐 `` 이나 '' 로 감싸야 함. 아니면 변수데이터를 보내는 것 
    -->
      <!-- 자식으로 부터 방출된 이름 그대로 @방출변수이름 = (떨어지는 인자) => 재할당 해서 사용
       당연히 이벤트에 재할당도 가능 -->
    <ChildComp :msg="message" @response="msg => message = msg"/>
      {{ message }}
    </div>
  </template>

<style scoped>

</style>