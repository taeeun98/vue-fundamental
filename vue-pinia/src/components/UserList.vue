<script setup lang="ts">
import { useUserStore } from '../store/user-options';

const user = useUserStore();
console.log(user);



</script>

<template>
<h1>User List</h1>
<ul>
    <li v-for="user in user.userData">
        {{ user.name }}
    </li>
</ul>
</template>

<style scoped></style>