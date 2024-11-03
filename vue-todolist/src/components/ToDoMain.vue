<template>
    <div class="main">
        <ul class="todo-list">
            <li v-for="item in list" :key="item.id" :class="{completed: item.done}">
                <div class="view">
                    <input class="toggle" type="checkbox" v-model="item.done">
                    <label>{{ item.name }}</label>
                    <button class="destroy"></button>
                </div>
            </li>
        </ul>
    </div>
</template>
<script setup>
const props = defineProps(['list'])
const emit = defineEmits(['delToDo',id])
const delToDo = id=>{
    id && emit('delToDo',id)
}
</script>