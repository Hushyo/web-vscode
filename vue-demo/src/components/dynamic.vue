<template>
    <div class=container>
        <div class="row g-0">
            <div class="col-md-3"><P5Button @click="showComponent=left"><P5Title font_color='red' size="medium" content="点击展示left组件"></P5Title></P5Button></div>
            <div class="col-md-4">
                <KeepAlive max='2'>
                    <component :is="showComponent"></component>
                </KeepAlive>
            </div>
            <div class="col-md-3"><P5Button @click="showComponent=right"><P5Title font_color="red" size="medium" content='点击展示right组件'></P5Title></P5Button></div>
        </div>
        <br>
        <div class="row g-0">
            <div class="col-md-3">测试插槽内容</div>
            <div class="col-md-3">
                <myslot>
                    <template v-slot="msg"><P5Title :content="msg.msg" font_color="red"></P5Title></template>
                    <template #slot2="msg"> {{www}} </template>
                    <template #slot3>{{ www }}</template>
                </myslot>
            </div>
            <div class="col-md-3">
                <myslot>
                    <template #default> {{ www }}</template>
                    <template #slot2="msg">{{msg}}</template>
                    <template #slot3>{{ www }}</template>
                </myslot>
            </div>
        </div>

        <div class="row g-0">
        <div class="col-md-3">自定义指令</div>
        <div class="col-md-3"><h6 v-color="{color:'red',text:'hello'}">v-color</h6></div>
     
        </div>
        <div class="row g-0">
            <div class="col-md-3">根组件</div>
            <div class="col-md-3"><RouterLink to="/home">Home</RouterLink></div>
            <div class="col-md-3"><router-link to="/about">About></router-link></div>
        </div>
    </div>
</template>

<script setup>
import { ref, shallowRef } from 'vue';
import { P5Button,P5Title } from 'p5-ui';
import left from './left.vue'
import right from './right.vue'
import myslot from './slot.vue'


const showComponent=shallowRef(left);
const msg=ref('使用者提供')
const color=ref('red')
//自定义指令
const vColor={
    mounted(el,binding){
        el.style.color = binding.value.color
    }
}




</script>
<style>
body{
    background-image: url('../assets/images/bg.png');
    background-color: black;
}
*{
    padding:0px;
    margin:0px;
    color:white;
    font-size:20px;
    font-weight: 600;
    text-shadow:1px 1px 3px black;

    /*background-repeat: no-repeat;*/
}
</style>