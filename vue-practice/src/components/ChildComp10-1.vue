<!-- 
    자식 컴포넌트는 props 를 통해 부모로부터 값을 입력받을 수 있습니다.
    defineProps 를 사용해 전달받은 props 의 타입을 정의할 수 있습니다.
    props 의 기본값이 필요한 경우 withDefaults 를 앞에 붙여 기본값을 정의합니다.
    
    자식 컴포넌트에서 부모 컴포넌트로 데이터를 전달하기 위해선 defineEmit 함수를 사용합니다.
    defineEmit 으로 정의된 이벤트는 emit 의 값으로 전달되며,
    부모 컴포넌트가 해당 이벤트를 사용할 수 있습니다.


-->

<script setup lang="ts">

// 부모가 자식에게 준 데이터 받고 싶을 때
// 컴파일 타임 매크로 (따로 import 하지 않아도 되는 애들)
// 방법은 두 가지

// 타입 인자 방식 : 제네릭 타입 선언 컴파일 시점에 타입 확정(ts 방법)
// 우린 lang = ts 인 스크립트니까 이 방식으로.
// const props  = defineProps<{
//     msg:string
//     onHandle:() => void
// }>();


// 런타임 선언(옵션 객체) (vue 방법)
// const props_  = defineProps({
//     msg: String
// })'
// 

const props = defineProps<{
    msg: string
}>();


// 자식이 부모로 데이터 주고 싶을 때
const emit = defineEmits(['response'])

emit('response', '자식으로부터 전달 받은 데이터')


</script>

<template>
    <div>
        {{ msg }}
        <!-- <button type="button" @click="onHandle">CTA</button> -->
    </div>
</template>

<style scoped></style>