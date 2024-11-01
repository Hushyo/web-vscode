<template>
    
<div class="vmodel">
<p>输入信息：<input type="text" v-model="message"> </p>
<p>输入的信息是：{{ message }}</p>
<p>加法</p>
 <input type="text" v-model.number="n1"> +  <input v-model.number="n2"> = {{ n1+n2 }}


<br>
<div class="son">子组件:<vtext></vtext></div>


</div>
</template>

<script setup>
import { ref } from 'vue'
var message = ref("hello");
var n1 = ref(1)
var n2 = ref(2)

import vtext from "./v-text.vue"
</script>

<style scoped>
.vmodel{
   padding:20px;
   border:grey solid 1px;
}
*{
    font:20px;
}
:deep(.son){
    color:aqua;
}
</style>

