<template>
<v-card
    class="mx-auto"
    max-width="300"
    tile
  >
    <v-list dense>
      <v-subheader>To Do List</v-subheader>
      <v-list-item-group      >
        <v-list-item
          v-for="(item, index) in todoList"
          :key="index"
        >
          
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
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
