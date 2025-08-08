<script setup lang="ts">
import { ref } from 'vue'


/* select 선택에 따라 이미지가 조건부 렌더링 & p태그 조건부 렌더링 */

// const sunnyIcon = 'https://cdn-icons-png.flaticon.com/512/869/869869.png'
// const cloudyIcon = 'https://cdn-icons-png.flaticon.com/512/1163/1163624.png'
// const rainyIcon = 'https://cdn-icons-png.flaticon.com/512/1163/1163620.png'

const weatherOptions = [
    {
        value: 'sunny',
        emoji: '🌞',
        label: '맑음',
        icon: 'https://cdn-icons-png.flaticon.com/512/869/869869.png',
        message: '맑은 날입니다. 산책 어떠세요??'
    },
    {
        value: 'cloudy',
        emoji: '☁️',
        label: '흐림',
        icon: 'https://cdn-icons-png.flaticon.com/512/1163/1163624.png',
        message: '흐린 날입니다,, 비가 올 것 같아요'
    },
    {
        value: 'rainy',
        emoji: '☔️',
        label: '비',
        icon: 'https://cdn-icons-png.flaticon.com/512/1163/1163620.png',
        message: '비가 오네요. 우산 챙기셨나요?'
    },
]


const weather = ref('');

</script>

<template>
    <div>
        <h2>오늘 날씨는 어떤가요?</h2>

        <select v-model="weather">
            <option value="">선택하세요</option>
            <option v-for="opt in weatherOptions" :value="opt.value" :key="opt.value">
                {{ opt.emoji }}
                {{ opt.label }}
            </option>
        </select>

        <div style="margin-top: 20px;">
            <!-- v-for 에서 값 뽑아서 바로 같은 층에 v-if 에서 값 사용하지 않기!!
                 v-for 가 위에, v-if 가 아래 층에서. -->
                 
            <div v-for="opt in weatherOptions" :key="opt.value">
                <!-- 템플릿에선 ref 자동으로 언래핑 => .value 없어야함 -->
                 <!-- template 태그는 div 안만들어주는 fragment 같은것 -->
                <template v-if="weather === opt.value">
                    <img :src="opt.icon" width="100" :alt="opt.label">
                    <p>{{ opt.message }}</p>
                </template>
            </div>

            <p v-if="weather === ''">날씨를 선택해주세요.</p>
        </div>
    </div>
</template>


<style scoped></style>