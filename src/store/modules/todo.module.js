const state = {
    todoList:[
        {title: 'Task One', isEdit:false},
        {title: 'Task Two', isEdit:false},
        {title: 'Task Three', isEdit:false},
        {title: 'Task Four', isEdit:false}
    ],
    message:'',
    showSnackbar: false,
    taskSaved: false
    }
    
    
    const mutations = {
        ADD_TASK(state, payload){
            if(payload.title.trim().length>0){
                state.message = payload.title +" Added Successfully"
                state.todoList.push(payload);
                state.showSnackbar = true;
                state.taskSaved = true;
            }
            else{
                state.message = "Empty Task Cann't Be Added"
                state.showSnackbar = true;
            }  
        },
        DELETE_TASK(state, payload){

            state.message = state.todoList[payload].title + " deleted successfully"
            state.todoList.splice(payload,1);
            state.showSnackbar = true;
        },
        TO_EDIT(state, payload){
            for(let i=0; i<state.todoList.length; i++){
                if(i==payload){
                    state.todoList[payload].isEdit = true;
                }
                else{
                    state.todoList[i].isEdit = false;
                }
            }
        },
        UPDATE_TASK(state, payload){
            if(payload.task.trim().length>0){
                state.message = state.todoList[payload.index].title + " updated to "+ payload.task;
                state.todoList[payload.index].title = payload.task;
                state.todoList[payload.index].isEdit = false;
            }
            else{
                state.message = "Cann't update with empty field."
            }
            state.showSnackbar = true;
        },
        CLOSE_SNACKBAR(state){
            state.showSnackbar = false;
        }
    }
    
    
    const actions = {
        addTask(context,payload){
            context.commit('ADD_TASK',payload)
        },
        deleteTask(context,payload){
            context.commit('DELETE_TASK',payload)
        },
        closeSnackbar(context){
            context.commit('CLOSE_SNACKBAR');
        },
        toEdit(context, payload){
            context.commit('TO_EDIT', payload);
        },
        updateTask(context, payload){
            context.commit('UPDATE_TASK',payload);
        }
    }
    
    
    export default {
    namespaced: true,
    state,
    mutations,
    actions
    }
    
    