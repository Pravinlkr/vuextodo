import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";



Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        todoList:[
            {title: 'Task One'},
            {title: 'Task Two'},
            {title: 'Task Three'},
            {title: 'Task Four'}
        ]
    },
    getters:{

    },
    mutations:{
        addTask:(state, payload)=>{
            state.todoList.push(payload);
        },
        deleteTask:(state, payload)=>{
            state.todoList.splice(payload,1);
        }
    },
    actions:{
        addTask:(context,payload) => {
            context.commit('addTask',payload)
        },
        deleteTask:(context,payload)=>{
            context.commit('deleteTask',payload)
        }
    },
    plugins: [createPersistedState()]
})