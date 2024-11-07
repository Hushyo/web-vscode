<template>
    <div class=container>
        <div class="row g-0">
            <div class="col-md-3"><P5Button @click="showComponent=left"><P5Title font_color='red' size="medium" content="点击展示left组件"></P5Title></P5Button></div>
            <div class="col-md-3">
                <KeepAlive>
                    <component :is="showComponent"></component>
                </KeepAlive>
            </div>
            <div class="col-md-3"><P5Button @click="showComponent=right"><P5Title font_color="red" size="medium" content='点击展示right组件'></P5Title></P5Button></div>
        </div>
    </div>
    
</template>

<script setup>
import { shallowRef } from 'vue';
import left from './left.vue'
import right from './right.vue'
import { P5Button,P5Title } from 'p5-ui';
const showComponent=shallowRef(left);
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