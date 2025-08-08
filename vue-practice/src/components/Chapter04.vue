<!-- 
 
v-bind와 v-on을 함께 사용하면 폼 입력 요소에 양방향 데이터 바인딩이 가능합니다.
vue는 브라우저의 Event를 그대로 사용합니다.

v-model은 input값을 바인딩 상태와 자동으로 동기화됩니다. 이벤트 핸들러 x

v-model은 텍스트뿐만 아니라 체크박스, 라디오, 드롭다운 등 다양한 인터랙션 태그에서 사용 가능


-->

<script setup lang="ts">
import { ref } from 'vue';


const text = ref('');

// const onChange = (e:Event) => {
//     const target = e.target as HTMLInputElement;
//     console.log(target.value);
    
//     text.value = target.value;
// }
</script>

<template>
    <!-- 핸들러 없이 v-model 만 쓰면,
     input 의 값을 알아서 바인딩 대상에 바인딩해서 렌더링시킴 -->
    <input type="text" v-model="text">
    <p> 입력 값 : {{ text }}</p>
</template>

<style scoped>

</style>