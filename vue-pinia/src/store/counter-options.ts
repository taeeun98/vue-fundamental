/*
    Options API
    상태의 초깃값을 되돌리기 위해 reset 함수가 내장되어있다.
    
*/

import {defineStore} from 'pinia';

// 1단계 : 카운터 스토어 정의
export const useCounterStore = defineStore('counter', {
    // ref, reactive
    // state : 데이터 저장소 (반드시 함수의 형태로 작성 후 값 반환)
    state: () => ({ count : 0}),

    // computed
    getters: {
        doubleCount: (state) => state.count * 2
    },

    // emit
    // actions : 상태를 변경하는 메서드들
    actions: {
        increment() {
            this.count++;
        },
        decrement() {
            this.count--;
        },
        randomCounter() {
            this.count = Math.round(Math.random() * 100);
        },
        // reset() {
        //     this.count = 0;
        // }
    }
});
