<script setup lang="ts">
import { ref } from 'vue'


/* select 선택에 따라 이미지가 조건부 렌더링 & p태그 조건부 렌더링 */

const sunnyIcon = 'https://cdn-icons-png.flaticon.com/512/869/869869.png'
const cloudyIcon = 'https://cdn-icons-png.flaticon.com/512/1163/1163624.png'
const rainyIcon = 'https://cdn-icons-png.flaticon.com/512/1163/1163620.png'

const selected = ref('');
const src = ref('');


const weather = () => {

    switch (selected.value) {
        case 'sunny':
            return sunnyIcon;
        case 'cloudy':
            return cloudyIcon;
        case 'rainy':
            return rainyIcon;
        default:
            return '';
    }
}
</script>

<template>
    <div>
        <h2>오늘 날씨는 어떤가요?</h2>

        <select v-model="selected">
            <option value="">선택해주세요</option>
            <option value="sunny">☀️ 맑음</option>
            <option value="cloudy">⛅ 흐림</option>
            <option value="rainy">🌧 비</option>
        </select>

        <div style="margin-top: 20px;">

            <img v-if="src = weather()" v-bind:src="src" style="width: 100px;">
            <!-- 이미지 렌더링 -->

            <p v-if="selected === 'sunny'">오늘은 날씨가, 상태 어떠세요?</p>
            <p v-if="selected === 'cloudy'">구름이 없네요, 니가 왔기죠?</p>
            <p v-if="selected === 'rainy'">비가 오네요?! 우산 챙기셨죠?</p>
            <p v-if="selected === ''">오늘 하루도 힘내세요.</p>
        </div>
    </div>
</template>


<style scoped></style>