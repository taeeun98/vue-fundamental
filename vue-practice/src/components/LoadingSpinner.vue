

<script setup lang="ts">

</script>

<template>
  <div class="loading-component">
    <div class="spinner"></div>
  </div>
</template>

<style scoped>

.loading-component{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 10px 0;
}

.spinner{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 4px solid #fff;
  border-top: 4px solid dodgerblue;
  animation: spin 1s cubic-bezier(0.7,-0.33, 0.18, 1.46) infinite
          /* name duration timing-function count*/
}

/* 애니메이션 선언 */
@keyframes spin {
  from { transform: rotate(0deg) }
  to { transform: rotate(360deg) }
}

button:disabled{
  opacity: 0.5;
  cursor: not-allowed;
}


</style>