<!-- vbase 치면 스니펫 적용 가능 -->
<script setup lang="ts">
const props = defineProps<{ msg: string }>();
console.log(props.msg);
</script>
<template>
  <div>
    hello world
    <!-- 중괄호 두개 쓰기, 템플릿에선 props 안써도 됨 -->
    {{ msg }}
  </div>
</template>

<style scoped></style>
