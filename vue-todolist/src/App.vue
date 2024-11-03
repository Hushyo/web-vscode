<template>
    <ToDoHeader @addToDo="addToDo"></ToDoHeader>
    <ToDoMain :list="list"></ToDoMain>
    <ToDoFooter></ToDoFooter>
</template>

<script setup>
import ToDoHeader from './components/ToDoHeader.vue';
import ToDoMain from './components/ToDoMain.vue';
import ToDoFooter from './components/ToDoFooter.vue';

import {ref}  from 'vue'
const list = ref([
    {id:1,name:'晨练',done:false},
    {id:2,name:'练书法',done:false}
])
const addToDo = name=>{
    list.value.push({
        name,done:false,id:~~(Math.random()*1000)
    })
}
</script>