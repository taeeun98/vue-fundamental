<script setup lang="ts">
import { ref } from 'vue';

const titleClass = ref('title');

const toggle = () => {
    titleClass.value = titleClass.value === 'title' ? 'done' : 'title';
}

</script>

<template>
    <div>
        <!-- 똑같음. 축약가능 v-bind 는 정말 자주 씀 -->
        <!-- vue 에선 : (디렉토리) 가 붙은 뒤에는 "" 안은 표현식임. 그래서 변수 할당 가능. string x -->
        <!-- <h1  v-bind:class="titleClass">나는 빨강!</h1> -->
        <h1 :class="titleClass" :id="titleClass">나는 빨강!</h1>
        <button type="button" @click="toggle">click me</button>
    </div>
</template>

<style scoped>
.title {
    color: red;
}

.done {
    color: yellow;
}
</style>