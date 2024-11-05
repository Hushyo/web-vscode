<template>
<div>
    子组件 <br>
    Money:{{ mone }}
    <P5Button @click="updateMoney">点击增加资金</P5Button>

</div>
</template>

<script setup>
import {inject} from 'vue'
import { P5Button } from 'p5-ui';

let mone=inject('mone');
let updateMoney=inject('updateMoney');
</script>
