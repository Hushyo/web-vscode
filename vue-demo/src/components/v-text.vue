<template>
    <button @click="showInfo()">v-on</button>
    <button @click="showInfo">v-on</button>
</template>

<script setup>
var showInfo = ()=>{  alert("v-on") }
</script>
