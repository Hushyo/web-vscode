<template>
<div class="s">
    子组件 <br>
    数字: {{ number }}
    <button @click="addNumber">点击加2</button>
</div>
</template>

<script setup>
import {ref} from 'vue'
const emit = defineEmits(['add'])
var number = ref(1)

const addNumber=()=>{
    number.value+=2;
    emit('add',2);
}


</script>

<style scoped>
div.s{
    margin:10px auto;
    width:200px;
    height:200px;
}
</style>