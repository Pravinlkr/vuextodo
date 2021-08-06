<template>
    <div class="todoinput">
        <input type="text" v-model="task">
        <button v-on:click="addTask({title:task})">Add</button>
    </div>
</template>
<script>
import {mapActions} from 'vuex';
export default {
    name:'todoInput',
    data(){
        return{
            task:''
        }
    },
    methods:{
        ...mapActions([
            'addTask'
        ])
    }
}
</script>
<style scoped>
.todoinput{
    margin:3% auto;
}
input{
    height: 30px;
    border:1px solid #ccc;
    outline:none;
}
button{
    height: 34px;
    width: 50px;
    border:none;
    outline:none;
    background-color: green;
    color:white;
}
</style>