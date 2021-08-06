<template>
    <div class="todolist">
        <ul>
            <li v-for="(todo, index) in todoList" v-bind:key="index"><span class="todotitle">{{todo.title}}</span> <span class="deletebutton"><button v-on:click="deleteTask(index)">X</button></span></li><br>
        </ul>
    </div>
</template>
<script>
import {mapActions} from 'vuex';
export default {
    name:'todoList',
    computed:{
        todoList(){
            return this.$store.state.todoList
        }
    },
    methods:{
        ...mapActions([
            'deleteTask'
        ])
    }
}
</script>
<style scoped>
.todolist{
    width:30%;
    margin:2% auto;
    height: auto;
    padding:2% auto;
}
ul{
    width:auto;
}
li{
    list-style: none;
    width: 90%;
    display: inline-block;
}
.todotitle{
    float:left;
}
.deletebutton{
    float:right;
}
</style>