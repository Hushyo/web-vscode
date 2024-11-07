<template>
这是right组件, count的值为{{ count }}
<button @click="count++">+1</button>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
onMounted(()=>{
    console.log('right组件被挂载')
})
onUnmounted(()=>{
    console.log('right组件被销毁')
})
const count=ref(1)
</script>
<style>

</style>