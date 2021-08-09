<template>
<v-row>
    <v-col></v-col>
    <v-col>
        <v-text-field label="Task Name" outlined class="mb-0" v-model="task"></v-text-field>
        <v-btn depressed color="primary" class="mb-5" v-on:click="handleAddButton()">Add</v-btn>
    </v-col>
    <v-col></v-col>
</v-row>
</template>
<script>
import {mapActions} from 'vuex';
export default {
    data(){
        return{
            task:''
        }
    },
    methods:{
        ...mapActions('todo',['addTask']),
       handleAddButton(){
           this.addTask({title:this.task, isEdit:false});
           this.task = '';
       }
    }
}
</script>
