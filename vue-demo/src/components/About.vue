<template>
<div>About组件</div>
<P5Button @click="cpush"><P5Title content="123 " font_color="red"></P5Title></P5Button>
<RouterLink :to="{ name:'tab1',params:{id:'tab1'} }">tab1</RouterLink>
<RouterLink :to="{ name:'tab1',params:{id:'666'} }">tab2</RouterLink>
<hr>
<RouterView> </RouterView>
</template>
<script setup>
import { useRoute, useRouter } from 'vue-router';
import { watch } from 'vue';


const router = useRouter();
const cpush = ()=>{
    router.push({name:'tab1',params:{id:'123'}});
}
const route = useRoute();


watch(()=>route.path,(path)=>{
    console.log('路由路径',path)
})
</script>