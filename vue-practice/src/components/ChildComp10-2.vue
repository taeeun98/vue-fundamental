<script setup lang="ts">

const props = defineProps<{
    score: number,
    comment: string
}>()


const emit = defineEmits<{
    //  interface type 함수 시그니처 방식
    (e: 'update:score', value: number): void,
    (e: 'update:comment', value: string): void,

    // tuple type 방식
    // 'update:score': [value: number],
    // 'update:comment': [value: string],

    // => 둘 다 괜찮음
}>();

</script>

<template>
    <div>
        <input type="range" min="0" max="5" @input="emit('update:score', +($event.target as HTMLInputElement).value)" />

        <textarea :value="comment" @input="emit('update:comment', ($event.target as HTMLInputElement).value)">
        </textarea>

    </div>

    <div>
        <p>
            익명 anonimous slot
            <slot></slot>
        </p>
        <p>
            named slot: 
            <slot name="extra"></slot>
        </p>
    </div>
</template>

<style scoped></style>