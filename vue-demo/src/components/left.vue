<template>
这是left组件, count的值为{{ count }}
<button @click="count++">+1</button>
</template>

<script setup>
import {onMounted, onUnmounted, ref } from 'vue';

const count=ref(1)
onMounted(()=>{
    console.log('left组件被挂载')
})
onUnmounted(()=>{
    console.log('left组件被销毁')
})
</script>
<style>

</style>