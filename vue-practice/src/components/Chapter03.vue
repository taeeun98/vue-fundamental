<!-- 
 
v-on 디렉티브를 사용하여 DOM 이벤트를 감지할 수 있습니다.
v-on의 축약 문법은 @ 기호를 사용합니다.

Vue는 setup 함수를 절대 다시 실행하지 않습니다.
- 컴포넌트가 최초로 마운트될 때 단 한 번만 실행됩니다.
- 이후 ref나 reactive가 변경되더라도
  컴포넌트는 다시 렌더링되지만
  setup은 다시 실행되지 않습니다.


-->


<script setup lang="ts">
import { onBeforeMount, onMounted, onUpdated, ref } from 'vue';

const count = ref(0);
console.log(count);


onBeforeMount(() => {
    console.log('onBeforeMount');
})

onMounted(() => {
    console.log('onMounted');
})

onUpdated(() => {
    console.log('onUpdated');
})

console.log('render!');


const clickButton = () => {
    count.value++;
}

</script>
<template>
    <div>{{ count }}</div>
    <button type="button" @click="clickButton">click me</button>

</template>

<style scoped></style>