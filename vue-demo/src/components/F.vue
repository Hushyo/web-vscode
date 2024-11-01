<template>

<div class="f">
    父组件 数字: {{ count }}
    <br>
    <S @add="fun"></S>

</div>


<P5Button @click="showCrowd" >
点击开始
</P5Button>
</template>

<script setup>
// 
import { ref } from 'vue';
import S from './S.vue'
var count=ref(0)
const fun =value=>{

    count.value+=value;
    console.log('子组件触发事件')
}
// p5 below
import { P5CreateCrowd,P5Button } from 'p5-ui';
const showCrowd = ()=>{
    const crowd_func= P5CreateCrowd({
        loop:false,
        resize:true,
        fixed:true,
        step:3
    },()=>{
        console.log('end')
    })
}
</script>

<style>
*{
    color:white;
    font-size:20px;
    font-weight: 600;
    text-shadow:1px 1px 3px black;
}
div.f{
    background-color: black;
    margin:20px auto;
    width:300px;
    height:300px;
}

</style>