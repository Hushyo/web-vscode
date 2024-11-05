<template>
    <div class="container">
        <div class="row g-0">
            <div class="col-4">{{ value }}</div>
            <div class="col-4">
                爷爷组件
            </div>
            <div class="col-4"><input type="text" v-model.lazy="value"></div>
        </div>
        <div class="row g-0">
            <F></F>
        </div>

        <div class="row g-0">
            <div class="col-1">使用v-if</div>
            <div v-if="level==='A'" class="col-2">等级为A</div>
            <div v-else-if="level==='B'" class="col-2">等级为B</div>
            <div v-else="level==='C'" class="col-2">等级为C</div>
            <div class="col-md-3"><P5Button @click="funA">A</P5Button></div>
            <div class="col-md-3"><P5Button @click="level='B'">B</P5Button></div>
            <div class="col-md-3"><P5Button @click="level='C'">C</P5Button></div>
        </div>
        <div class="row g-0">
            <div class="col-2">使用v-show</div>
            <div class="col-2">{{flag}}</div>
            <div v-show="flag" class="col-4">显示与隐藏</div> 
            <div v-if="flag" class="col-4"><P5Button @click="flag=!flag">切换</P5Button></div>
            <div v-if="!flag" class="offset-4 col-4"><P5Button @click="flag=!flag">切换</P5Button></div>
        </div>
    
            <div class="row g-0">
            <div class="col-2" v-for="item in list" :key="item.id">
                索引是{{ item.id }} 内容是{{ item.msg }}
            </div>
            <div class="row g-0">
            <div class="col-3" v-for="(value,key,ind) in obj" :key="ind">
                属性索引:{{ ind }},属性名:{{ key }},属性值:{{ value }}
            </div>
            </div>
            </div>
            <div class="row g-0">
                <div class="col-6">
                    <P5Button @click="updateMoney">Greeting</P5Button>
                </div>
                <div class="col-6"><a href="xx.html" @click.prevent>阻止默认行为</a></div>
            </div>
            <div class="row g-0">
                <div class="col-6" @click.capture.self="show('父元素被冒泡牵连')">
                    <button @click="show('事件冒泡')">事件冒泡</button>
                    <button @click.stop="show('阻止事件冒泡')">阻止事件冒泡</button>
                </div>
                <div class="col-6">
                    <button @click.once="show('仅触发一次')">仅触发一次</button>
                </div>

            </div>
            <div class="row g-0">
                <div class="col-md-6" @click="show('父元素不捕获')">
                <button @click="show('不捕获子元素')">不捕获</button>
                </div>
                <div class="col-md-6" @click.capture="show('父元素捕获')" @click="show('冒泡阶段')" >
                <button @click.stop="show('捕获子元素')">捕获</button>
                </div>
            </div>


    </div>

<hr>
</template>

<script setup> 
import F from './F.vue'
import {  reactive,ref,provide} from 'vue'
import { P5Button } from 'p5-ui';
var value=ref("双向绑定");
const level=ref("A");
const flag = ref(true);
const funA=()=>{
    level.value="A";
}
const show = (msg)=>{
    console.log(msg);
}
const list=reactive([
    {id:0,msg:'0'},{id:1,msg:'d'},{id:2,msg:'0'},{id:3,msg:'0'}
]);

const obj=reactive({id:11,name:"对象渲染",type:' 对象'})

let money = ref(1000);
let updateMoney =eve=>{
    money.value+=500;
    if(money.value/500%2==1){
        eve.target.style.border='3px solid red';
    }
    else{
        eve.target.style.border='3px solid blue';
    }
}
provide('mone',money);
provide('updateMoney',updateMoney);




</script>



<style>
body{
    background-color: black;
    background-image: url('../assets/images/bg.png');
}
div:not(.container):not(#app){
    border:1px solid antiquewhite;
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