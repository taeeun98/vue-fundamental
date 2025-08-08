<script setup lang="ts">
import { reactive, ref, watch, watchEffect } from "vue";

const objRef = ref({ name: "seon" });
const objReactive = reactive({ inner: { name: "seon" } });

console.log(objRef.value);
console.log(objReactive.inner);


// ref 의 변화 감지
watchEffect(()=>{
    // console.log(objRef.value);
})

// reactive 의 변화 감지
watchEffect(()=>{
    // console.log(objReactive.inner);
})

// watch( 관찰할대상, 콜백함수)
watch(objRef, (newVal)=>{

    console.log(objRef.value);
    console.log(objReactive.inner);
    console.log(newVal);
    
})


const updateObject = () => {
    console.log('clicked!');
    const newObj = { name: 'tiger' };
    objRef.value = { ...newObj };
    objReactive.inner = { ...newObj };


    console.log(objRef.value);
    console.log(objReactive.inner);
}
</script>

<template>
    <div>
        <h2>반응성 테스트</h2>
        <div>
            <p>ref : {{ objRef }}</p>
            <p>reactive : {{ objReactive.inner }}</p>
        </div>

        <button type="button" @click="updateObject">새 객체로 재 할당!</button>
    </div>
</template>

<style scoped></style>
