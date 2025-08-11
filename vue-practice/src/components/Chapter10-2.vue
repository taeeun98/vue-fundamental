<script setup lang="ts">
import { ref } from 'vue';
import ChildComp from './ChildComp10-2.vue';


const score =ref(3);
const comment = ref('');




</script>

<template>
  <div>
    <!-- v-bind: 의 생략구인 : 꼭 쓰기 ㅠㅠ -->
    <ChildComp  v-model:score="score" v-model:comment="comment">

      hello ~~

    <template #extra>
      named slot
    </template>

    hi ~~

    </ChildComp>

    <p>score : {{ score }}</p>
    <p>comment : {{ comment }}</p>


</div>
</template>

<style scoped>

</style>