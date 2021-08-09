import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

import todo from './modules/todo.module'


Vue.use(Vuex);

export const store = new Vuex.Store({
    modules:{
        todo
    },
    plugins: [createPersistedState()]
})