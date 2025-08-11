<script setup lang="ts">
import { provide, ref } from 'vue';
import { scoreKey } from './score';

const score = ref(3);
const comment = ref('');

const updateScore = (v: number) => {
    score.value = v;
}

const updateComment = (v: string) => {
    comment.value = v;
}

provide(scoreKey, { score, comment, updateScore, updateComment });

</script>

<template>
    <slot></slot>
</template>

<style scoped></style>