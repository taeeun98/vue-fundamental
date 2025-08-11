<script setup lang="ts">
import { ref } from 'vue';

const newTodo = ref('');

const emit = defineEmits<{
    'add-todo':[text:string];
}>()

const addTodo = () => {
    if(newTodo.value.trim()){
        emit('add-todo', newTodo.value.trim());
        newTodo.value = '';
    }
}


</script>

<template>
    <div>
        <form class="add-form" @submit.prevent="addTodo">
            <input type="text" v-model="newTodo"/>
            <button type="submit">추가</button>
        </form>
    </div>
</template>

<style scoped>
.add-form {
    margin-bottom: 1rem;
    display: flex;
    gap: 1rem;
}
</style>