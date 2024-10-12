<template> {{ obj }} </template>

<script setup>

import {reactive} from 'vue'

var obj = reactive({name:"pang",id:1});
setTimeout(()=>{
    obj.name="Hush"
},2000)

</script>