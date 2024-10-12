<template>
    <div>obj的值:{{ obj }}</div>
    <div>obj2的值: {{ obj2 }}</div>
    <div>obj3:{{ obj3 }}</div>
</template>
<script setup>
import { reactive,toRefs } from 'vue';
var obj = reactive({name:"pang",id:1});
var obj2 = toRefs(obj);
var obj3 = {name:"yu"};
setTimeout(()=>{
    obj2.name.value="Hush";
    obj2.id.value="666"
},1000);
setTimeout(()=>{
    obj3.name="hao"
},2000)

</script>