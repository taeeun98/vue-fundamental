<!-- 
 
React는 useEffect 하나로 대부분을 다 처리합니다. cleanup포함

Vue는 목적에 따라 watchEffect, watch, onMounted 로 역할을 나눠 처리합니다.

기능별 분리된 이유 :
반응형 시스템(reactivity system)이 내장되어 있기 때문에
상태 추적은 watchEffect/watch가 자동/명시적으로 처리
DOM의 생명주기 처리는 onMounted, onUpdated를 통해 명확한 시점을 추적


// 여기에 뭐 더 써야함
-->



<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { updateElementText } from '../utils/updateElementText';


// 반응형 데이터를 추적하기 위해서뿐 아니라,
// 실제로 DOM 요소 잡을때 사용할 수도 있음. 
const pElementRef = ref<HTMLParagraphElement | null>(null);


const isHTMLElement = (el:unknown): el is HTMLElement => {
  return el instanceof HTMLElement;
}

// 정확히 value 가져오려면 컴포넌트가 mount 된 이후에 가져와야함
console.log(pElementRef.value); // 현재는 null 로 찍힘

// 그래서 onMounted 사용
onMounted(() => {
  if (isHTMLElement(pElementRef.value)) {
    pElementRef.value.textContent = 'mounted!';
  }

  if (pElementRef.value) {
    pElementRef.value.textContent = 'mounted!';
  }

  // 이건 확장성은 그러게 좋지 않음. 글자만 바꾸는게 아닐수도 있기에
  // 타입검사 / 내용 변경을 나누는게 좋겠죠?
  updateElementText(pElementRef, 'hello vue.js');
})


</script>

<template>
  <div>
    <!-- 사용법은 react 에서 ref 로 dom 잡을때랑 비슷 -->
    <p ref="pElementRef">hello world</p>
  </div>
</template>

<style scoped></style>