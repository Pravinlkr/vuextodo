<template>
<v-row>
    <v-col></v-col>
    <v-col>
        <v-text-field label="Task Name" outlined class="mb-0" v-model="task"></v-text-field>
        <v-btn depressed color="primary" class="mb-5" v-on:click="addTask({title:task})">Add</v-btn>
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
        ...mapActions([
            'addTask'
        ])
    }
}
</script>
