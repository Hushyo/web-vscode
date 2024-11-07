<template>
这是left组件, count的值为{{ count }}
<button @click="count++">+1</button>
</template>

<script setup>
import { ref } from 'vue';

const count=ref(1)
</script>
<style>

</style>