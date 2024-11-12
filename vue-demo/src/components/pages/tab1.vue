<template>
    <div>tab1</div>
    <div>props:{{ id }}</div>
    <div>route.params:{{ $route.params.id }}</div>
    </template>
    <script setup>
    const props = defineProps({
        id:String
    })
    </script>
<style scoped>
div{
    background-color: brown;
}
</style>