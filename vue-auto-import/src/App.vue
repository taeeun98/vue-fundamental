<script setup lang="ts">

// ref = useState 라는 식으로 이해하면 편하다
const count = ref(0);
// 그래서 사용할때 .value 로 꺼내야 함
console.log(count.value);

</script>

<template>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
</style>
