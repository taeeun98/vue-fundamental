<!-- 
 
ref :
원시 값 (string, number, boolean)을 반응성으로 만들기 위해 사용
객체도 사용할 수 있음. .value로 접근해야 함.
내부적으로 proxy를 사용하여 속성 접근을 감싼다.
근데 간단한 객체, 원시값까지 다룰수있는 ref 를 더 많이 사용하긴 함
shallow copy


reactive :
객체 타입 (Object, Array, Function)을 깊은 반응성(deep reactive)으로 만들기 위한 방법
내부적으로 proxy를 사용하여 속성 접근을 감싸줍니다.
deep copy

-> 반응성이 뭐지?
데이터가 바뀌면, 자동으로 화면(UI)이 바뀌는 시스템을 말해.
Vue는 내부적으로 Proxy를 이용해서 객체를 감싸고,
속성 접근/변경을 감지해서 DOM 렌더링을 자동 갱신함.


Vue에서 반응성이 깨지는 주요 상황과 주의할 점

1. ref의 .value를 빼먹고 수정할 때
const count = ref(0);
count = 1; // ❌ 반응성 깨짐
count.value = 1; // ✅ 이렇게 해야 반응성 유지


2. reactive 객체의 속성에 새로 추가하거나 삭제할 때
const obj = reactive({ name: '태은' });
// ❌ 반응성 깨짐 (Vue는 새로 추가된 속성을 추적 못 함)
obj.age = 25;
// ✅ 반응성 유지 (Vue 3에선 Proxy 기반이라 대부분 해결되긴 함)
obj = reactive({ ...obj, age: 25 });


3. 배열을 직접 인덱스로 수정할 때
const list = reactive(['a', 'b']);
// ❌ 작동하긴 하지만 추적이 불안정할 수 있음
list[0] = 'z';
// ✅ 권장 방식
list.splice(0, 1, 'z');


4. destructuring(구조분해할당) 할 때
const obj = reactive({ a: 1, b: 2 });
// ❌ 반응성 깨짐
const { a } = obj; // 이제 a는 반응형이 아님
// ✅ toRefs 사용
const { a } = toRefs(obj);



-->


<script setup lang="ts">
import { reactive, ref } from "vue";


// 원시 데이터는 ref 만 관리할수있음
const message = ref("hello world");
console.log(message.value); // 랩핑
 

const messageObj = reactive({ // reactive 는 프록시 객체가 됨
    message : 'hi world'
})
console.log(messageObj);



</script>

<template>
  <!-- 언랩핑 -->
  <!-- 이렇게 {{}} 두번 쓰는걸 머스태쉬(콧수염) 문법이라고 한다다-->
  <h1>{{ message }}</h1>
  <h1>{{ messageObj.message }}</h1>
</template>

<style scoped></style>
