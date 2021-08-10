<template>
  <div class="text-center ma-2" v-if="showSnackbar">
    <v-snackbar
      v-model="showSnackbar"
      :timeout="timeout"
    >
      {{alertMessage}}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="closeSnackbar()"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
  export default {
    data: () => ({
        timeout:-1
    }),
    watch:{
    },
    computed:{
        alertMessage(){
            return this.$store.state.todo.message
        },
        showSnackbar(){
            return this.$store.state.todo.showSnackbar
        }
    },
    methods:{
        ...mapActions('todo',['closeSnackbar'])
    }
  }
</script>
