<template>
<p>输入信息：<input type="text" v-model="message"> </p>
<p>输入的信息是：{{ message }}</p>


<p>加法</p>
 <input type="text" v-model.number="n1"> +  <input v-model.number="n2"> = {{ n1+n2 }}
</template>

<script setup>
import { ref } from 'vue'
var message = ref("hello");
var n1 = ref(1)
var n2 = ref(2)
</script>


