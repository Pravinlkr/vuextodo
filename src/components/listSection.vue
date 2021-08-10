<template>
<v-card
    class="mx-auto"
    max-width="400"
    tile
  >
    <v-list dense>
      <v-subheader>To Do List</v-subheader>
      <v-list-item-group      >
        <v-list-item
          v-for="(item, index) in todoList"
          :key="index"
        >
          <v-list-item-content v-if="!item.isEdit">
            <v-list-item-title v-text="item.title"> </v-list-item-title>
          </v-list-item-content>
          <v-text-field
            v-if="item.isEdit"
            v-model="eTask"
            label="Edit Task"
          ></v-text-field>
          
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-list-item-icon v-if="item.isEdit">
            <v-icon color="primary"  v-on:click="saveTask(index)">mdi-content-save</v-icon>
          </v-list-item-icon>
          <v-list-item-icon v-if="!item.isEdit">
            <v-icon color="primary"  v-on:click="editTask(index)">mdi-pencil</v-icon>
          </v-list-item-icon>
          <v-list-item-icon>
            <v-icon color="red"  v-on:click="deleteTask(index)">mdi-delete</v-icon>
          </v-list-item-icon>

        </v-list-item>
        
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
import {mapActions} from 'vuex';
  export default {
    data(){
      return{
        eTask:''
      }
    },
    computed:{
        todoList(){
            return this.$store.state.todo.todoList
        }
    },
    methods:{
        ...mapActions('todo',['deleteTask']),
        ...mapActions('todo',['toEdit']),
        ...mapActions('todo',['updateTask']),
        editTask(index){
          this.toEdit(index);
          this.eTask = this.todoList[index].title;
        },
        saveTask(index){
          this.updateTask({index:index, task:this.eTask});
        }
    }
  }
</script>
