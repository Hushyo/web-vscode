<template> 
<div class="container">
数字:{{ number }} 
<button @click="addNumber">+1</button>
<hr>
<vmodel></vmodel>
</div>
</template>

<script setup>

import {ref} from 'vue'

var number = ref(1);
var addNumber = ()=>{
    number.value++;
}

</script>

<style>
*{
    margin: 0;
    padding: 0;
}
.container{
    margin:200px auto;
    background-color: antiquewhite;
    width:90%;
    height: 300px;
}
</style>