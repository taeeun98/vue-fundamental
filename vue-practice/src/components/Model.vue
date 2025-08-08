<!-- 

v-bind와 v-on을 합칠 수 있는 v-model을 사용해서 반응형 데이터 렌더링 

모든 항목을 ref로 관리할 경우, 폼이 커지면 중복이 많아지고 관리가 불편해짐.
이를 해결하기 위해 반응형(성)데이터를 객체로 만들어 관리합니다 (reactive)

vue는 반응성 데이터인 객체를 구조분해할경우 반응성을 상실합니다.
그때 toRefs, toRef가 해당 문제를 해결해줄 수 있습니다.


-->

<script setup lang="ts">
import { reactive, toRefs } from 'vue';


// style 적용법 1. 객체 할당
const style = {
    display: 'flex',
    gap: '2rem'
}

// 넘 중복이니까 객체로 만들자
// const text = ref('');
// const agree = ref(false);
// const gender = ref('남성');
// const selected = ref('');

// 객체 만들땐 ref 보다 reactive 가 안전하다
const value = reactive({
    inputValue : '',
    checkValue : false,
    radioValue : '',
    langValue : '',
})

// 구조 분해 그냥 하면 반응성 잃음, toRef, toRefs 등을 사용해야 반응성 유지
const {inputValue, checkValue, radioValue, langValue} = toRefs(value);


</script>

<template>
    <div>
        <label :style="style">
            <!-- style 적용법 2. 인라인 스타일 -->
            <p style="color: gray;">이름 : {{ inputValue }}</p>
            <!-- label 안에 input 들어가면 for 생략 가능 -->
            <input type="text" placeholder="이름 입력" v-model="inputValue">
        </label>

        <hr>

        <label>
            <p>동의 여부 : {{ checkValue }}</p>
            <input type="checkbox" v-model="checkValue"></input>
        </label>

        <hr>

        <label>
            <span>남자</span>
            <input type="radio" name="gender" value="남자" v-model="radioValue">
        </label>
        <label>
            <span>여자</span>
            <input type="radio" name="gender" value="여자" v-model="radioValue">
        </label>
        <p>성별 : {{ radioValue }} </p>

        <hr>

        <select v-model="langValue">
            <option disabled value="">언어 선택</option>
            <option value="JavaScript">JavaScript</option>
            <option value="TypeScript">TypeScript</option>
            <option value="React">React</option>
            <option value="Vue">Vue</option>
        </select>
        <p>선택한 언어 : {{ langValue }}</p>

    </div>
</template>

<!-- style 적용법 3. 스타일 부분에 넣기 -->
<style scoped>
label {
    display: flex;
    gap: 2rem;
}
</style>