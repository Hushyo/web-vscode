<template> 
<div> 
    <div class="header"> 
    <p class="title">todos</p> 
    <input class="new-todo" type="text" placeholder="请填写任务" v-model.trim="name" @keyup.enter="enterName"/> 

    </div> 
  </div> 
 </template>
<script setup>
import {ref} from 'vue'
const name=ref('')
const emit =defineEmits(['addToDo']);
const enterName=()=>{
    emit('addToDo',name.value)
    name.value='';
}
</script>