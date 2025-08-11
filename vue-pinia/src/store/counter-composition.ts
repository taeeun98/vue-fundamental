/*
    Composition API
    트리 쉐이킹, 가상 돔, 정적 트리 호이스팅(SSG) , IE지원 X
    
*/

import { defineStore } from "pinia";
import { computed, reactive, ref, toRef, toRefs } from "vue";
export const useCounterStore = defineStore("counter", () => {
  // const count = ref(0);
  // const name = ref("tiger");
  // const doubleCount = computed(() => count.value * 2);

  // const increment = () => {
  //   count.value++;
  // };

  // const decrement = () => {
  //   count.value--;
  // };

  // const reset = () => {
  //   count.value = 0;
  // };

  // return {count, name, doubleCount, increment, decrement, reset}

  //-----------------------------------------

  //   const store = reactive({
  //     count: 0,
  //     name: "tiger",
  //     get doubleCount() {
  //       return this.count * 2;
  //     },
  //     increment() {
  //       this.count++;
  //     },
  //     decrement() {
  //       this.count--;
  //     },
  //     reset() {
  //       this.count = 0;
  //     },
  //   });

  //   return store;

  //-----------------------------------------
  // composition api 쓸때
  // 관심사의 분리로 묶고 전개해서 내보내는 것이 제일 많이 쓰임

  // 반응성 상태
  const state = reactive({
    count: 0,
    name: "tiger",
  });

  // 파생 상태
  const getters = {
    doubleCount: computed(() => state.count * 2),
  };

  // actions
  const actions = {
    increment() {
      state.count++;
    },
    decrement() {
      state.count--;
    },
    reset() {
      state.count = 0;
    },
  };

  // 묶어서 내보내면 안되고, 하나씩 전개해서 보내야함
  // 맨 위 첫번째 방법을 생각해보기
  return {
    // 구조분해해도 반응성 안잃어버리게, 상태는 toRefs 로 감싸기
    ...toRefs(state),
    ...getters,
    ...actions,
  };
});
