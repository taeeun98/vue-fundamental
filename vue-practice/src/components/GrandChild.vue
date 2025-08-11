<script setup lang="ts">
import { inject } from 'vue';
import { scoreKey, type ScoreContext } from '../store/score';


const ctx = inject(scoreKey);

if(!ctx){
    throw new Error('...')
}

const {score, updateScore} = ctx as ScoreContext;

</script>

<template>
    <div>
        <h4>GrandChild Component</h4>
        <input
        type="range"
        :value="score"
        @input="updateScore(+(($event.target as HTMLInputElement).value))"
        />
    </div>
</template>

<style scoped></style>